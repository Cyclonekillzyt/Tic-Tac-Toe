const board = document.querySelectorAll(".board");
const gameBoardState = Array(9).fill(null);
let player = "player1";

const producePlayer = (PlayerName, Marker) => {
  let score = [];
  const getPlayerName = () => {
    return PlayerName;
  };
  const getMarker = () => {
    return Marker;
  };
  const getScore = () => {
    return score;
  };
  const addScore = (points) => {
    score.push(points);
  };
  return {
    getPlayerName,
    getMarker,
    getScore,
    addScore,
  };
};

const player1 = producePlayer("Kojo", "X");
const player2 = producePlayer("Kwame", "O");

const updateGameBoard = (boardValue, index) => {
    if (gameBoardState[index] !== null){
        return;
    }
    if (player === "player1") {
    gameBoardState[index] = player1.getMarker;
    boardValue.textContent = player1.getMarker();
    player1.addScore(Number(boardValue.value));
    player = "player2";
  }
  else{
    gameBoardState[index] = player2.getMarker;
    boardValue.textContent = player2.getMarker();
    player2.addScore(Number(boardValue.value));
    player = "player1";
  }
};



board.forEach((board , index) => {
  board.addEventListener("click", () => {
    updateGameBoard(board, index);
  });
});
