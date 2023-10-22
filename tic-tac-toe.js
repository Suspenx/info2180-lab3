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
          checkForWinner(); // Check for a winner
        }
      });
    });
  
    // Exercise 3 - Mouse Hover Effects
    squares.forEach((square) => {
      square.addEventListener("mouseenter", function () {
        square.classList.add("hover");
      });
      square.addEventListener("mouseleave", function () {
        square.classList.remove("hover");
      });
    });
  
    // Exercise 4 - Check for Winner
    function checkForWinner() {
      const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
  
      for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (
          squares[a].classList.contains("X") &&
          squares[b].classList.contains("X") &&
          squares[c].classList.contains("X")
        ) {
          document.querySelector("#status").textContent = "Congratulations! X is the Winner!";
          document.querySelector("#status").classList.add("you-won");
        } else if (
          squares[a].classList.contains("O") &&
          squares[b].classList.contains("O") &&
          squares[c].classList.contains("O")
        ) {
          document.querySelector("#status").textContent = "Congratulations! O is the Winner!";
          document.querySelector("#status").classList.add("you-won");
        }
      }
    }

