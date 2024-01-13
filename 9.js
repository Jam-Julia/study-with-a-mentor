let board = [
  ["1", "2", "13", "4", "5", "6", "7", "8", "9"],
  ["1", "2", "14", "4", "5", "6", "7", "8", "9"],
  ["1", "2", "15", "4", "5", "6", "7", "8", "9"], ,
  ["1", "2", "16", "4", "5", "6", "7", "8", "9"],
  ["1", "2", "17", "4", "5", "6", "7", "8", "9"],
  ["1", "2", "18", "4", "5", "6", "7", "8", "9"],
  ["1", "2", "19", "1", "3", "6", "7", "8", "9"],
  ["1", "2", "20", "4", "5", "6", "7", "88", "9"],
  ["1", "2", "21", "1", "3", "6", "7", "89", "9"]];


function GorizontalValid(arr) {
  let validBoardGoriz = "true";

  //copy of board
  let boardCopy = [];
  for (let i = 0; i < arr.length; i++) {
    boardCopy[i] = arr[i].slice();
  }

  //
  for (let i in boardCopy) {
    //get goriz line
    let goriz = boardCopy[i];

    //filter '.'
    let gorizLenght = goriz.length;
    for (ii = gorizLenght; ii > -1; ii--) {
      if (goriz[ii] === '.') {
        goriz.splice([ii], 1);
      }
    }


    let gorizNewLenght = goriz.length;
    //check
    let doubless = Array.from(new Set(goriz));
    if (gorizNewLenght != doubless.length) {
      validBoardGoriz = "false";
    }
  }
  return validBoardGoriz;


}

function HelperTransparentBoard(arr) {
  let validBoardGoriz = "true";
  let transpBoard = arr;
  let newArr = transpBoard.map((el, i) => el.map((el2, j) => transpBoard[j][i]));
  return (newArr);
}

function VerticalValid(arr) {
  let vert = HelperTransparentBoard(arr);
  let validBoardVert = GorizontalValid(vert);
  return validBoardVert;
}

function makeSquare(arr, x1, x2, y1, y2) {
  let boardCopy = [];
  j = 0;
  x3 = x2 + 1;
  y3 = y1 - 1;
  for (let i = x1; i < x3; i++) {
    boardCopy[j] = arr[i].slice(y3, y2);
    j = j + 1;
  }
  return boardCopy;
}

function validEverySquare(board, x1, x2, y1, y2) {
  let validSquare = true;

  let square = makeSquare(board, x1, x2, y1, y2);//если поставить сразу числа наример board,7,9,7,9 то слайс видится
  //make string
  var square2 = [];
  for (i = 0; i < square.length; i++) {
    for (j = 0; j < square[i].length; j++) {
      square2.push(square[i][j]);

    }
  }

  //filter string
  for (i = square2.length; i > -1; i--) {
    if (square2[i] === '.') { square2.splice([i], 1) };
  }

  //search double
  let doubless = Array.from(new Set(square2));
  if (doubless.length != square2.length) {
    validSquare = false;
  }
  return validSquare;
}


// for(let i=1;i<10; i=i+3){
//   for(let j=1;j<10; j=j+3){
// let x1=i, x2=(i+2), y1=j, y2=(j+2);
// console.log(x1,x2,y1,y2);
// // let res=makeSquare(board,x1,x2,y1,y2);

// // console.log(res);
//   }
// }
let first = makeSquare(board, 7, 9, 7, 9)

console.log(first);