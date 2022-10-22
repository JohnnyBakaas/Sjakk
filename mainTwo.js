"use strict";

//når ferdig: lag en AI knap som gjør de samme movsa som magnus karlsen gjorde mot amrekaneren og FF

let boardArr = new Array(8);

let lightOrDark = "light";

let bricks = ["♟", "♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"];

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

const makeChessBoardArr = () => {
  // makes a 2d array to represent a chessbord
  for (let i = 0; i < boardArr.length; i++) {
    boardArr[i] = new Array(8);
  }

  for (let i = 0; i < boardArr.length; i++) {
    for (let j = 0; j < boardArr.length; j++) {
      //makes a array with te information of the place, could have used object, but im to lazy to learn about that just yett
      //                type, team, avatar, brettfarge
      boardArr[i][j] = [null, null, null, lightOrDark];
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
    spawnPawn(boardArr, 1, i, "black");
    spawnPawn(boardArr, 6, i, "white");
    console.log("REEEEE");
  }
  spawnBacklineBlack(boardArr, 0);
  spawnBacklineWhite(boardArr, 7);
};

const spawnPawn = (arr, height, width, team) => {
  arr[height][width][0] = bricksName[0];
  arr[height][width][1] = team;
  arr[height][width][2] = bricks[0];
};

const spawnBacklineBlack = (arr, height) => {
  for (let i = 0; i < boardArr.length; i++) {
    let j = i + 1;
    arr[height][i][0] = bricksName[j];
    arr[height][i][1] = "black";
    arr[height][i][2] = bricks[j];
  }
};

const spawnBacklineWhite = (arr, height) => {
  let j = 1;
  for (let i = 7; i > -1; i--) {
    arr[height][i][0] = bricksName[j];
    arr[height][i][1] = "white";
    arr[height][i][2] = bricks[j];
    j++;
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
      content = content + '<div class="' + boardArr[i][j][3] + '">';
      if (boardArr[i][j][0] !== null) {
        content =
          content +
          '<span class="' +
          boardArr[i][j][1] +
          '">' +
          boardArr[i][j][2] +
          "</span>";
      }
      content = content + "</div>";
    }
    content = content + "</div>";
  }
  console.log(content);
  return content;
};

makeChessBoardArr();
spawnPiecesInArr();
boardArr[0][0][0] = "Test";
console.log(boardArr);
makeTheHTML();

document.getElementById("chess-bord").innerHTML = makeTheHTML();
