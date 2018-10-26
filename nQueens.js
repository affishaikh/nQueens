//Create a queenBoard of n*n
const createQueenBoard = function(queenBoardLength) {
  let queenBoard = new Array(queenBoardLength).fill(0);
  for(index in queenBoard) {
    queenBoard[index] = new Array(queenBoardLength).fill('-');
  }
  return queenBoard;
}

const isColumnAvailable = function(column, completedColumns) {
  return !completedColumns.includes(column);
}

const isCellAvailableWithReferenceToLeftDiagonal = function(row, column, queenBoard) {
  let result = true;
  for(row = row-1, column = column-1; row>=0 && column>=0; row--, column--) {
    if(queenBoard[row][column] == 'Q') {
      result = false;
      return result;
    }
  }
  return result;
}

const isCellAvailableWithReferenceToRightDiagonal = function(row, column, queenBoard) {
  let result = true;
  for(row = row-1, column = column+1; row>=0 && column<6; row--, column++) {
    if(queenBoard[row][column] == 'Q') {
      result = false;
      return result;
    }
  }
  return result;
}

const moveQueen = function(queenBoard) {
  let completedRows = [];
  let completedColumns = [];
  for(let row = 0; row < queenBoard.length; row++) {
    for(let column = 0; column < queenBoard.length && !completedRows.includes(row); column++) {
      let isColAvailable = isColumnAvailable(column, completedColumns);
      let isCellAvailable = isColAvailable && isCellAvailableWithReferenceToLeftDiagonal(row, column, queenBoard);
      isCellAvailable = isCellAvailable && isCellAvailableWithReferenceToRightDiagonal(row, column, queenBoard);
      if(isCellAvailable) {
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
