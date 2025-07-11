import { Board } from "./Board";
import {CLI} from "./CLI";
import colors from "colors";

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
        let msg= `${'Welcome to TicTacTUI - Terminal-based tic tac toe'.bold}`;
        let symbol: string = this.round;
        while (!board.checkWin()) {
            this.cli.render(board, msg);
            if (symbol === 'X') {
                symbol = `${symbol.green}`
            } else {
                symbol = `${symbol.blue}`
            }
            const move = this.cli.prompt(`${symbol} move (e.g. 1,2): `);
            msg = this.board.move(this.cli.getCoords(move), this.round);
            if (msg === '') this.round === 'X' ? this.round = 'O' : this.round = 'X';
        }
        this.cli.render(board);
        console.log(`Game over! ${symbol} wins!`);
    }
}

const game: Game = new Game();
game.play()
