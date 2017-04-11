import AVLTree from '../classes/Tree/AVLTree';
import TreeView from '../views/TreeView';


const tree = new AVLTree();
for (let i = 0; i < 50; i++) {
    tree.insert(Math.round(Math.random() * 100));
}

console.log(tree);
let view = new TreeView(document.getElementById('viz'), tree);

function addValue() {
    tree.insert(Math.round(Math.random() * 100));
    view.update();
}



// Interface Bindings
document.getElementById('addValueBtn').addEventListener('click', addValue);
