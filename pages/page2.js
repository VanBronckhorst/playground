import AVLTree from '../classes/Tree/AVLTree';
import TreeView from '../views/TreeView';
import OptionsBox from '../views/OptionsBox';

// Interface Bindings
const optionsContainer = document.getElementById('options');
const options = [
    {type: 'button', className: 'button', onClick: addValue, label: 'Add Value'}
];
const optionsView = new OptionsBox(optionsContainer, options);


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
