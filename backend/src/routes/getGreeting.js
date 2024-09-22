// const GREETING = 'Hello world!';
const GREETINGS = [
    "Whalecome!",
    "All hands on deck!",
    "Charting the course ahead!",
    "世界你好!",
];

module.exports = async (req, res) => {
    res.send({
        // greeting: GREETING,
        greeting: GREETINGS[Math.floor(Math.random() * GREETINGS.length)],
    });
};
