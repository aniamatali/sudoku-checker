(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function SudokuArray() {

}

SudokuArray.prototype.DuplicateChecker = function(arrayOf9)
{
  var sorted_arrayOf9 = arrayOf9.slice().sort();
  var results = [];
  var result = true;

  for (i=0; i<=8; i++)
  {
    if(sorted_arrayOf9[i+1] == sorted_arrayOf9[i])
    {
      result = false;
      i+=9;
    }
  }
  return result;
};


SudokuArray.prototype.SumChecker = function(arrayOf9) {

  var i=0;
  var sum = 0;
  var result = false;

  for (i=0; i<=8; i++)
  {
    sum += arrayOf9[i];
  }

  if (sum === 45)
  {
    result = true;
  }

  return result;
};

exports.sudokuModule = SudokuArray;

},{}],2:[function(require,module,exports){
var SudokuArray = require('../js/sudoku.js').sudokuModule;

$(document).ready(function() {
  $("#calcInput").submit(function(event) {
    event.preventDefault();

    var arrayOf9 = [2,3,4,1,5,6,7,8,9];
    var thisArray = new SudokuArray(arrayOf9);

  });
});

},{"../js/sudoku.js":1}]},{},[2]);
