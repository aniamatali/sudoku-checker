var SudokuArray = require('../js/sudoku.js').sudokuModule;

$(document).ready(function() {
  $("#calcInput").submit(function(event) {
    event.preventDefault();

    var arrayOf9 = [2,3,4,1,5,6,7,8,9];
    var thisArray = new SudokuArray(arrayOf9);

  });
});
