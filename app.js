let initState = [
  `0 4 0 0 0 0 1 7 9 
    0 0 2 0 0 8 0 5 4 
    0 0 6 0 0 5 0 0 8 
    0 8 0 0 7 0 9 1 0 
    0 5 0 0 9 0 0 3 0 
    0 1 9 0 6 0 0 4 0 
    3 0 0 4 0 0 7 0 0 
    5 7 0 1 0 0 2 0 0 
9 2 8 0 0 0 0 6 0`,

  `2 0 6 0 0 0 0 4 9
0 3 7 0 0 9 0 0 0
1 0 0 7 0 0 0 0 6
0 0 0 5 8 0 9 0 0
7 0 5 0 0 0 8 0 4
0 0 9 0 6 2 0 0 0
9 0 0 0 0 4 0 0 1
0 0 0 3 0 0 4 9 0
4 1 0 0 0 0 2 0 8`,

  `0 0 1 7 2 5 0 0 0
0 8 0 0 1 0 0 0 6
2 5 0 0 0 0 1 3 0
0 7 0 0 0 0 5 0 0
0 0 0 1 0 6 0 0 0
0 0 9 0 0 0 0 8 0
0 4 5 0 0 0 0 2 9
7 0 0 0 9 0 0 6 0
0 0 0 6 4 8 3 0 0`,
  `8 0 0 2 0 0 0 4 6
0 0 7 9 0 0 0 0 0
1 0 0 0 0 0 5 0 0
0 0 0 5 0 0 0 3 2
4 0 8 0 0 0 7 0 1
3 2 0 0 0 7 0 0 0
0 0 6 0 0 0 0 0 9
0 0 0 0 0 3 2 0 0
2 8 0 0 0 6 0 0 3`,
  `0 0 1 3 0 0 7 0 2
0 0 6 2 0 0 0 1 0
0 2 0 0 0 0 0 0 4
2 0 0 6 0 1 3 0 9
0 0 0 0 0 0 0 0 0
4 0 3 8 0 9 0 0 7
1 0 0 0 0 0 0 8 0
0 5 0 0 0 6 4 0 0
9 0 4 0 0 8 5 0 0`,
  `0 7 1 0 3 9 0 0 0
4 6 0 0 7 5 0 1 0
8 3 0 0 6 0 7 0 2
0 4 2 0 0 0 0 5 8
6 0 0 0 0 0 9 7 0
0 1 0 5 0 0 0 0 4
0 0 0 0 0 8 4 6 9
7 9 0 3 4 2 0 0 0
5 0 0 0 0 1 3 0 0`,
  `0 0 7 0 0 1 4 0 0
0 6 0 0 0 0 0 0 0
2 0 5 0 0 0 0 0 0
0 0 1 7 6 0 0 5 8
0 0 0 0 3 0 0 0 0
0 9 0 2 0 4 0 0 0
0 3 0 0 5 0 0 0 9
0 0 4 0 0 0 6 0 0
0 5 0 0 8 0 7 2 1`,
  `6 7 0 0 0 8 0 1 0
0 2 0 0 6 0 0 0 0
0 0 0 0 3 0 0 0 0
2 0 1 0 0 0 0 0 6
4 8 0 0 0 1 7 0 0
0 0 0 0 0 0 0 0 9
0 0 4 5 0 0 0 0 0
0 0 0 0 0 0 3 0 0
0 0 3 4 0 0 8 0 2`,
  `1 0 0 0 0 7 0 9 0
0 3 0 0 2 0 0 0 8
0 0 9 6 0 0 5 0 0
0 0 5 3 0 0 9 0 0
0 1 0 0 8 0 0 0 2
6 0 0 0 0 4 0 0 0
3 0 0 0 0 0 0 1 0
0 4 0 0 0 0 0 0 7
0 0 7 0 0 0 3 0 0`,
  `8 0 6 0 0 0 0 5 2
0 9 0 7 4 0 0 0 0
0 7 2 6 5 8 0 3 4
0 0 0 2 0 0 0 6 3
9 0 3 1 6 0 0 0 7
0 0 0 0 0 0 0 0 0
0 0 0 5 0 0 6 0 0
4 1 0 0 0 0 3 2 5
5 0 7 0 0 0 0 0 8`,
];

document.querySelector(".input").placeholder = `0 4 0 0 0 0 1 7 9
0 0 2 0 0 8 0 5 4
0 0 6 0 0 5 0 0 8
0 8 0 0 7 0 9 1 0
0 5 0 0 9 0 0 3 0
0 1 9 0 6 0 0 4 0
3 0 0 4 0 0 7 0 0
5 7 0 1 0 0 2 0 0
9 2 8 0 0 0 0 6 0`;

let display = document.querySelector(".leftBox");

let arr = [];
let backup;

let submitButton = document.querySelector(".submitButton");
submitButton.addEventListener("click", solveChecker);

let submitInput = document.querySelector(".submitInput");
submitInput.addEventListener("click", submitInputHandler);

let resetButton = document.querySelector(".resetButton");
resetButton.addEventListener("click", resetSudoku);

let solverButton = document.querySelector(".solverButton");
solverButton.addEventListener("click", sudokuSolver);

//getting one sudoku preFilled
function getSudokuPuzzle() {
  let gridInput = initState[Math.floor(Math.random() * initState.length)];
  arr = [];
  gridInput = gridInput.trim().split("\n");
  if (gridInput.length < 9) {
    alert("invalid matrix");
    return;
  }
  let temp = [];
  for (let i = 0; i < gridInput.length; i++) {
    let column = gridInput[i].trim().split(" ").map(Number);
    if (column.length < 9) {
      alert("invalid matrix");
      return;
    }
    temp.push(column);
  }
  console.log(temp);
  arr = temp;
  displaySudoku(arr);
}
getSudokuPuzzle();

//reset sudoku with new sudoku inputs
function resetSudoku() {
  let gridInput = initState[Math.floor(Math.random() * initState.length)];
  arr = [];
  gridInput = gridInput.trim().split("\n");
  if (gridInput.length < 9) {
    alert("invalid matrix");
    return;
  }
  let temp = [];
  for (let i = 0; i < gridInput.length; i++) {
    let column = gridInput[i].trim().split(" ").map(Number);
    if (column.length < 9) {
      alert("invalid matrix");
      return;
    }
    temp.push(column);
  }
  arr = temp;
  displayNewSudoku(arr);
}

//initial Board creation
function displaySudoku(arr) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let input = document.createElement("input");
      input.setAttribute("class", "sudokuBox");
      let key = [i, j];
      input.setAttribute("id", key);
      input.setAttribute("type", "number");
      input.setAttribute("max", 9);
      input.setAttribute("min", 1);
      input.addEventListener("change", onChangeHandler);
      if (arr[i][j] !== 0) {
        input.value = arr[i][j];
      }
      if (input.value !== "") {
        input.setAttribute("disabled", true);
      }
      display.appendChild(input);
    }
  }
}

//input change handler
function onChangeHandler(e) {
  let id = e.target.id;
  arr[id[0]][id[2]] = +e.target.value;
}

//display new sudoku input
function submitInputHandler() {
  arr = inputHandler();
  backup = [...arr];
  if (arr.length === 9) {
    if (arr[0].length === 9) {
      displayNewSudoku(arr);
    } else {
      alert("Please enter valid Sudoku");
    }
  } else {
    alert("Please enter a valid Sudoku");
  }
}

//reset new input and display in dom
function displayNewSudoku(array) {
  arr = array;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      let key = [i, j];
      let input = document.getElementById(key);
      input.removeAttribute("disabled");
      input.value = array[i][j];
      if (array[i][j] !== 0) {
        input.value = array[i][j];
      } else {
        input.value = "";
      }
      if (input.value !== "") {
        input.setAttribute("disabled", "true");
      }
    }
  }
}

//input handler for incoming question
function inputHandler() {
  let questionInput = document.querySelector(".input").value;
  if (!questionInput.trim()) {
    return alert("Sudoku Cannot be empty");
  }
  let questionArray = [];
  let count = 0;
  let temp = [];
  for (let i = 0; i < questionInput.length; i++) {
    if (questionInput[i].trim()) {
      temp.push(+questionInput[i]);
      count++;
      if (count === 9) {
        questionArray.push(temp);
        temp = [];
        count = 0;
      }
    }
  }
  return questionArray;
}

//solution checker

function solveChecker() {
  for (let i = 0; i < arr.length; i++) {
    let objOne = {};
    let objTwo = {};
    for (let j = 0; j < arr.length; j++) {
      objOne[arr[i][j]] = 1;
      objTwo[arr[j][i]] = 1;
    }

    if (Object.keys(objOne).length !== 9 || Object.keys(objTwo).length !== 9) {
      return alert("Try Again");
    }
  }

  return alert("Good Work!");
}

// sudoku solver

function sudokuSolver() {
  const emptyCells = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === 0) {
        emptyCells.push([i, j]);
      }
    }
  }

  function isSafe(row, col, currentChoice) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[row][i] === currentChoice) {
        return false;
      }
      if (arr[i][col] === currentChoice) {
        return false;
      }
      r = Math.floor(row / 3) * 3;
      c = Math.floor(col / 3) * 3;
      for (let i = r; i < r + 3; i++) {
        for (let j = c; j < c + 3; j++) {
          if (arr[i][j] === currentChoice) {
            return false;
          }
        }
      }
    }
    return true;
  }

  function sudoku(current) {
    if (current === emptyCells.length) {
      return true;
    }
    let [row, col] = emptyCells[current];
    for (let i = 1; i < 10; i++) {
      if (isSafe(row, col, i)) {
        arr[row][col] = i;
        if (sudoku(current + 1)) {
          return true;
        }
        arr[row][col] = 0;
      }
    }
    return false;
  }

  if (sudoku(0)) {
    return displayNewSudoku(arr);
  } else {
    alert("No solution for this puzzle");
  }
}
