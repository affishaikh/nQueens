//Create a queenBoard of n*n
const createQueenBoard = function(queenBoardLength) {
  let queenBoard = new Array(queenBoardLength).fill(0);
  for(index in queenBoard) {
    queenBoard[index] = new Array(queenBoardLength).fill('-');
  }
  return queenBoard;
}

const main = function() {
  let queenBoardLength = +process.argv[2];
  console.log(createQueenBoard(queenBoardLength));
}

main();
