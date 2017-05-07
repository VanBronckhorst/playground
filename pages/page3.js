import CartesianTree from '../classes/Tree/CartesianTree';
import TreeView from '../views/TreeView';
import OptionsBox from '../views/OptionsBox';

// Interface Bindings
const optionsContainer = document.getElementById('options');
const options = [
    {type: 'button', className: 'button', onClick: addValue, label: 'Add Value'}
];
const optionsView = new OptionsBox(optionsContainer, options);


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

