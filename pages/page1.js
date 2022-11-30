import BSTree from '../classes/Tree/BSTree';
import TreeView from '../views/TreeView';
import OptionsBox from '../views/OptionsBox';

// Interface Bindings
const optionsContainer = document.getElementById('options');
const options = [
    {type: 'button', className: 'pll-button', onClick: addValue, label: 'Add Value'}
];
const optionsView = new OptionsBox(optionsContainer, options);


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

