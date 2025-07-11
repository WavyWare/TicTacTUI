import { Board } from "./Board";
import {CLI} from "./CLI";

export class Game {
    board: Board;
    round: 'X' | 'O';
    cli: CLI = new CLI();

    constructor() {
        this.board = new Board();
        this.round = 'X';
    }

    play() {
        let board = this.board;
        let msg= 'Welcome to TicTacTUI - Terminal-based tic tac toe';
        while (!board.checkWin()) {
            this.cli.render(board, msg);
            const move = this.cli.prompt('Your move (e.g. 1,2): ');
            msg = this.board.move(this.cli.getCoords(move), this.round);
            if (msg === '') this.round === 'X' ? this.round = 'O' : this.round = 'X';
        }
        this.cli.render(board);
        console.log(`Game over! ${this.round === 'X' ? 'O' : 'X'} wins!`);
    }
}

const game: Game = new Game();
game.play()
