import BSTree from '../classes/Tree/BSTree';
import TreeView from '../views/TreeView';

const tree = new BSTree();
for (let i = 0; i < 5; i++) {
    tree.insert(Math.round(Math.random() * 100));
}

function addValue() {
    tree.insert(Math.round(Math.random() * 100));
    view.update();
}

console.log(tree);
let view = new TreeView(document.getElementById('viz'), tree);

// Interface Bindings
document.getElementById('addValueBtn').addEventListener('click', addValue);
