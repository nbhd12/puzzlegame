const puzzleBoard = document.getElementById("puzzleboard") as HTMLElement;

let puzzle: (number | null)[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, null]
];

let moveCount: number = 0;

function shufflePuzzle(): void {
  for (let i = 0; i < 100; i++) {
    const randomRow: number = Math.floor(Math.random() * 3);
    const randomCol: number = Math.floor(Math.random() * 3);
    const emptyCell = findEmptyCell();
    if (canSwap(randomRow, randomCol, emptyCell)) {
      swap(randomRow, randomCol, emptyCell.row, emptyCell.col);
    }
  }
}



function findEmptyCell(): { row: number; col: number } {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (puzzle[row][col] === null) {
        return { row, col };
      }
    }
  }
  throw new Error("No empty cell found");
}

function canSwap(row: number, col: number, emptyCell: { row: number; col: number }): boolean {
  const diffRow = Math.abs(row - emptyCell.row);
  const diffCol = Math.abs(col - emptyCell.col);
  return (diffRow === 1 && diffCol === 0) || (diffRow === 0 && diffCol === 1);
}

function swap(row1: number, col1: number, row2: number, col2: number): void {
  const temp = puzzle[row1][col1];
  puzzle[row1][col1] = puzzle[row2][col2];
  puzzle[row2][col2] = temp;
}

function renderPuzzle(): void {
  puzzleBoard.innerHTML = "";
  puzzle.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      const piece = document.createElement("div");
      piece.classList.add("puzzle-piece");
      if (cell === null) {
        piece.classList.add("empty");
      } else {
        piece.textContent = String(cell);
        piece.onclick= () => movePiece(rowIndex, colIndex);
      }
      puzzleBoard.appendChild(piece);
    });
  });
}

function movePiece(row: number, col: number): void {
  const emptyCell = findEmptyCell();
  if (canSwap(row, col, emptyCell)) {
    swap(row, col, emptyCell.row, emptyCell.col);
    moveCount++;
    renderPuzzle();
    checkWin();
  }
}

function checkWin(): void {
  let isSolved: boolean = true;
  let expected: number = 1;
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col< 3; col++) {
      if (
        puzzle[row][col] !== expected &&
        puzzle[row][col] !== null
      ) {
        isSolved= false;
        break;
      }
      expected++;
    }
  }
  if (isSolved) {
    winSound.play();
    alert(`Felicitations!🎉 You won in ${moveCount} moves!`);
    shufflePuzzle();
    moveCount = 0;
    renderPuzzle();
  }
}

shufflePuzzle();
renderPuzzle();



// //Timer Functionlaity
// let startTime: number;
// let timerInterval: number;

// function startTimer() {
//   startTime = Date.now();

//   timerInterval = setInterval(() => {
//     const now = Date.now();
//     const elapsed = now - startTime;
//     const seconds = Math.floor(elapsed / 1000);

//     const timeElement = document.querySelector(".time");
//     if (timeElement) {
//       timeElement.textContent = `Time : ${seconds}`;
//     }
//   }, 1000);
// }

// document.addEventListener("DOMContentLoaded", () => {
//   startTimer(); // start as soon as page loads
// });


// Shuffle Button
const ShufflePieces = document.getElementById("ShufflePieces") as HTMLButtonElement;
ShufflePieces.addEventListener("click",() => {
  shufflePuzzle();
  moveCount = 0;
  renderPuzzle();
})


//Popup
const openbtn = document.getElementById('open') as HTMLButtonElement | null;
const modalContainer = document.getElementById('modalContainer') as HTMLElement | null;
const closebtn = document.getElementById('close') as HTMLButtonElement | null;

if (openbtn && modalContainer && closebtn) {
  openbtn.addEventListener('click', () => {
    modalContainer.classList.add('show');
  });

  closebtn.addEventListener('click', () => {
    modalContainer.classList.remove('show');
  });
}


//win sound
const winSound = new Audio('./Assets/Sounds/WinSound.mp3');
winSound.volume= 0.4;