
const gameManager={
    gameBoard :{
        board: Array(9).fill(null),
        createBoard: () => this.board,
        updateBoard:()=>board
        },
    
    players : {
        player1:{value: "X", id:1},
        player2:{value:"O", id:2}
    },

    currentPlayer:player1,
    

    winningCombinations: [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ],

    checkWinner: function(){
        for (let combinations of this.winningCombinations){
            const [a,b,c]=combinations;
            if(gameBoard.board[a] && gameBoard.board[a] === gameBoard.board[b] && gameBoard.board[a] === gameBoard.board[c]){
                return gameBoard.board[a];
            }
        }
        if (!gameBoard.board.includes(null)){
            return "draw";
        }
         return null;
    },
    
    makeMove: function(currentPlayer,index){
        if (board[index] !== null){
            return ;
        }
        else {
            board[index]=currentPlayer.value;
        }
    },

    changeTurn: function(){
        currentPlayer = (currentPlayer.value === "X") ? "O" : "X";
    }
}
        
    
