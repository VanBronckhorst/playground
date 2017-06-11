import RTree from '../classes/Rtree/RTree.js';

let tree = new RTree();

for (let i = 0; i < 25; i++) {
    let minX = Math.random() * 10;
    let minY = Math.random() * 10;
    let maxX = Math.random() * 10 + minX;
    let maxY = Math.random() * 10 + minY;

    tree._insert({minX, minY, maxX, maxY, id: i});
}

window.insertObj = () => {
    let minX = Math.random() * 10;
    let minY = Math.random() * 10;
    let maxX = Math.random() * 10 + minX;
    let maxY = Math.random() * 10 + minY;

    window.tree._insert({minX, minY, maxX, maxY, id: Math.random()});
}
window.tree = new RTree();


console.log(tree);