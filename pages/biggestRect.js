import Matrix from '../classes/Matrix/Matrix';
import MazeView from '../views/MazeMatrixView';
import Stack from '../classes/Queue/Stack';
const WALL = 1;

let m = new Matrix(15, 25, () => Math.random() < 0.2 ? WALL : 0);

let view = new MazeView(document.getElementById('viz'), m, blockClicked);

view.highlightRect(biggestRect(m));

function blockClicked(r, c) {
    if (m.get(r, c) === 0) {
        m.set(r, c, 1);
    }else {
        m.set(r, c, 0);
    }

    view.update();
    view.highlightRect(biggestRect(m));
}


// creates an array for each row as if it was an histogram
// find the largest area in the histogram with O(n) subroutine
function biggestRect(matrix) {
    let row = [];
    // creates empty for start step
    for (let i = 0; i < matrix.columns; i++) {
        row.push(0);
    }

    let maxArea = 0;
    let maxObj = {
        r: 0,
        c: 0,
        w: 0,
        h: 0
    };

    // creates row for each row and run subroutine
    for (let i = 0; i < matrix.rows; i++) {
        for (let j = 0; j < matrix.columns; j++) {
            if (matrix.get(i, j) === 1) {
                row[j] = 0;
            }else {
                row[j]++;
            }
        }
        // row represents the matrix above this row viewed as an histogram
        let maxAreaRect = biggestAreaInHistogram(row);
        if (maxAreaRect.area > maxArea) {
            maxArea = maxAreaRect.area;
            let h = maxAreaRect.area / maxAreaRect.width;
            maxObj = {
                c: maxAreaRect.start,
                r: i - h + 1,
                w: maxAreaRect.width,
                h: h
            };
        }
    }

    return maxObj;
}

// finds the biggest area in a histogram in O(n)
function biggestAreaInHistogram(hist) {
    let stack = new Stack();

    let maxArea = -1;
    let maxStart = 0;
    let maxWidth = 0;

    let i = 0;
    while (i < hist.length) {
        let top = stack.peek();
        if (top === null || hist[top] <= hist[i]) {
            stack.push(i++);
        } else {
            top = stack.pop();
            let lim = stack.peek() === null ? -1 : stack.peek();

            let areaForTop = hist[top] * (i - lim - 1);

            if (areaForTop >= maxArea) {
                maxArea = areaForTop;
                maxStart = lim + 1;
                maxWidth = (i - lim - 1);
            }
        }
    }

    while (stack.peek() !== null) {
        let top = stack.pop();
        let lim = stack.peek() === null ? -1 : stack.peek();

        let areaForTop = hist[top] * (i - lim - 1);

        if (areaForTop >= maxArea) {
            maxArea = areaForTop;
            maxStart = lim + 1;
            maxWidth = (i - lim - 1);
        }
    }

    return {
        start: maxStart,
        area: maxArea,
        width: maxWidth
    };
}
