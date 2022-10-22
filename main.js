"use strict";

let chessBoardExsists = false;

let blackOrWhite = "white";

let chessBoard = "";

let generertID = 0;

let bricks = ["♟", "♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"];

let generatedEventLisener = [];

const start = () => {
  makeChessBoard();
  document.getElementById("yes").innerHTML = `${chessBoard}`;
  spawnPieces();
  generateEventLiseners();
};

const makeChessBoard = () => {
  if (chessBoard === "") {
    for (let i = 0; i < 8; i++) {
      chessBoard = chessBoard += '<div class="horisontalt">';
      for (let y = 0; y < 8; y++) {
        chessBoard = chessBoard +=
          '<div class="' +
          blackOrWhite +
          '" id="' +
          generertID +
          '"' +
          "></div>";
        changeColor();
        generertID++;
      }
      chessBoard = chessBoard += "</div>";
      changeColor();
    }
    chessBoardExsists = true;
  } else {
  }
};

const changeColor = () => {
  if (blackOrWhite == "black") {
    blackOrWhite = "white";
  } else {
    blackOrWhite = "black";
  }
};

const spawnPiece = (id, content, color) => {
  document.getElementById(id).innerHTML =
    '<div class="' + color + ' piece">' + content + "</div>";
};

const spawnPieces = () => {
  let curentPosition = 0;
  for (let i = 1; i < bricks.length; i++) {
    spawnPiece(curentPosition, bricks[i], "red");
    spawnPiece(curentPosition + 8, bricks[0], "red");
    curentPosition++;
  }
  curentPosition = 8 * 8 - 1;
  for (let i = 1; bricks.length > i; i++) {
    spawnPiece(curentPosition, bricks[i], "notWhite");
    spawnPiece(curentPosition - 8, bricks[0], "notWhite");
    curentPosition--;
  }
};

const generateEventLisener = (id, myFunction) => {
  document.getElementById(id).addEventListener("click", myFunction);
};

const generateEventLiseners = () => {
  for (let i = 0; i < 8 * 8; i++) {
    generateEventLisener(i, () => legalMoves(i));
  }
};

const getContent = (id) => {
  //content = [Type brick position arr, farge, posisjon]
  let content = ["", "", id];
  const contentOfHTML = document.getElementById(id).innerHTML;
  for (let i = 0; i < bricks.length; i++) {
    if (contentOfHTML.includes(bricks[i])) {
      content[0] = bricks[i];
      break;
    }
  }

  if (contentOfHTML.includes("red") || contentOfHTML.includes("notWhite")) {
    if (contentOfHTML.includes("red")) {
      content[1] = "red";
    } else {
      content[1] = "notWhite";
    }
  }

  return content;
};

//gives the legal moves for a pawn
const legalMovesPawns = (isNotWhite, id) => {
  let legalMovesArr = [];
  if (isNotWhite) {
    if (id > 7 && id < 16) {
      console.log("HMMM");
      legalMovesArr.push(id + 8);
      legalMovesArr.push(id + 16);
    } else {
      legalMovesArr.push(id + 8);
    }
  }
  console.log(legalMovesArr);
  return legalMovesArr;
};

const legalMovesRook = (id) => {
  //move verticaly
  for (let i = id; i < 63; i++) {
    console.log("jeg gir opp");
  }
};

//gives you the function you need to modify game bord
const selectFunction = (isNotWhite, id) => {
  const reeeee = [legalMovesPawns(isNotWhite, id)];
  return reeeee;
};

//uses the selected function on the "brick" you have selected
const legalMoves = (id) => {
  const arr = getContent(id);
  for (let i = 0; i < bricks.length; i++) {
    if (arr[0] == bricks[i]) {
      arr[0] = i;
      break;
    }
  }
  console.log(arr);
  selectFunction(arr[1], arr[2]);
  console.log(selectFunction(arr[1], arr[2]));
};
