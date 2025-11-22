

function createGameBoard() {
    let board = [
        ["", "", ""], 
        ["", "", ""], 
        ["", "", ""]
    ]    

    const getBoard = () => board;

    function placeMark(index, playerMark) {
        const row = Math.floor(index / 3);
        const col = index % 3;

        if (board[row][col] === "") {
            board[row][col] = playerMark;
            return true
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
    const players = [playerOne, playerTwo];
    let activePlayer = players[0];

    const getActivePlayer = () => activePlayer;

    function playturn(index) {
    const playerMark = getActivePlayer().mark;
    }

    function switchPlayerTurn(){
        if (activePlayer === players[0]) {
            activePlayer = players[1];
        } else {
            activePlayer = players[0];
        }
    } 

    return {
        getActivePlayer: getActivePlayer,
        playturn: playturn,
        switchPlayerTurn: switchPlayerTurn
    }
};



// createa player
const playerOne = createPlayer("player", "X");
const playerTwo = createPlayer("player2", "0");

// console.log(playerOne);
// console.log(playerTwo);

const myBoard = createGameBoard();

myBoard.placeMark(1, playerOne.mark)

console.log(myBoard.getBoard())