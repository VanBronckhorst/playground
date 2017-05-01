import SVGView from './SVGView.js';
import Matrix from '../classes/Matrix/Matrix';
const NS = 'http://www.w3.org/2000/svg';
const BLOCK_SIZE = 10;
const BLOCK_MARGIN = 1;
const WALL_COL = 'black';
const EMPTY_COL = 'white';
const STROKE = 'black';
const HIGHLIGHT_STROKE = 'red';
const HIGHLIGHT_FILL = 'white';
const HIGHLIGHT_FILL_OPACITY = 0;

export default class TreeView extends SVGView{
    constructor(domParent, matrix, onClick) {
        super(domParent);
        this.onClick = onClick || (() => 0);
        this.matrix = matrix;
        this.blockMatrix = new Matrix(matrix.rows, matrix.cols);
        this.highlighted = null;
        this.build();
    }

    build() {
        const SVG = this.SVG;
        const matrix = this.matrix;

        const rows = matrix.rows;
        const cols = matrix.columns;

        const W = cols * BLOCK_SIZE + (cols - 1) * BLOCK_MARGIN;
        const H = rows * BLOCK_SIZE + (rows - 1) * BLOCK_MARGIN;

        super.setViewBox(0, 0, W, H);
        //SVG.setAttribute('viewBox', `0 0 ${W} ${H}`);

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                let block = this.createBlock(i,j);
                SVG.appendChild(block);
                this.blockMatrix.set(i, j, block);
            }
        }
    }

    update() {
        for (let i = 0; i < this.matrix.rows; i++) {
            for (let j = 0; j < this.matrix.columns; j++) {
                this.updateBlock(i,j);
            }
        }
    }

    highlightSquare(square) {
        if (this.highlighted !== null) {
            this.SVG.removeChild(this.highlighted);
            this.highlighted = null;
        }

        let sq = this.highlight(square.r, square.c, square.side, square.side);
        this.SVG.appendChild(sq);
        this.highlighted = sq;
    }

    highlightRect(rect) {
        if (this.highlighted !== null) {
            this.SVG.removeChild(this.highlighted);
            this.highlighted = null;
        }

        let r = this.highlight(rect.r, rect.c, rect.h, rect.w);
        this.SVG.appendChild(r);
        this.highlighted = r;
    }

    createBlock(r, c) {
        let block = document.createElementNS(NS, 'rect');
        block.setAttribute('x', BLOCK_SIZE * c + BLOCK_MARGIN * c);
        block.setAttribute('y', BLOCK_SIZE * r + BLOCK_MARGIN * r);
        block.setAttribute('r', r);
        block.setAttribute('c', c);
        block.setAttribute('width', BLOCK_SIZE);
        block.setAttribute('height', BLOCK_SIZE);
        //block.setAttribute('stroke', STROKE);
        block.setAttribute('fill', this.matrix.get(r,c) === 0 ? EMPTY_COL : WALL_COL);
        block.addEventListener('click', this.onClick.bind(this, r, c));
        return block;
    }

    updateBlock(r, c) {
        let block = this.blockMatrix.get(r, c);
        block.setAttribute('fill', this.matrix.get(r,c) === 0 ? EMPTY_COL : WALL_COL);
    }

    highlight(r, c, h, w) {
        let block = document.createElementNS(NS, 'rect');
        block.setAttribute('x', BLOCK_SIZE * c + BLOCK_MARGIN * c);
        block.setAttribute('y', BLOCK_SIZE * r + BLOCK_MARGIN * r);
        block.setAttribute('width', BLOCK_SIZE * w + (w - 1) * BLOCK_MARGIN);
        block.setAttribute('height', BLOCK_SIZE * h + (h - 1) * BLOCK_MARGIN);
        block.setAttribute('stroke', HIGHLIGHT_STROKE);
        block.setAttribute('fill', HIGHLIGHT_FILL);
        block.setAttribute('fill-opacity', HIGHLIGHT_FILL_OPACITY);
        block.setAttribute('pointer-events', 'none');
        return block;
    }


}


