import BSTree from '../classes/BSTree';
import TreeView from '../views/TreeView';

const tree = new BSTree();
for (let i = 0; i < 10; i++) {
    tree.insert(Math.round(Math.random() * 100));
}

console.log(tree);
let view = new TreeView(document.getElementById('main'), tree);

setTimeout(() => {
    tree.root.rotateLeft();
    view.update();
}, 3000)
