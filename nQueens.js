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
  for(let row = 1; row < queenBoard.board.length; row++) {
    for(let column = 0; column < queenBoard.board.length && !queenBoard.completedRows.includes(row); column++) {
      let isColAvailable = isColumnAvailable(column, queenBoard.completedColumns);
      let isCellAvailable = isColAvailable && isCellAvailableWithReferenceToLeftDiagonal(row, column, queenBoard.board);
      isCellAvailable = isCellAvailable && isCellAvailableWithReferenceToRightDiagonal(row, column, queenBoard.board);
      if(isCellAvailable) {
        queenBoard.board[row][column] = 'Q';
        queenBoard.completedRows.push(row);
        queenBoard.completedColumns.push(column);
      }
    }
    if(!queenBoard.completedRows.includes(row)) {
      queenBoard.isBoardComplete = false;
      return queenBoard;
    }
  }
  queenBoard.isBoardComplete = true; 
  return queenBoard;
}

const firstRowMoveGenerator = function(index, length) {
  return function() {
    if(index >= length) {
      console.log("The index exceeds the queenBoard");
      process.exit(0);
    }
    let board = createQueenBoard(length);
    board[0][index] = 'Q';
    return {board: board, completedColumns: [index++], completedRows: [0], length: length, isBoardComplete: false};
  }
}

const main = function() {
  let queenBoardLength = +process.argv[2];
  let moveQueenInFirstRow = firstRowMoveGenerator(0, queenBoardLength);
  let queenBoard = {};
  do {
    queenBoard = moveQueenInFirstRow();
    queenBoard = moveQueen(queenBoard);
  }while(!queenBoard.isBoardComplete) 
  console.log(queenBoard.board)
}

main();
