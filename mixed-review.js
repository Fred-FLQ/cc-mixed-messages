const game_title = [
    "The Legend of Zelda: Breath of the Wild",
    "Hollow Knight",
    "Celeste",
    "Dark Souls",
    "Stardew Valley",
    "Elden Ring",
    "Super Mario Odyssey"
];

const game_device = [
    "PC",
    "Nintendo Switch",
    "PlayStation 5",
    "Xbox Series X",
    "Steam Deck",
    "PlayStation 4"
];

const adjectives = [
    "breathtaking",
    "vibrant",
    "stunning",
    "impressive",
    "beautiful",
    "immersive",
    "otherworldly",
    "jaw-dropping",
    "captivating",
    "fantastic",
    "mesmerizing",
    "awe-inspiring",
    "unforgettable"
];

const review_comments = {
    visuals: [
        "The visuals were ${adjective}, bringing the world to life with every detail.",
        "Each scene was a visual treat, offering ${adjective} landscapes and designs.",
        "The art style was so ${adjective} that I often found myself stopping just to admire the view.",
        "From the smallest details to the sweeping vistas, the game looked absolutely ${adjective}."
    ],
    levelDesign: [
        "The level design was a masterclass, rewarding exploration at every turn.",
        "Each area felt carefully crafted, with secrets and surprises hidden around every corner.",
        "The progression through the game's areas was seamless and intuitive, making exploration a joy.",
        "Every level felt distinct and ${adjective}, adding to the game's sense of discovery."
    ],
    story: [
        "The storyline was captivating, with twists and turns that kept me hooked until the end.",
        "While the main story was compelling, the side quests added depth to the world.",
        "The narrative was beautifully woven, full of emotional moments and memorable characters.",
        "Even after finishing the main story, I found myself thinking about the game's ${adjective} plot."
    ],
    controls: [
        "The controls were smooth and responsive, making every action feel natural.",
        "Handling the character felt intuitive, with no frustration even in tense moments.",
        "Combat mechanics were fluid and ${adjective}, making each encounter feel rewarding.",
        "From movement to interaction, the game was designed with the player in mind."
    ],
    overall: [
        "Overall, this was a truly ${adjective} experience that I would recommend to anyone.",
        "This game is a masterpiece, blending ${adjective} gameplay with stunning visuals and engaging story.",
        "It’s not just a game—it’s an experience. ${game_title} sets a new standard for its genre.",
        "For fans of ${game_title}, this is a must-play, offering ${adjective} moments that will stay with you."
    ]
};

const randomizer = (data) => {
    return Math.floor(Math.random() * data.length);
}

const adjectivesList = adjectives;

const newReview = () => {
    let hours = Math.floor(Math.random() * 90 + 10);
    let title = game_title[randomizer(game_title)];
    let device = game_device[randomizer(game_device)];
    // let adjective = adjectives[randomizer(adjectives)];
    let review = `I just wrapped up playing ${title} on my ${device}, and it was a really ${adjectivesList.splice(randomizer(adjectivesList), 1)} experience! It took me ${hours} hours to see the credits roll.`;

    for (let each of Object.values(review_comments)) {
        let comment = each[randomizer(each)];
        comment = comment
            .replaceAll('${adjective}', `${adjectivesList.splice(randomizer(adjectivesList), 1)}`)
            .replaceAll('${game_title}', `${title}`);
        review += ' ' + comment;
    }

    return review;
}

document.getElementById("review").innerText = newReview();