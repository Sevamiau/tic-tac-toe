

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
        if (gameBoard.placeMark(index, getActivePlayer().mark)) {
            if (checkwinne()) {
                confirm.log(`${getActivePlayer().name} Wins!`);
                return;
            }
        }
        
    }

    function switchPlayerTurn(){
        if (activePlayer === players[0]) {
            activePlayer = players[1];
        } else {
            activePlayer = players[0];
        }
    }
    
    function checkWinner() {
        const board = gameBoard.getBoard();
        const winCon = [
            //rows
            [board[0][0], board[0][1], board[0][2]],
            [board[1][0], board[1][2], board[1][2]],
            [board[2][0], board[2][1], board[2][2]],
            //columns
            [board[0][0], board[1][0], board[2][0]],
            [board[0][1], board[1][1], board[2][1]],
            [board[0][2], board[1][2], board[2][2]],
            //diagonales
            [board[0][0], board[1][1], board[2][2]],
            [board[0][2], board[1][1], board[2][0]]
        ];

        return winCon.some(condition =>
            condition.every(cell => cell === getActivePlayer().mark && cell !== "")
        );
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