"strickt";

let chessBoardExsists = false;

let blackOrWhite = "white";

let chessBoard = "";

let generertID = 0;

let bricks = ["Rook", "Knight", "Bishop", "King", "Quin", "Pawn"];

const test = () => {
  makeChessBoard();
  document.getElementById("yes").innerHTML = `${chessBoard}`;
};

const makeChessBoard = () => {
  if (!chessBoardExsists) {
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
    spawnBricks();
  } else {
    console.log("STOP");
  }
};

const changeColor = () => {
  if (blackOrWhite == "black") {
    blackOrWhite = "white";
  } else {
    blackOrWhite = "black";
  }
};

const spawnBricks = () => {
  for (let i = 0; i < 5; i++) {
    let y = '"' + i + '"';
    console.log(y);
    //document.getElementById(y).innerHTML = "<div>reeeeeeee</div>";
  }
};
