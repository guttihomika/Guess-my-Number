async function makeGuess() {
    const guess = document.getElementById('guessInput').value;
    const message = document.getElementById('message');

    const response = await fetch('http://localhost:3000/guess', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ guess: parseInt(guess) })
    });

    const data = await response.json();
    message.innerText = data.result;
}
