import promptSync from 'prompt-sync';
import {Board} from "./Board";
import colors from 'colors'

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
        console.log('+-----+-----+-----+'.white.bold);
        for (let x = 0; x < board.board.length; x++) {
            let line = `${'|'.white.bold}`;
            for (let y = 0; y < board.board[x].length; y++) {
                let cell = '';
                if (board.board[x][y] === '') {
                    cell = colors.grey(` ${x+1},${y+1} `)
                } else if (board.board[x][y] === 'X') {
                    cell = `  ${board.board[x][y]}  `.green
                } else {
                    cell = `  ${board.board[x][y]}  `.blue;
                }
                line += cell+'|'.white.bold;
            }
            console.log(line);
            console.log('+-----+-----+-----+'.white.bold);
        }
    }

}