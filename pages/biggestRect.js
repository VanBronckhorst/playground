import Matrix from '../classes/Matrix/Matrix';
import MazeView from '../views/MazeMatrixView';
const WALL = 1;

let m = new Matrix(5, 5, () => Math.random() < 0.2 ? WALL : 0);

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

function biggestRect(matrix) {
    
}