"use strict";

//når ferdig: lag en AI knap som gjør de samme movsa som magnus karlsen gjorde mot amrekaneren og FF

const TYPE = 0;
const TEAM_COLOR = 1;
const AVATAR = 2;
const BRETTFARGE = 3;

let boardArrId = new Array(8);
let virginBoardArr = new Array(8);
let boardArr = new Array(8);

let lightOrDark = "light";

let bricks = ["♟", "♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"];

//makes ID array
const makeIdArray = () => {
  for (let i = 0; i < boardArrId.length; i++) {
    boardArrId[i] = new Array(8);
  }
  let id = 0;
  for (let i = 0; i < boardArrId.length; i++) {
    for (let j = 0; j < boardArrId[i].length; j++) {
      boardArrId[i][j] = id;
      id++;
    }
  }
  console.table(boardArrId);
};

//takes contetnt of the selected pice and stores it
let selectedContent = [];

//orderd as black
let bricksName = [
  "Pawn",
  "Rook",
  "Knight",
  "Bishop",
  "King",
  "Queen",
  "Bishop",
  "Knight",
  "Rook",
];

const makeChessBoardArr = (arr) => {
  // makes a 2d array to represent a chessbord
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(8);
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      //makes a array with te information of the place, could have used object, but im to lazy to learn about that just yett
      //update: i have now leard about objects, im still to lazy to re writ this just yet, snake is cool
      //                type, team, avatar, brettfargen
      arr[i][j] = [null, null, null, lightOrDark];
      changeLightOrDark();
    }
    changeLightOrDark();
  }
};

let changeLightOrDark = () => {
  if (lightOrDark == "light") {
    lightOrDark = "dark";
  } else {
    lightOrDark = "light";
  }
};

//introducing the pises

const spawnPiecesInArr = () => {
  for (let i = 0; i < boardArr.length; i++) {
    spawnPawn(boardArr, TEAM_COLOR, i, "black");
    spawnPawn(boardArr, 6, i, "white");
  }
  spawnBackline(boardArr, 0, "black");
  spawnBackline(boardArr, 7, "white");
};

const spawnPawn = (arr, height, width, team) => {
  arr[height][width][TYPE] = bricksName[0];
  arr[height][width][TEAM_COLOR] = team;
  arr[height][width][AVATAR] = bricks[0];
};

const spawnBackline = (arr, height, team) => {
  for (let i = 0; i < boardArr.length; i++) {
    let j = i + 1;
    arr[height][i][TYPE] = bricksName[j];
    arr[height][i][TEAM_COLOR] = team;
    arr[height][i][AVATAR] = bricks[j];
  }
};

// making the HTML

const makeTheHTML = () => {
  let content = "";
  //beguining of HTML
  //<div class=""><div class=""></div></div>
  for (let i = 0; i < boardArr.length; i++) {
    content = content + '<div class="horisontalt">';
    for (let j = 0; j < 8; j++) {
      content =
        content +
        `<div onclick="handlePiece(${i}, ${j})" class="` +
        boardArr[i][j][BRETTFARGE] +
        '"' +
        ">";
      if (boardArr[i][j][TYPE] !== null) {
        content =
          content +
          '<span class="' +
          boardArr[i][j][TEAM_COLOR] +
          '" ' +
          ">" +
          boardArr[i][j][AVATAR] +
          "</span>";
      }
      content = content + "</div>";
    }
    content = content + "</div>";
  }
  return content;
};

const handlePiece = (i, j) => {
  console.log(i, j);
  handlePiecePawnBlack(i, j);
  renderHTML();
};

const handlePiecePawnBlack = (i, j) => {
  if (boardArr[i][j][TEAM_COLOR] == "black") {
    if (
      boardArr[i + 1][j][BRETTFARGE] == "potential-moves-dark" ||
      boardArr[i + 1][j][BRETTFARGE] == "potential-moves-light"
    ) {
      if (i == 1) {
        boardArr[i + 1][j][BRETTFARGE] = virginBoardArr[i + 1][j][BRETTFARGE];
        boardArr[i + 2][j][BRETTFARGE] = virginBoardArr[i + 2][j][BRETTFARGE];
      } else {
        boardArr[i + 1][j][BRETTFARGE] = virginBoardArr[i + 1][j][BRETTFARGE];
      }
      boardArr[i][j][BRETTFARGE] = virginBoardArr[i][j][BRETTFARGE];
    } else {
      boardArr[i][j][BRETTFARGE] = "marked-piece";
      if (i == 1) {
        if (boardArr[i + 1][j][BRETTFARGE] == "dark") {
          boardArr[i + 1][j][BRETTFARGE] = "potential-moves-dark";
        } else {
          boardArr[i + 1][j][BRETTFARGE] = "potential-moves-light";
        }
        if (boardArr[i + 2][j][BRETTFARGE] == "dark") {
          boardArr[i + 2][j][BRETTFARGE] = "potential-moves-dark";
        } else {
          boardArr[i + 2][j][BRETTFARGE] = "potential-moves-light";
        }
      } else {
        if (boardArr[i + 1][j][BRETTFARGE] == "dark") {
          boardArr[i + 1][j][BRETTFARGE] = "potential-moves-dark";
        } else {
          boardArr[i + 1][j][BRETTFARGE] = "potential-moves-light";
        }
      }
      //endre funksjonen i til de som blir higlighta
    }
    //moveThePawn
  }
};

const moveThePiece = (positionY, positionX) => {
  if (boardArr[positionY][positionX][BRETTFARGE].includes("potential-moves")) {
    console.log("Det funker!");
  }
};

const renderHTML = () => {
  makeTheHTML();
  document.getElementById("chess-bord").innerHTML = makeTheHTML();
};

makeIdArray();
makeChessBoardArr(boardArr);
makeChessBoardArr(virginBoardArr);
spawnPiecesInArr();
renderHTML();

console.log(virginBoardArr);

let test = document.getElementById("0");
