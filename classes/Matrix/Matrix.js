const MATRIX = Symbol();

class Matrix {
    constructor(rows, cols, dataGen = () => 0) {
        let arr = [];

        for (let i = 0; i < rows; i++) {
            let row = [];
            for (let j = 0; j < cols; j++) {
                row.push(dataGen(i, j));
            }
            arr.push(row);
        }

        this[MATRIX] = arr;
    }

    get matrix() {
        return this[MATRIX];
    }

    get rows() {
        return this.matrix.length;
    }

    get columns() {
        return this.matrix[0].length;
    }

    get(r, c) {
        return this.matrix[r][c];
    }

    set(r, c, val) {
        this[MATRIX][r][c] = val;
    }

    print() {
        let s = '';

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                s += this.get(i, j) + '\t';
            }
            s += '\n'; 
        }

        console.log(s);
    }

}

export default Matrix;
