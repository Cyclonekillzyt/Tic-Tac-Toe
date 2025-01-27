let board = document.querySelectorAll(".board")

board.forEach(board => {
    board.addEventListener("click",() =>{
        console.log(`${board.value}`)
    })
});
