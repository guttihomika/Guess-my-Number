const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let secretNumber = Math.floor(Math.random() * 100) + 1;

app.post('/guess', (req, res) => {
    const userGuess = req.body.guess;

    if (userGuess === secretNumber) {
        res.json({ result: "Correct! You won!" });
        secretNumber = Math.floor(Math.random() * 100) + 1; // Reset game
    } else if (userGuess > secretNumber) {
        res.json({ result: "Too high!" });
    } else {
        res.json({ result: "Too low!" });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
