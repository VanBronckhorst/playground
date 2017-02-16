import BSTree from './classes/BSTree';
import TreeView from './views/TreeView';

const tree = new BSTree();
for (let i = 0; i < 15; i++) {
    tree.insert(Math.round(Math.random() * 100));
}

console.log(tree);
const view = new TreeView(document.getElementById('main'), tree);
