import AVLTree from '../classes/AVLTree';
import TreeView from '../views/TreeView';

const tree = new AVLTree();
for (let i = 0; i < 20; i++) {
    tree.insert(Math.round(Math.random() * 100));
}

console.log(tree);
let view = new TreeView(document.getElementById('viz'), tree);


