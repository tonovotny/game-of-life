var Game = function(board) {
    this.board = board; 
}; 

Game.prototype.play = function(ticks, print) {
    if(print) {
        this.printBoard('Start ->');
    }

    for (var i = 0; i < ticks; i++) {
        this._tick();
    };

    if(print) {
        this.printBoard('Result after ' + ticks + ' ticks ->');
    }
};

Game.prototype._tick = function() {
    var newBoard = [];

    for(var y = 0; y < this.board.length; y++) {
        newBoard[y] = [];

        for(var x = 0; x < this.board[y].length; x++) {
            var cell = this.board[y][x];

            var newState = this._getNewState(
                cell, 
                this._getLiveScore(y, x)
            );

            newBoard[y][x] = newState ? 1 : 0;
        };
    };

    this.board = newBoard;
};

Game.prototype._getLiveScore = function(cellY, cellX) {
    var x, 
        y, 
        c = 0;

    for(var dy = -1; dy <= 1; dy++) {
        y = cellY + dy;

        if(y < 0 || y >= this.board.length) {
            continue;
        }

        for(var dx = -1; dx <= 1; dx++) {
            x = cellX + dx;
            
            if(x < 0 || x >= this.board[y].length) {
                continue;
            }
           
            if(x == cellX && y == cellY) {
                continue;            
            }

            if(this.board[y][x]) {
                c++;
            }
        }
    };

    return c;
};

Game.prototype._getNewState = function(cell, liveScore) {
    if(cell) {
        return (liveScore >=2 && liveScore <= 3);
    }
    else {
        return (liveScore == 3);
    }

    return false;
};

Game.prototype.printBoard = function(message) {
    console.log(message);

    var row;

    for(var y = 0; y < this.board.length; y++) {
        row = '';
        for(var x = 0; x < this.board[y].length; x++) {
            row += this.board[y][x];
        };
        console.log(row);
    };
};

module.exports = Game;