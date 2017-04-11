import CartesianTree from '../classes/Tree/CartesianTree';
import TreeView from '../views/TreeView';


const tree = new CartesianTree();
let array = [];
for (let i = 0; i < 10; i++) {
    let val = Math.round(Math.random() * 100);
    tree.insert(val, i);
    array.push(val);
}
console.log(array);
console.log(tree);
let view = new TreeView(document.getElementById('viz'), tree);

function addValue() {
    let val = Math.round(Math.random() * 100);
    tree.insert(val, array.length);
    array.push(val);
    view.update();
}



// Interface Bindings
document.getElementById('addValueBtn').addEventListener('click', addValue);
