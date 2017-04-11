import Matrix from '../classes/Matrix/Matrix';
import MazeView from '../views/MazeMatrixView';
const WALL = 1;

let m = new Matrix(5, 5, () => Math.random() < 0.2 ? WALL : 0);

let view = new MazeView(document.getElementById('viz'), m, blockClicked);

view.highlightSquare(betterBiggerSquare(m));

function blockClicked(r, c) {
    if (m.get(r, c) === 0) {
        m.set(r, c, 1);
    }else {
        m.set(r, c, 0);
    }
    console.log(r, c);
    console.log(m);
    view.update();
    view.highlightSquare(betterBiggerSquare(m));
}

function biggestSquare(matrix) {
    // T(n) = n^3
    let mem = {};
    let max = {
        r: 0,
        c: 0,
        side: 0
    };

    for (let i = matrix.rows - 1; i >= 0; i--) {
        for (let j = matrix.columns - 1; j >= 0; j--) {
            if (matrix.get(i, j) === WALL) {
                mem[i + ',' + j] = 0;
            } else {
                // a square can start from here
                if (i + 1 >= matrix.rows || j + 1 >= matrix.columns) {
                    // On the border
                    mem[i + ',' + j] = 1;
                }else {
                    // Look at the lower right square
                    let lowRight = mem[(i + 1) + ',' + (j + 1)];
                    let side = 1;

                    // look for how long the lower right square is surrounded by white
                    for (let k = 1; k <= lowRight; k++) {
                        if (matrix.get(i + k, j) === WALL || matrix.get(i, j + k) === WALL) {
                            // wall breaks the square
                            break;
                        }else {
                            side++;
                        }
                    }

                    mem[i + ',' + j] = side;
                }
            }

            if (mem[i + ',' + j] > max.side) {
                max.r = i;
                max.c = j;
                max.side = mem[i + ',' + j];
            }
        }
    }

    return max;
}

function betterBiggerSquare(matrix) {
    let mem = new Matrix(matrix.rows, matrix.columns);
    let max = {
        r: 0,
        c: 0,
        side: 0,
    }

    for (let i = 0; i < matrix.rows; i++) {
        for (let j = 0; j < matrix.columns; j++) {
            if (matrix.get(i, j) === WALL) {
                mem.set(i, j, 0);
            }else {
                let upLeft = (i - 1 >= 0 && j - 1 >= 0) ? mem.get(i - 1, j - 1) : 0;
                let up = (i - 1 >= 0) ? mem.get(i - 1, j) : 0;
                let left = (j - 1 >= 0) ? mem.get(i, j - 1) : 0;
                
                let val = Math.min(upLeft, up, left) + 1;
                mem.set(i, j, val);

                if (val > max.side) {
                    max = {
                        r: i - (val - 1),
                        c: j - (val - 1),
                        side: val
                    };
                }
            }          
        }
    }
    return max;
}
