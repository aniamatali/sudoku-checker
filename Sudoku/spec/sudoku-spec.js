var SudokuArray = require('./../js/sudoku.js').sudokuModule;

describe('SudokuArray', function() {

  it('should test whether the sum of the array is 45', function() {

    var arrayOf9 = [2,3,4,1,5,6,7,8,9];
    var sudokuChecker = new SudokuArray();
    var result = sudokuChecker.SumChecker(arrayOf9);

    expect(result).toEqual(true)
  });
});

describe('SudokuArray', function() {

  it('should test whether the sum of the array is not 45', function() {

    var arrayOf9 = [2,3,4,1,5,6,7,19,9];
    var sudokuChecker = new SudokuArray();
    var result = sudokuChecker.SumChecker(arrayOf9);

    expect(result).toEqual(false)
  });
});

describe('SudokuArray', function() {

  it('should test whether the array has no duplicate', function() {

    var arrayOf9 = [2,3,4,1,5,6,7,8,9];
    var sudokuChecker = new SudokuArray();
    var result = sudokuChecker.DuplicateChecker(arrayOf9);

    expect(result).toEqual(true)
  });
});

describe('SudokuArray', function() {

  it('should test whether the array has a duplicate', function() {

    var arrayOf9 = [2,3,4,1,5,6,7,9,9];
    var sudokuChecker = new SudokuArray();
    var result = sudokuChecker.DuplicateChecker(arrayOf9);

    expect(result).toEqual(false)
  });
});
