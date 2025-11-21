

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


function createGameController(playerOne, playerTwo) {
    const gameBoard = createGameBoard();

    const getActivePlayer = () => activePlayer;

    return {
        getActivePlayer: getActivePlayer
    }
};


// createa player
const playerOne = createPlayer("player", "X");
const playerTwo = createPlayer("player2", "0");

console.log(playerOne);
console.log(playerTwo);

const myBoard = createGameBoard();
console.log('Initial Board: ', myBoard.getBoard());
myBoard.placeMark(0, "X");
myBoard.placeMark(4, "O");
console.log(myBoard.getBoard());