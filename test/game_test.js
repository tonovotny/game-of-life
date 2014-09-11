var assert = require('assert');
var Game = require('../src/game.js');

describe('Game', function() {

    it(': lonely cell should die', function() {  
        var board = [
            [0, 0, 0],
            [0, 1, 0],
            [0, 0, 0]
        ];

        var game = new Game(board);

        game.play(1);

        assert.deepEqual(
            game.board, 
            [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ]
        );
    });

    it(': Blinker should oscillate', function() {  
        var board = [
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 0]
        ];

        var game = new Game(board);

        game.play(1);

        assert.deepEqual(
            game.board, 
            [
                [0, 0, 0],
                [1, 1, 1],
                [0, 0, 0]
            ]
        );

        game.play(1);

        assert.deepEqual(
            game.board, 
            [
                [0, 1, 0],
                [0, 1, 0],
                [0, 1, 0]
            ]
        );
    });

    it(': Glider should go in one direction', function() {  
        var board = [
            [0, 1, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0],
            [1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ];

        var game = new Game(board);

        game.play(4);

        assert.deepEqual(
            game.board, 
            [
                [0, 0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0],
                [0, 0, 0, 1, 0, 0],
                [0, 1, 1, 1, 0, 0]
            ]
        );
    });

});