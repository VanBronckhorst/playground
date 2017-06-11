import Leaf from './Leaf.js';
import NonLeaf from './NonLeaf.js';
import BoundingBox from './BoundingBox.js';

const ROOT = Symbol();
const M = Symbol();
const m = Symbol();


class RTree {
    constructor() {
        this[ROOT] = new Leaf([]);
        
        this[M] = 9;
        this[m] = 4;
    }

    _search(item, toBBox) {
        toBBox = toBBox || ((d) => new BoundingBox(d.minX, d.minY, d.maxX, d.maxY));
        const BBox = toBBox(item);

        let toExplore = [this[ROOT]];
        let res = [];

        if (!this[ROOT].BBox.intersects(BBox)) {
            return res;
        }
        let curr = toExplore.pop();
        while (curr) {
            
            for (let j = 0; j < curr.children.length; j++) {
                let next = curr.children[j];
                if (next.BBox.intersects(BBox)) {
                    if (curr.isLeaf) {
                        res.push(next);
                    } else {
                        toExplore.push(next);
                    }
                }
            }
            curr = toExplore.pop();
        }

        return res;
    }

    _insert(item, toBBox) {
        toBBox = toBBox || ((d) => new BoundingBox(d.minX, d.minY, d.maxX, d.maxY));
        const BBox = toBBox(item);
        item.BBox = BBox;
        item.isItem = true;

        const insertionWalk = this._insertWalk(BBox);
        const insertLeaf = insertionWalk[insertionWalk.length - 1];
        

        insertLeaf.add(item);

        // walk back the insertion path and split when necessary
        let lvl = insertionWalk.length - 1;
        while (lvl >= 0) {
            let node = insertionWalk[lvl];

            if (node.fill > this[M]) {
                // splits the node and attaches the two resulting nodes to the parent
                this._split(insertionWalk, lvl);
                lvl--;
            }else {
                break;
            }
        }
        
        // for the remaining parents, adjust BBox
        while (lvl >= 0) {
            let node = insertionWalk[lvl];

            node.BBox.enlarge(BBox);
            lvl--;
        }
        
        
    }

    _split(chain, toSplit) {
        let toSplitNode = chain[toSplit];

        let splits = this._quadraticSplit(toSplitNode);
        
        if (toSplit !== 0) {
            let parent = chain[toSplit - 1];
            // remove splitted node
            parent.children.splice(parent.children.indexOf(toSplitNode), 1);
            
            parent.add(splits[0]);
            parent.add(splits[1]);
        }else {
            this._splitRoot(splits);
        }

    }

    _splitRoot(children) {
        this[ROOT] = new NonLeaf(children);
        this[ROOT].height = children[0].height + 1;
    }

    // Splits a node using simple greedy quadratic function
    _quadraticSplit(node) {
        let a;
        let b;

        if (node.isLeaf) {
            a = new Leaf([]);
            b = new Leaf([]);
        } else {
            a = new NonLeaf([]);
            b = new NonLeaf([]);
        }

        a.height = node.height;
        b.height = node.height;

        let children = node.children;


        let maxSep = -Infinity;
        let maxSepTupleIndexes = [];
        // O(n^2) find two nodes where separation is greatest
        for (let i = 0; i < children.length; i++) {
            let c1 = children[i];
            for (let j = i + 1; j < children.length; j++) {
                let c2 = children[j];
                let enclosing = c1.BBox.area + c1.BBox.enlargedArea(c2.BBox);
                let sep = enclosing - c1.BBox.area - c2.BBox.area;
                if (sep > maxSep) {
                    maxSep = sep;
                    maxSepTupleIndexes = [i, j];
                }
            }
        }

        // Put the farthest element in two groups and distribute the others minimizing enlargement
        let maxSepTuple = [children[maxSepTupleIndexes[0]], children[maxSepTupleIndexes[1]]];
        a.add(maxSepTuple[0]);
        b.add(maxSepTuple[1]);

        let toDistribute = [];
        for (let i = 0; i < children.length; i++) {
            if (i !== maxSepTupleIndexes[0] && i !== maxSepTupleIndexes[1]) {
                toDistribute.push(i);
            }
        }

        let lim = this[M] - this[m] + 1;
        while (toDistribute.length !== 0) {
            let last = children[toDistribute[toDistribute.length - 1]];

            if (a.fill === lim) {
                b.add(last);
                toDistribute.pop();
            } else if (b.fill === lim) {
                a.add(last);
                toDistribute.pop();
            } else {
                // Greedy find the most gaining assignment

                let maxDiff = -Infinity;
                let maxDiffIndex;

                for (let i = 0; i < toDistribute.length; i++) {
                    let child = children[toDistribute[i]];
                    let diff = Math.abs(a.BBox.enlargedArea(child) - b.BBox.enlargedArea(child));
                    if (diff > maxDiff) {
                        maxDiff = diff;
                        maxDiffIndex = i;
                    }
                }

                let adding = toDistribute.splice(maxDiffIndex, 1)[0];
                adding = children[adding];
                let aEnlarge = a.BBox.enlargedArea(adding);
                let bEnlarge = b.BBox.enlargedArea(adding);

                // add to least increasing group
                if (aEnlarge < bEnlarge) {
                    a.add(adding);
                } else {
                    b.add(adding);
                }
            }
        }

        return [a, b];
    }

    _insertWalk(BBox) {
        let curr = this[ROOT];
        let res = [curr];

        while(!curr.isLeaf) {
            curr = leastIncreasing(curr.children, BBox);
            res.push(curr);
        }

        return res;
    }

    get boundingBox() {
        return this[ROOT].BBox;
    }

    get _root() {
        return this[ROOT];
    }
}


function leastIncreasing(nodes, toAdd) {

    let minVal = Infinity;
    let minIndex = 0;

    for (let i = 0; i < nodes.length; i++) {
        let box = nodes[i].BBox;
        let enlarged = box.enlargedArea(toAdd);

        if (enlarged < minVal) {
            minVal = enlarged;
            minIndex = i;
        }else if (enlarged === minVal) {
            let areaThis = box.area;
            let areaMin = nodes[minIndex].BBox.area;

            if (areaThis < areaMin) {
                minIndex = i;
            }
        }
    }

    return nodes[minIndex];
}


export default RTree;