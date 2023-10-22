function playGame() {
    // Initialize score from local storage or with defaults
    let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };

    let computerMove = '';

    function pickComputerMove() {
        // ... (your existing code for generating the computer's move)
    }

    function game(myClick) {
        // ... (your existing code for the game logic)
    }

    function reset() {
        // Reset the score
        score = { wins: 0, losses: 0, ties: 0 };
        // Update the score in local storage
        localStorage.setItem('score', JSON.stringify(score));
    }
}

// Call the playGame function to start the game
playGame();
