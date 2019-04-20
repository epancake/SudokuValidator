let bigSudokuEntry = [
  "1,2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,9,1,3,4,5,6,7,8,9,1,2,4,5,6,7,8,9,1,2,3,5,6,7,8,9,1,2,3,4,6,7,8,9,1,2,3,4,5,7,8,9,1,2,3,4,5,6,8,9,1,2,3,4,5,6,7,9,1,2,3,4,5,6,7,8"
];

const checkSudoku = (sudokuEntries) => {
  let parsedEntries = sudokuEntries[0].split(',');
  return checkRows(parsedEntries) &&
    checkColumns(parsedEntries) &&
    checkGrids(parsedEntries)
    ? 'True'
    : 'False';
}

const checkRows = (sudokuEntries) => {
  let allValid = true;

  for (let i = 0; i < sudokuEntries.length; i += 9) {
    row = sudokuEntries.slice(i, i + 9);
    if (!validator(row)) {
      allValid = false;
    }
  }
  return allValid;
}

const checkColumns = (sudokuEntries) => {
  let allValid = true;

  for (let i = 0; i < 9; i++) {
    let column = [];
    for (let j = i; j < sudokuEntries.length; j += 9) {
      column.push(sudokuEntries[j]);
    }
    if (!validator(column)) {
      allValid = false;
    }
  }

  return allValid;
}

const checkGrids = (sudokuEntries) => {
  let allValid = true;

  for (let i = 0; i < 9; i++) {
    let subgrid = [];
    for (let j = i; 8 > subgrid.length; j += 9) {
      subgrid.push(sudokuEntries[j]);
      subgrid.push(sudokuEntries[j + 1]);
      subgrid.push(sudokuEntries[j + 2]);
    }
    if (!validator(subgrid)) {
      allValid = false;
    }
  }
  return allValid;
}

const validator = (array) => {
  isValid = true;
  array.sort();
  array.forEach((item, i) => {
    if (parseInt(item) !== i + 1) {
      isValid = false;
    }
  });
  return isValid;
};

checkSudoku(bigSudokuEntry);