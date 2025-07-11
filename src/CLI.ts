import promptSync from 'prompt-sync';
import {Board} from "./Board";

export class CLI {
    prompt;

    constructor() {
        this.prompt = promptSync();
    }

    getCoords(prompt: string) {
        const [x, y] = prompt.split(',');
        return [parseInt(x)-1, parseInt(y)-1];
    }

    render(board: Board, msg: string = '') {
        console.clear();
        if (msg !== '') console.log(msg)
        console.log('+-----+-----+-----+');
        for (let x = 0; x < board.board.length; x++) {
            let line = '|';
            for (let y = 0; y < board.board[x].length; y++) {
                let cell = '';
                if (board.board[x][y] === '') {
                    cell = ` ${x+1},${y+1} `
                } else {
                    cell = `  ${board.board[x][y]}  `
                }
                line += `${cell}|`;
            }
            console.log(line);
            console.log('+-----+-----+-----+');
        }
    }

}