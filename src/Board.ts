export class Board {
    board: string[][];

    constructor() {
        this.board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
    }

    checkWin(): string | undefined{
        for (const line of this.getWinningLines()) {
            const [a, b, c] = line.map(([x, y]) => this.board[x][y]);
            if (a === b && b === c && a !== '') return a;
        }
        return undefined;
    }

    move(coords: number[], round: string) {
        const [x, y] = coords;
        if (this.board[x][y] !== '') {
            return `${'Invalid move!'.red.bold}`
        } else {
            this.board[x][y] = round;
            return ''
        }
    }

    private getWinningLines(): [number, number][][] {
        return [
            [[0,0], [0,1], [0,2]],
            [[1,0], [1,1], [1,2]],
            [[2,0], [2,1], [2,2]],
            [[0,0], [1,0], [2,0]],
            [[0,1], [1,1], [2,1]],
            [[0,2], [1,2], [2,2]],
            [[0,0], [1,1], [2,2]],
            [[0,2], [1,1], [2,0]]
        ];
    }
}