import RTree from '../classes/Rtree/RTree.js';
import RTreeView from '../views/RTreeView';
import PriorityQueue from '../classes/PriorityQueue/PriorityQueue.js';

let tree = new RTree();

for (let i = 0; i < 1000; i++) {
    let minX = Math.random() * 1000;
    let minY = Math.random() * 1000;
    let maxX = minX;
    let maxY = minY;

    tree._insert({minX, minY, maxX, maxY, id: i, type: 'point'});
}

console.log(tree._search({minX:5, minY:5, maxX: 6, maxY:6}));

let view = new RTreeView(document.getElementById('viz'), tree, true);

view.setOnClick((x,y) => {
    let closest = tree.knn(x, y, 3);
    view.highlightItems(closest);
})


console.log(tree);