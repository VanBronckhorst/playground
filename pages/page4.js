import CartesianTree from '../classes/CartesianTree';
import TreeView from '../views/TreeView';


const tree = new CartesianTree();
for (let i = 0; i < 30; i++) {
    let val = Math.round(Math.random() * 100);
    tree.insert(val, Math.round(Math.random() * 1000));
}
console.log(tree);
let view = new TreeView(document.getElementById('viz'), tree);

function addValue() {
    let val = Math.round(Math.random() * 100);
    tree.insert(val, Math.round(Math.random() * 1000));
    view.update();
}



// Interface Bindings
document.getElementById('addValueBtn').addEventListener('click', addValue);