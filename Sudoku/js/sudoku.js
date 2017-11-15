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
