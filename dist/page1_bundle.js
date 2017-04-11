/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SVG = Symbol();

var SVGView = function () {
    function SVGView(domParent) {
        _classCallCheck(this, SVGView);

        var ns = 'http://www.w3.org/2000/svg';
        this[SVG] = document.createElementNS(ns, 'svg');
        domParent.appendChild(this[SVG]);
        this[SVG].setAttribute('class', 'full-SVG');
    }

    _createClass(SVGView, [{
        key: 'clear',
        value: function clear() {
            while (this.SVG.hasChildNodes()) {
                this.SVG.removeChild(this.SVG.lastChild);
            }
        }
    }, {
        key: 'SVG',
        get: function get() {
            return this[SVG];
        }
    }]);

    return SVGView;
}();

exports.default = SVGView;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SVGView2 = __webpack_require__(0);

var _SVGView3 = _interopRequireDefault(_SVGView2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CIRCLE_RADIUS = 20;
var LEAF_DIST = 2.2;
var PARENT_DIST = 5;

var TreeView = function (_SVGView) {
    _inherits(TreeView, _SVGView);

    function TreeView(domParent, tree) {
        _classCallCheck(this, TreeView);

        var _this = _possibleConstructorReturn(this, (TreeView.__proto__ || Object.getPrototypeOf(TreeView)).call(this, domParent));

        _this.tree = tree;
        _this.buildTree();
        return _this;
    }

    _createClass(TreeView, [{
        key: 'buildTree',
        value: function buildTree() {
            var tree = this.tree;
            var SVG = this.SVG;

            // sizes for the SVG
            // build a grid where the tree can fit
            var treeH = tree.height;

            var rows = treeH + 1;
            var cols = Math.pow(2, treeH);

            var W = CIRCLE_RADIUS * LEAF_DIST * cols;
            var H = CIRCLE_RADIUS * PARENT_DIST * rows;

            SVG.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
            // SVG.setAttribute('preserveAspectRatio', 'xMidYMin');

            var dX = W / cols;
            var dY = H / rows;
            this.R = Math.min(dY, dX) * 0.4;

            this.drawNode(tree.root, W / 2, dY / 2, 0, -dY / 2);

            SVG.style.display = 'none';
            SVG.offsetHeight;
            SVG.style.display = '';
        }
    }, {
        key: 'drawLink',
        value: function drawLink(x1, y1, x2, y2) {
            var ns = 'http://www.w3.org/2000/svg';
            var line = document.createElementNS(ns, 'line');
            line.setAttribute('x1', x1);
            line.setAttribute('x2', x2);
            line.setAttribute('y1', y1);
            line.setAttribute('y2', y2);
            line.setAttribute('stroke', 'black');
            line.setAttribute('stroke-width', '1');
            this.SVG.appendChild(line);
        }
    }, {
        key: 'createCircle',
        value: function createCircle(node, x, y, r) {
            var ns = 'http://www.w3.org/2000/svg';

            var circle = document.createElementNS(ns, 'circle');
            circle.setAttribute('cx', x);
            circle.setAttribute('cy', y);
            circle.setAttribute('r', r);
            circle.setAttribute('fill', '#EEEEEE');
            circle.setAttribute('stroke', 'black');
            circle.setAttribute('stroke-width', '1');

            var text = document.createElementNS(ns, 'text');
            text.setAttribute('x', x);
            text.setAttribute('y', y);
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('dominant-baseline', 'middle');
            text.innerHTML = node.content;

            var group = document.createElementNS(ns, 'g');
            group.appendChild(circle);
            group.appendChild(text);

            return group;
        }
    }, {
        key: 'drawNode',
        value: function drawNode(node, x, y, parX, parY) {
            if (node.left !== null) {
                var newX = x - Math.abs(x - parX) / 2;
                var newY = y + (y - parY);
                this.drawLink(x, y, newX, newY);
                this.drawNode(node.left, newX, newY, x, y);
            }
            if (node.right !== null) {
                var _newX = x + Math.abs(x - parX) / 2;
                var _newY = y + (y - parY);
                this.drawLink(x, y, _newX, _newY);
                this.drawNode(node.right, _newX, _newY, x, y);
            }

            var circle = this.createCircle(node, x, y, CIRCLE_RADIUS);
            this.SVG.appendChild(circle);
        }
    }, {
        key: 'update',
        value: function update() {
            this.clear();
            this.buildTree();
        }
    }]);

    return TreeView;
}(_SVGView3.default);

exports.default = TreeView;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KEY = Symbol();

var Node = function () {
    function Node(key) {
        _classCallCheck(this, Node);

        this.data = {};
        this.data[KEY] = key;
    }

    _createClass(Node, [{
        key: "key",
        get: function get() {
            return this.data[KEY];
        },
        set: function set(val) {
            this.data[KEY] = val;
        }
    }, {
        key: "content",
        get: function get() {
            return this.key;
        }
    }]);

    return Node;
}();

exports.default = Node;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ROOT = Symbol();

var Tree = function () {
    function Tree(root) {
        _classCallCheck(this, Tree);

        this[ROOT] = root;
    }

    _createClass(Tree, [{
        key: "root",
        get: function get() {
            return this[ROOT];
        },
        set: function set(node) {
            this[ROOT] = node;
        }
    }, {
        key: "height",
        get: function get() {
            if (this.root !== null) {
                return this.root.height;
            }
            return 0;
        }
    }]);

    return Tree;
}();

exports.default = Tree;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node2 = __webpack_require__(2);

var _Node3 = _interopRequireDefault(_Node2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LEFT = Symbol();
var RIGHT = Symbol();

var TreeNode = function (_Node) {
    _inherits(TreeNode, _Node);

    function TreeNode(key) {
        _classCallCheck(this, TreeNode);

        var _this = _possibleConstructorReturn(this, (TreeNode.__proto__ || Object.getPrototypeOf(TreeNode)).call(this, key));

        _this[LEFT] = null;
        _this[RIGHT] = null;
        return _this;
    }

    _createClass(TreeNode, [{
        key: 'rotateRight',
        value: function rotateRight() {
            if (this[LEFT] === null) {
                throw new Error('Cannot perform right rotation because there is no left child');
            }

            var oldLeftData = this.left.data;
            var oldThisData = this.data;
            var oldLeft = this[LEFT];
            this.data = oldLeftData;
            oldLeft.data = oldThisData;
            this[LEFT] = oldLeft.left;
            oldLeft.left = oldLeft.right;
            oldLeft.right = this.right;
            this.right = oldLeft;
        }
    }, {
        key: 'rotateLeft',
        value: function rotateLeft() {
            if (this[RIGHT] === null) {
                throw new Error('Cannot perform left rotation because there is no right child');
            }

            var oldRightData = this.right.data;
            var oldThisData = this.data;
            var oldRight = this.right;
            this.data = oldRightData;
            oldRight.data = oldThisData;
            this.right = oldRight.right;
            oldRight.right = oldRight.left;
            oldRight.left = this.left;
            this.left = oldRight;
        }
    }, {
        key: 'left',
        get: function get() {
            return this[LEFT];
        },
        set: function set(node) {
            this[LEFT] = node;
        }
    }, {
        key: 'right',
        get: function get() {
            return this[RIGHT];
        },
        set: function set(node) {
            this[RIGHT] = node;
        }
    }, {
        key: 'height',
        get: function get() {
            var leftHeight = this.left === null ? -1 : this.left.height;
            var rightHeight = this.right === null ? -1 : this.right.height;

            return Math.max(leftHeight, rightHeight) + 1;
        }
    }]);

    return TreeNode;
}(_Node3.default);

exports.default = TreeNode;

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TreeNode2 = __webpack_require__(4);

var _TreeNode3 = _interopRequireDefault(_TreeNode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BSTNode = function (_TreeNode) {
    _inherits(BSTNode, _TreeNode);

    function BSTNode(key) {
        _classCallCheck(this, BSTNode);

        return _possibleConstructorReturn(this, (BSTNode.__proto__ || Object.getPrototypeOf(BSTNode)).call(this, key));
    }

    _createClass(BSTNode, [{
        key: 'insert',
        value: function insert(key) {
            if (key === this.key) {
                return;
            }

            if (key > this.key) {
                if (this.right !== null) {
                    this.right.insert(key);
                } else {
                    this.right = new BSTNode(key);
                    return this.right;
                }
            }

            if (key < this.key) {
                if (this.left !== null) {
                    this.left.insert(key);
                } else {
                    this.left = new BSTNode(key);
                    return this.left;
                }
            }
        }
    }]);

    return BSTNode;
}(_TreeNode3.default);

exports.default = BSTNode;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Tree2 = __webpack_require__(3);

var _Tree3 = _interopRequireDefault(_Tree2);

var _BSTNode = __webpack_require__(8);

var _BSTNode2 = _interopRequireDefault(_BSTNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BSTree = function (_Tree) {
    _inherits(BSTree, _Tree);

    function BSTree() {
        _classCallCheck(this, BSTree);

        return _possibleConstructorReturn(this, (BSTree.__proto__ || Object.getPrototypeOf(BSTree)).call(this, null));
    }

    _createClass(BSTree, [{
        key: 'insert',
        value: function insert(key) {
            if (this.root === null) {
                this.root = new _BSTNode2.default(key);
                return;
            }

            return this.root.insert(key);
        }
    }]);

    return BSTree;
}(_Tree3.default);

exports.default = BSTree;

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _BSTree = __webpack_require__(9);

var _BSTree2 = _interopRequireDefault(_BSTree);

var _TreeView = __webpack_require__(1);

var _TreeView2 = _interopRequireDefault(_TreeView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tree = new _BSTree2.default();
for (var i = 0; i < 5; i++) {
    tree.insert(Math.round(Math.random() * 100));
}

function addValue() {
    tree.insert(Math.round(Math.random() * 100));
    view.update();
}

console.log(tree);
var view = new _TreeView2.default(document.getElementById('viz'), tree);

// Interface Bindings
document.getElementById('addValueBtn').addEventListener('click', addValue);

/***/ })
/******/ ]);