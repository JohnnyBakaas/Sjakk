"use strict";

let chessBoardExsists = false;

let blackOrWhite = "white";

let chessBoard = "";

let generertID = 0;

let bricks = ["♟", "♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"];

const start = () => {
  makeChessBoard();
  document.getElementById("yes").innerHTML = `${chessBoard}`;
  spawnPieces();
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
