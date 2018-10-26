//Create a queenBoard of n*n
const createQueenBoard = function(queenBoardLength) {
  let queenBoard = new Array(queenBoardLength).fill(0);
  for(index in queenBoard) {
    queenBoard[index] = new Array(queenBoardLength).fill('-');
  }
  return queenBoard;
}

const isColumnCompleted = function(column, completedColumns) {
  return completedColumns.includes(column);
}

const moveQueen = function(queenBoard) {
  let completedRows = [];
  let completedColumns = [];
  for(let row = 0; row < queenBoard.length; row++) {
    for(let column = 0; column < queenBoard.length && !completedRows.includes(row); column++) {
      if(!isColumnCompleted(column, completedColumns)) {
        queenBoard[row][column] = 'Q';
        completedRows.push(row);
        completedColumns.push(column);
      }
    }
  }
  return queenBoard;
}

const main = function() {
  let queenBoardLength = +process.argv[2];
  queenBoard = createQueenBoard(queenBoardLength);
  console.log(moveQueen(queenBoard)); 
}

main();
