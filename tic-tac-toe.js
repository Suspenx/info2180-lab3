document.addEventListener("DOMContentLoaded", function () {
    let currentPlayer = "X"; // Initialize the current player
  
    // Exercise 1 - Styling the Squares
    const squares = document.querySelectorAll("#board > div");
    squares.forEach((square) => square.classList.add("square"));
  
    // Exercise 2 - Add X or O on Click
    squares.forEach((square) => {
      square.addEventListener("click", function () {
        if (!square.classList.contains("X") && !square.classList.contains("O")) {
          // Check if the square is not already marked
          square.classList.add(currentPlayer); // Add X or O class
          square.textContent = currentPlayer; // Display X or O
          currentPlayer = currentPlayer === "X" ? "O" : "X"; // Toggle player
          //checkForWinner(); - need to develop this function to check for winner/combinations
        }
      });
    });

