

function createGameBoard() {
    let board = ["", "", "", "", "", "", "", "", ""];

    const getBoard = () => board;

    function placeMark(index, playerMark){
        if (board[index] === ""){
            board[index] = playerMark;
            return true;
        } else {
            return false
        }
    };

    return {
        getBoard: getBoard,
        placeMark: placeMark
    };
}


function createPlayer(name, mark) {
    return {
        name,
        mark
    }
};



// createa player
const playerOne = createPlayer("player", "X");
const playerTwo = createPlayer("player2", "X");

console.log(playerOne)

const myBoard = createGameBoard();
console.log('Initial Board: ', myBoard.getBoard());
myBoard.placeMark(0, "X");
myBoard.placeMark(4, "O");
console.log(myBoard.getBoard());