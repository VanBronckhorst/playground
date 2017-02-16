import SVGView from './SVGView.js';
const CIRCLE_RADIUS = 25;

export default class TreeView extends SVGView{
    constructor(domParent, tree) {
        super(domParent);
        this.tree = tree;
        this.buildTree();
    }

    buildTree() {
        const tree = this.tree;
        const SVG = this.SVG;

        // sizes for the SVG
        // build a grid where the tree can fit
        const treeH = tree.height;

        const rows = treeH + 1;
        const cols = Math.pow(2, treeH);

        const W = (CIRCLE_RADIUS * 2.2) * cols;
        const H = (CIRCLE_RADIUS * 5) * rows;

        SVG.setAttribute('viewBox', `0 0 ${W} ${H}`);
        // SVG.setAttribute('preserveAspectRatio', 'xMidYMin');

        const dX = W / cols;
        const dY = H / rows;
        this.R = Math.min(dY, dX) * 0.4;

        this.drawNode(tree.root, W / 2, dY / 2, 0, - dY / 2);

        SVG.style.display = 'none';
        SVG.offsetHeight;
        SVG.style.display = '';
    }

    drawLink(x1, y1, x2, y2) {
        const ns = 'http://www.w3.org/2000/svg';
        let line = document.createElementNS(ns, 'line');
        line.setAttribute('x1', x1);
        line.setAttribute('x2', x2);
        line.setAttribute('y1', y1);
        line.setAttribute('y2', y2);
        line.setAttribute('stroke', 'black');
        line.setAttribute('stroke-width', '3');
        this.SVG.appendChild(line);
    }

    createCircle(node, x, y, r) {
        const ns = 'http://www.w3.org/2000/svg';

        let circle = document.createElementNS(ns, 'circle');
        circle.setAttribute('cx', x);
        circle.setAttribute('cy', y);
        circle.setAttribute('r', r);
        circle.setAttribute('fill', 'red');
        circle.setAttribute('stroke', 'black');
        circle.setAttribute('stroke-width', '1');

        let text = document.createElementNS(ns, 'text');
        text.setAttribute('x', x);
        text.setAttribute('y', y);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('dominant-baseline', 'middle');
        text.innerHTML = node.key;

        let group = document.createElementNS(ns, 'g');
        group.appendChild(circle);
        group.appendChild(text);

        return group;
    }

    drawNode(node, x, y, parX, parY) {
        if (node.left !== null) {
            const newX = x - Math.abs(x - parX) / 2;
            const newY = y + (y - parY);
            this.drawLink(x, y, newX, newY);
            this.drawNode(node.left, newX, newY, x, y);
        }
        if (node.right !== null) {
            const newX = x + Math.abs(x - parX) / 2;
            const newY = y + (y - parY);
            this.drawLink(x, y, newX, newY);
            this.drawNode(node.right, newX, newY, x, y);
        }


        let circle = this.createCircle(node, x, y, CIRCLE_RADIUS);
        this.SVG.appendChild(circle);
    }


    
}



