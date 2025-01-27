let board = document.querySelectorAll(".board")

let producePlayer = (PlayerName, Marker) => {
    let score = [];
    const getPlayerName = () =>{return PlayerName}
    const getMarker = () =>{return Marker};
    const getScore = () =>{return score};
    const addScore = (points) =>{score.push(points)};
    return{
        getPlayerName,getMarker,getScore,addScore
    }
}

const player1 = producePlayer("Kojo", "X");
const player2 = producePlayer("Kwame", "O");

const updateGameBoard = (boardValue) => {
    boardValue.textContent = player1.getMarker();
}

board.forEach(board => {
    board.addEventListener("click",() =>{
        updateGameBoard(board);
    })
});


