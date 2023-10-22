// event handling code so that each square is styled appropriatley
document.addEventListener('DOMContentLoaded', function() {
   var board = document.getElementById("board") 
   var squares = board.querySelectorAll('div')

   squares.forEach(function(square){
    square.classList.add('square')
   })
})