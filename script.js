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
  if (gameBoardState[index] !== null) {
    return;
  }
  if (player === "player1") {
    gameBoardState[index] = player1.getMarker;
    boardValue.textContent = player1.getMarker();
    player1.addScore(Number(boardValue.value));
    if (checkWinner(player1.getScore())) {
      alert(`${player1.getPlayerName()} wins!`);
      resetGame();
    }
    player = "player2";
  } else {
    gameBoardState[index] = player2.getMarker;
    boardValue.textContent = player2.getMarker();
    player2.addScore(Number(boardValue.value));
    if (checkWinner(player2.getScore())) {
      alert(`${player2.getPlayerName()} wins!`);
      resetGame();
    }
    player = "player1";
  }
};

const checkWinner = (currentPlayer) => {
  const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
  return winningCombinations.some((combination) =>
    combination.every((cell) => currentPlayer.includes(cell))
  );
};

board.forEach((board, index) => {
  board.addEventListener("click", () => {
    updateGameBoard(board, index);
  });
});

const resetGame = () => {
  gameBoardState.fill(null);
  player1.getScore().length = 0;
  player2.getScore().length = 0;
  board.forEach((board) => (board.textContent = ""));
  player = "player1";
};
