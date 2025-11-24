function createGameBoard() {
    let board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];

    const getBoard = () => board;

    function placeMark(index, playerMark) {
        const row = Math.floor(index / 3);
        const col = index % 3;

        if (board[row][col] === "") {
            board[row][col] = playerMark;
            return true; 
        } else {
            return false; 
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
    };
};

// Factory function to control the game flow
function createGameController(playerOne, playerTwo) {
    const gameBoard = createGameBoard();
    const players = [playerOne, playerTwo];
    let activePlayer = players[0];

    const getActivePlayer = () => activePlayer;

    function switchPlayerTurn() {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    }

    function checkWinner() {
        const board = gameBoard.getBoard();
        const winConditions = [
            // Rows
            [board[0][0], board[0][1], board[0][2]],
            [board[1][0], board[1][1], board[1][2]],
            [board[2][0], board[2][1], board[2][2]],
            // Columns
            [board[0][0], board[1][0], board[2][0]],
            [board[0][1], board[1][1], board[2][1]],
            [board[0][2], board[1][2], board[2][2]],
            // Diagonals
            [board[0][0], board[1][1], board[2][2]],
            [board[0][2], board[1][1], board[2][0]]
        ];

        return winConditions.some(condition =>
            condition.every(cell => cell === getActivePlayer().mark && cell !== "")
        );
    }

    function checkDraw() {
        return gameBoard.getBoard().flat().every(cell => cell !== "");
    }  //.flat desarma la matriz y al conviernte a un array plano. .every checkea que la condicion de que 

    // turno
    function playTurn(index) {
        console.log(`It's ${getActivePlayer().name}'s turn (${getActivePlayer().mark}). Placing mark at index ${index}.`);

        if (gameBoard.placeMark(index, getActivePlayer().mark)) {
            if (checkWinner()) {
                console.log(`${getActivePlayer().name} wins!`);
                console.log("Final Board:");
                console.log(gameBoard.getBoard());
                return;
            }

            if (checkDraw()) {
                console.log("It's a draw!");
                console.log("Final Board:");
                console.log(gameBoard.getBoard());
                return;
            }

            switchPlayerTurn();
        } else {
            console.log("Invalid move. That spot is already taken.");
        }
        console.log("Current Board:");
        console.log(gameBoard.getBoard());
    }

    return {
        getActivePlayer: getActivePlayer,
        playTurn: playTurn,
        getBoard: gameBoard.getBoard
    };
};

