# SudokuValidator

A JavaScript solution to Sudoku. The inputs are received as an array with one entry, a string of comma seperatred numbers (81 numbers in a sudoku). The output is true or false based on if that list of numbers if entered into a sudoku board in row-major order would be a valid solution.

### Example input: 
`let bigSudokuEntry = [
  "1,2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,9,1,3,4,5,6,7,8,9,1,2,4,5,6,7,8,9,1,2,3,5,6,7,8,9,1,2,3,4,6,7,8,9,1,2,3,4,5,7,8,9,1,2,3,4,5,6,8,9,1,2,3,4,5,6,7,9,1,2,3,4,5,6,7,8"
];`

### Example output:
`"False"`
