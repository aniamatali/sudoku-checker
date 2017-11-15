var SudokuArray = require('../js/sudoku.js').sudokuModule;

$(document).ready(function() {
  $("#calcInput").submit(function(event) {
    event.preventDefault();

    var p1 = parseInt($("input#p1").val());
    var p2 = parseInt($("input#p2").val());
    var p3 = parseInt($("input#p3").val());
    var p4 = parseInt($("input#p4").val());
    var p5 = parseInt($("input#p5").val());
    var p6 = parseInt($("input#p6").val());
    var p7 = parseInt($("input#p7").val());
    var p8 = parseInt($("input#p8").val());
    var p9 = parseInt($("input#p9").val());

    var arrayOf9 = [p1, p2, p3, p4, p5, p6, p7, p8, p9];
    var thisArray = new SudokuArray(arrayOf9);

  });
});
