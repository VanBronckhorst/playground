/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MIN_X = Symbol();
var MIN_Y = Symbol();
var MAX_X = Symbol();
var MAX_Y = Symbol();

var BoundingBox = function () {
    function BoundingBox(minX, minY, maxX, maxY) {
        _classCallCheck(this, BoundingBox);

        this[MIN_X] = minX || Infinity;
        this[MIN_Y] = minY || Infinity;
        this[MAX_X] = maxX || -Infinity;
        this[MAX_Y] = maxY || -Infinity;
    }

    _createClass(BoundingBox, [{
        key: "enlarge",
        value: function enlarge(toAdd) {

            this.minX = Math.min(this.minX, toAdd.minX);
            this.minY = Math.min(this.minY, toAdd.minY);
            this.maxX = Math.max(this.maxX, toAdd.maxX);
            this.maxY = Math.max(this.maxY, toAdd.maxY);
        }
    }, {
        key: "enlargedArea",
        value: function enlargedArea(toAdd) {
            var newMinX = Math.min(this.minX, toAdd.minX);
            var newMinY = Math.min(this.minY, toAdd.minY);
            var newMaxX = Math.max(this.maxX, toAdd.maxX);
            var newMaxY = Math.max(this.maxY, toAdd.maxY);

            return (newMaxX - newMinX) * (newMaxY - newMinY) - this.area;
        }
    }, {
        key: "minX",
        get: function get() {
            return this[MIN_X];
        },
        set: function set(d) {
            this[MIN_X] = d;
        }
    }, {
        key: "minY",
        get: function get() {
            return this[MIN_Y];
        },
        set: function set(d) {
            this[MIN_Y] = d;
        }
    }, {
        key: "maxX",
        get: function get() {
            return this[MAX_X];
        },
        set: function set(d) {
            this[MAX_X] = d;
        }
    }, {
        key: "maxY",
        get: function get() {
            return this[MAX_Y];
        },
        set: function set(d) {
            this[MAX_Y] = d;
        }
    }, {
        key: "area",
        get: function get() {
            return (this.maxX - this.minX) * (this.maxY - this.minY);
        }
    }]);

    return BoundingBox;
}();

exports.default = BoundingBox;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BoundingBox = __webpack_require__(12);

var _BoundingBox2 = _interopRequireDefault(_BoundingBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CHILDREN = Symbol();
var HEIGHT = Symbol();
var BBOX = Symbol();

var Node = function () {
    function Node(children) {
        _classCallCheck(this, Node);

        this[CHILDREN] = [];
        this[HEIGHT] = 1;
        this[BBOX] = new _BoundingBox2.default();

        for (var i = 0; i < children.length; i++) {
            this.add(children[i]);
        }
    }

    _createClass(Node, [{
        key: 'add',
        value: function add(item, BBox) {
            BBox = BBox || item.BBox;
            this.children.push(item);
            this.BBox.enlarge(BBox);
        }
    }, {
        key: 'fill',
        get: function get() {
            return this.children.length;
        }
    }, {
        key: 'children',
        get: function get() {
            return this[CHILDREN];
        }
    }, {
        key: 'height',
        get: function get() {
            return this[HEIGHT];
        },
        set: function set(h) {
            this[HEIGHT] = h;
        }
    }, {
        key: 'minX',
        get: function get() {
            return this[BBOX].minX;
        }
    }, {
        key: 'minY',
        get: function get() {
            return this[BBOX].minY;
        }
    }, {
        key: 'maxX',
        get: function get() {
            return this[BBOX].maxX;
        }
    }, {
        key: 'maxY',
        get: function get() {
            return this[BBOX].maxY;
        }
    }, {
        key: 'BBox',
        get: function get() {
            return this[BBOX];
        },
        set: function set(b) {
            this[BBOX] = b;
        }
    }]);

    return Node;
}();

exports.default = Node;

/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Leaf = __webpack_require__(17);

var _Leaf2 = _interopRequireDefault(_Leaf);

var _NonLeaf = __webpack_require__(18);

var _NonLeaf2 = _interopRequireDefault(_NonLeaf);

var _BoundingBox = __webpack_require__(12);

var _BoundingBox2 = _interopRequireDefault(_BoundingBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ROOT = Symbol();
var M = Symbol();
var m = Symbol();

var RTree = function () {
    function RTree() {
        _classCallCheck(this, RTree);

        this[ROOT] = new _Leaf2.default([]);

        this[M] = 9;
        this[m] = 4;
    }

    _createClass(RTree, [{
        key: '_insert',
        value: function _insert(item, toBBox) {
            toBBox = toBBox || function (d) {
                return new _BoundingBox2.default(d.minX, d.minY, d.maxX, d.maxY);
            };
            var BBox = toBBox(item);
            item.BBox = BBox;

            var insertionWalk = this._insertWalk(BBox);
            var insertLeaf = insertionWalk[insertionWalk.length - 1];

            insertLeaf.add(item);

            // walk back the insertion path and split when necessary
            var lvl = insertionWalk.length - 1;
            while (lvl >= 0) {
                var node = insertionWalk[lvl];

                if (node.fill > this[M]) {
                    // splits the node and attaches the two resulting nodes to the parent
                    this._split(insertionWalk, lvl);
                    lvl--;
                } else {
                    break;
                }
            }

            // for the remaining parents, adjust BBox
            while (lvl >= 0) {
                var _node = insertionWalk[lvl];

                _node.BBox.enlarge(BBox);
                lvl--;
            }
        }
    }, {
        key: '_split',
        value: function _split(chain, toSplit) {
            var toSplitNode = chain[toSplit];

            var splits = this._quadraticSplit(toSplitNode);

            if (toSplit !== 0) {
                var parent = chain[toSplit - 1];
                // remove splitted node
                parent.children.splice(parent.children.indexOf(toSplitNode), 1);

                parent.add(splits[0]);
                parent.add(splits[1]);
            } else {
                this._splitRoot(splits);
            }
        }
    }, {
        key: '_splitRoot',
        value: function _splitRoot(children) {
            this[ROOT] = new _NonLeaf2.default(children);
            this[ROOT].height = children[0].height + 1;
        }

        // Splits a node using simple greedy quadratic function

    }, {
        key: '_quadraticSplit',
        value: function _quadraticSplit(node) {
            var a = void 0;
            var b = void 0;

            if (node.isLeaf) {
                a = new _Leaf2.default([]);
                b = new _Leaf2.default([]);
            } else {
                a = new _NonLeaf2.default([]);
                b = new _NonLeaf2.default([]);
            }

            var children = node.children;

            var maxSep = -Infinity;
            var maxSepTupleIndexes = [];
            // O(n^2) find two nodes where separation is greatest
            for (var i = 0; i < children.length; i++) {
                var c1 = children[i];
                for (var j = i + 1; j < children.length; j++) {
                    var c2 = children[j];
                    var sep = node.BBox.area - c1.BBox.area - c2.BBox.area;
                    if (sep > maxSep) {
                        maxSep = sep;
                        maxSepTupleIndexes = [i, j];
                    }
                }
            }

            // Put the farthest element in two groups and distribute the others minimizing enlargement
            var maxSepTuple = [children[maxSepTupleIndexes[0]], children[maxSepTupleIndexes[1]]];
            a.add(maxSepTuple[0]);
            b.add(maxSepTuple[1]);

            var toDistribute = [];
            for (var _i = 0; _i < children.length; _i++) {
                if (_i !== maxSepTupleIndexes[0] && _i !== maxSepTupleIndexes[1]) {
                    toDistribute.push(_i);
                }
            }

            var lim = this[M] - this[m] + 1;
            while (toDistribute.length !== 0) {
                var last = children[toDistribute[toDistribute.length - 1]];

                if (a.fill === lim) {
                    b.add(last);
                    toDistribute.pop();
                } else if (b.fill === lim) {
                    a.add(last);
                    toDistribute.pop();
                } else {
                    // Greedy find the most gaining assignment

                    var maxDiff = -Infinity;
                    var maxDiffIndex = void 0;

                    for (var _i2 = 0; _i2 < toDistribute.length; _i2++) {
                        var child = children[toDistribute[_i2]];
                        var diff = Math.abs(a.BBox.enlargedArea(child) - b.BBox.enlargedArea(child));
                        if (diff > maxDiff) {
                            maxDiff = diff;
                            maxDiffIndex = _i2;
                        }
                    }

                    var adding = toDistribute.splice(maxDiffIndex, 1)[0];
                    adding = children[adding];
                    var aEnlarge = a.BBox.enlargedArea(adding);
                    var bEnlarge = b.BBox.enlargedArea(adding);

                    // add to least increasing group
                    if (aEnlarge < bEnlarge) {
                        a.add(adding);
                    } else {
                        b.add(adding);
                    }
                }
            }

            if (a.fill < this[m] || b.fill < this[m]) {
                console.log("ERROR", a, b, toDistribute, children);
            }
            return [a, b];
        }
    }, {
        key: '_insertWalk',
        value: function _insertWalk(BBox) {
            var curr = this[ROOT];
            var res = [curr];

            while (!curr.isLeaf) {
                curr = leastIncreasing(curr.children, BBox);
                res.push(curr);
            }

            return res;
        }
    }]);

    return RTree;
}();

function leastIncreasing(nodes, toAdd) {

    var minVal = Infinity;
    var minIndex = 0;

    for (var i = 0; i < nodes.length; i++) {
        var box = nodes[i].BBox;
        var enlarged = box.enlargedArea(toAdd);

        if (enlarged < minVal) {
            minVal = enlarged;
            minIndex = i;
        } else if (enlarged === minVal) {
            var areaThis = box.area;
            var areaMin = nodes[minIndex].BBox.area;

            if (areaThis < areaMin) {
                minIndex = i;
            }
        }
    }

    return nodes[minIndex];
}

exports.default = RTree;

/***/ }),
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RTreeNode2 = __webpack_require__(13);

var _RTreeNode3 = _interopRequireDefault(_RTreeNode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Leaf = function (_RTreeNode) {
    _inherits(Leaf, _RTreeNode);

    function Leaf(children) {
        _classCallCheck(this, Leaf);

        return _possibleConstructorReturn(this, (Leaf.__proto__ || Object.getPrototypeOf(Leaf)).call(this, children));
    }

    _createClass(Leaf, [{
        key: 'isLeaf',
        get: function get() {
            return true;
        }
    }]);

    return Leaf;
}(_RTreeNode3.default);

exports.default = Leaf;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RTreeNode2 = __webpack_require__(13);

var _RTreeNode3 = _interopRequireDefault(_RTreeNode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonLeaf = function (_RTreeNode) {
    _inherits(NonLeaf, _RTreeNode);

    function NonLeaf(children) {
        _classCallCheck(this, NonLeaf);

        return _possibleConstructorReturn(this, (NonLeaf.__proto__ || Object.getPrototypeOf(NonLeaf)).call(this, children));
    }

    _createClass(NonLeaf, [{
        key: 'isLeaf',
        get: function get() {
            return false;
        }
    }]);

    return NonLeaf;
}(_RTreeNode3.default);

exports.default = NonLeaf;

/***/ }),
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _RTree = __webpack_require__(15);

var _RTree2 = _interopRequireDefault(_RTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tree = new _RTree2.default();

for (var i = 0; i < 25; i++) {
    var minX = Math.random() * 10;
    var minY = Math.random() * 10;
    var maxX = Math.random() * 10 + minX;
    var maxY = Math.random() * 10 + minY;

    tree._insert({ minX: minX, minY: minY, maxX: maxX, maxY: maxY, id: i });
}

window.insertObj = function () {
    var minX = Math.random() * 10;
    var minY = Math.random() * 10;
    var maxX = Math.random() * 10 + minX;
    var maxY = Math.random() * 10 + minY;

    window.tree._insert({ minX: minX, minY: minY, maxX: maxX, maxY: maxY, id: Math.random() });
};
window.tree = new _RTree2.default();

console.log(tree);

/***/ })
/******/ ]);