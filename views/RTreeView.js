import SVGView from './SVGView.js';
const PADDING = 5;
const COLORS = ['#ffffcc','#fed976','#fd8d3c','#fc4e2a','#e31a1c','#bd0026','#800026'];
const STROKE_WIDTH = 5;
const ITEM_RAD = 3;

export default class RTreeView extends SVGView {
    constructor(domParent, tree, drawItems) {
        super(domParent);
        this.drawItems = drawItems;
        this.tree = tree;
        this.drawTree();
    }

    drawTree() {
        const t = this.tree;

        let BBox = t.boundingBox;

        super.setViewBox(BBox.minX - PADDING, BBox.minY - PADDING,
                        BBox.width + 2 * PADDING, BBox.height + 2 * PADDING);
        
        let root = t._root;

        let toDraw = [];
        let toExplore = [root];
        let curr = toExplore.pop();

        while (curr) {
            toDraw.push(curr);
            if (!curr.isLeaf) {
                for (let i = 0; i < curr.children.length; i++) {
                        toExplore.push(curr.children[i]);
                }
            }

            curr = toExplore.splice(0, 1)[0];
        }

        for (let i = toDraw.length - 1; i >= 0 ; i--) {
            this.drawNode(toDraw[i]);
        }
    }

    drawNode(node) {
        let box = node.BBox;
        let height = node.height;

        let attributes = {
            'stroke-width': height,
            fill: 'transparent',
            stroke: this.getBoxColor(height)
        };

        if (this.drawItems) {
            this._drawItems(node.children);
        }

        this.appendRect(box.minX, box.minY, box.width, box.height, attributes);
    }

    _drawItems(items) {
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            if (item.type === "point") {
                this.appendCircle(item.minX, item.minY, ITEM_RAD, {fill: 'gray'});
            }
        }
        
    }

    getBoxColor(lvl) {
        return COLORS[lvl];
    }
}