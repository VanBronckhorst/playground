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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
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
        // this[SVG].setAttribute('class', 'full-SVG');
        this.domParent = domParent;
    }

    _createClass(SVGView, [{
        key: 'clear',
        value: function clear() {
            while (this.SVG.hasChildNodes()) {
                this.SVG.removeChild(this.SVG.lastChild);
            }
        }
    }, {
        key: 'setViewBox',
        value: function setViewBox(xmin, ymin, width, height) {
            this.SVG.setAttribute('viewBox', xmin + ' ' + ymin + ' ' + width + ' ' + height);

            var style = window.getComputedStyle(this.domParent, null);
            var H = parseFloat(style.getPropertyValue('height'));
            var W = parseFloat(style.getPropertyValue('width'));

            if (W * height / width > H) {
                this.SVG.setAttribute('height', H);
                this.SVG.setAttribute('width', H * width / height);
            } else {
                this.SVG.setAttribute('height', W * height / width);
                this.SVG.setAttribute('width', W);
            }
        }
    }, {
        key: 'appendRect',
        value: function appendRect(x, y, w, h, attributes) {
            var ns = 'http://www.w3.org/2000/svg';

            var rect = document.createElementNS(ns, 'rect');
            rect.setAttribute('x', x);
            rect.setAttribute('y', y);
            rect.setAttribute('width', w);
            rect.setAttribute('height', h);

            for (var k in attributes) {
                rect.setAttribute(k, attributes[k]);
            }

            this.SVG.appendChild(rect);
        }
    }, {
        key: 'appendCircle',
        value: function appendCircle(x, y, r, attributes) {
            var ns = 'http://www.w3.org/2000/svg';

            var circle = document.createElementNS(ns, 'circle');
            circle.setAttribute('cx', x);
            circle.setAttribute('cy', y);
            circle.setAttribute('r', r);

            for (var k in attributes) {
                circle.setAttribute(k, attributes[k]);
            }

            this.SVG.appendChild(circle);
        }
    }, {
        key: 'setOnClick',
        value: function setOnClick(fun) {
            var _this = this;

            var _pt = this.SVG.createSVGPoint();

            var clickFun = function clickFun(evt) {
                _pt.x = evt.clientX;
                _pt.y = evt.clientY;

                // The cursor point, translated into svg coordinates
                var cursorpt = _pt.matrixTransform(_this.SVG.getScreenCTM().inverse());
                fun(cursorpt.x, cursorpt.y);
            };

            this.SVG.addEventListener('click', clickFun);
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

var HEAP = Symbol();
var COMPARE = Symbol();

// Simple Priority Queue implemented with a array-stored heap

var PriorityQueue = function () {
    function PriorityQueue(array, comparer) {
        _classCallCheck(this, PriorityQueue);

        array = array || [];
        this[COMPARE] = comparer || function (a, b) {
            return a < b ? -1 : a > b ? 1 : 0;
        };

        this[HEAP] = [];

        for (var i = 0; i < array.length; i++) {
            this.push(array[i]);
        }
    }

    _createClass(PriorityQueue, [{
        key: "push",
        value: function push(item) {
            this[HEAP].push(item);
            this._climbUp(this[HEAP].length - 1);
        }
    }, {
        key: "peek",
        value: function peek() {
            return this[HEAP][0];
        }
    }, {
        key: "pop",
        value: function pop() {
            var item = this.peek();

            if (this[HEAP].length !== 0) {
                this._removeRoot();
            }

            return item;
        }
    }, {
        key: "_removeRoot",
        value: function _removeRoot() {
            var d = this[HEAP];
            var last = this[HEAP].pop();
            this[HEAP][0] = last;
            var compare = this[COMPARE];

            var pos = firstChild(0);

            while (pos < d.length) {
                var bestChild = pos;

                if (pos + 1 < d.length && compare(d[pos + 1], d[pos]) < 0) {
                    bestChild = pos + 1;
                }

                if (compare(d[bestChild], last) < 0) {
                    d[parent(bestChild)] = d[bestChild];
                    d[bestChild] = last;
                    pos = firstChild(bestChild);
                } else {
                    break;
                }
            }
        }
    }, {
        key: "_climbUp",
        value: function _climbUp(idx) {
            var d = this[HEAP];
            var item = d[idx];
            var compare = this[COMPARE];

            while (idx > 0) {
                var par = parent(idx);

                if (compare(item, d[par]) < 0) {
                    // need to swap
                    d[idx] = d[par];
                    idx = par;
                } else {
                    break;
                }
            }

            this[HEAP][idx] = item;
        }
    }]);

    return PriorityQueue;
}();

exports.default = PriorityQueue;


function parent(i) {
    return i - 1 >> 1;
}

function firstChild(i) {
    return (i << 1) + 1;
}

/***/ }),
/* 13 */
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
        key: "sqDistanceFromPoint",
        value: function sqDistanceFromPoint(x, y) {
            var dx = _distFromAxis(x, this.minX, this.maxX);
            var dy = _distFromAxis(y, this.minY, this.maxY);
            return dx * dx + dy * dy;
        }
    }, {
        key: "intersects",
        value: function intersects(other) {
            return other.minX <= this.maxX && other.minY <= this.maxY && other.maxX >= this.minX && other.maxY >= this.minY;
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
    }, {
        key: "height",
        get: function get() {
            return this.maxY - this.minY;
        }
    }, {
        key: "width",
        get: function get() {
            return this.maxX - this.minX;
        }
    }]);

    return BoundingBox;
}();

function _distFromAxis(k, min, max) {
    if (k <= min) {
        return min - k;
    }

    if (k <= max) {
        return 0;
    }

    return k - max;
}

exports.default = BoundingBox;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BoundingBox = __webpack_require__(13);

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
        key: 'isItem',
        get: function get() {
            return false;
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
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Leaf = __webpack_require__(19);

var _Leaf2 = _interopRequireDefault(_Leaf);

var _NonLeaf = __webpack_require__(20);

var _NonLeaf2 = _interopRequireDefault(_NonLeaf);

var _BoundingBox = __webpack_require__(13);

var _BoundingBox2 = _interopRequireDefault(_BoundingBox);

var _PriorityQueue = __webpack_require__(12);

var _PriorityQueue2 = _interopRequireDefault(_PriorityQueue);

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
        key: '_search',
        value: function _search(item, toBBox) {
            toBBox = toBBox || function (d) {
                return new _BoundingBox2.default(d.minX, d.minY, d.maxX, d.maxY);
            };
            var BBox = toBBox(item);

            var toExplore = [this[ROOT]];
            var res = [];

            if (!this[ROOT].BBox.intersects(BBox)) {
                return res;
            }
            var curr = toExplore.pop();
            while (curr) {

                for (var j = 0; j < curr.children.length; j++) {
                    var next = curr.children[j];
                    if (next.BBox.intersects(BBox)) {
                        if (curr.isLeaf) {
                            res.push(next);
                        } else {
                            toExplore.push(next);
                        }
                    }
                }
                curr = toExplore.pop();
            }

            return res;
        }
    }, {
        key: '_insert',
        value: function _insert(item, toBBox) {
            toBBox = toBBox || function (d) {
                return new _BoundingBox2.default(d.minX, d.minY, d.maxX, d.maxY);
            };
            var BBox = toBBox(item);
            item.BBox = BBox;
            item.isItem = true;

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

            a.height = node.height;
            b.height = node.height;

            var children = node.children;

            var maxSep = -Infinity;
            var maxSepTupleIndexes = [];
            // O(n^2) find two nodes where separation is greatest
            for (var i = 0; i < children.length; i++) {
                var c1 = children[i];
                for (var j = i + 1; j < children.length; j++) {
                    var c2 = children[j];
                    var enclosing = c1.BBox.area + c1.BBox.enlargedArea(c2.BBox);
                    var sep = enclosing - c1.BBox.area - c2.BBox.area;
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
    }, {
        key: 'knn',
        value: function knn(x, y, n, validator) {
            validator = validator || function () {
                return true;
            };
            if (this[ROOT].fill === 0) {
                return [];
            }

            var res = [];
            var toAnalyze = new _PriorityQueue2.default([], function (a, b) {
                return a.dist - b.dist;
            });

            var curr = {
                node: this[ROOT],
                dist: this[ROOT].BBox.sqDistanceFromPoint(x, y)
            };

            while (curr) {
                curr = curr.node;
                if (curr.isItem) {
                    if (validator(curr)) {
                        res.push(curr);
                        if (res.length === n) {
                            return res;
                        }
                    }
                } else {
                    curr.children.forEach(function (c) {
                        toAnalyze.push({
                            node: c,
                            dist: c.BBox.sqDistanceFromPoint(x, y)
                        });
                    });
                }

                curr = toAnalyze.pop();
            }

            return res;
        }
    }, {
        key: 'boundingBox',
        get: function get() {
            return this[ROOT].BBox;
        }
    }, {
        key: '_root',
        get: function get() {
            return this[ROOT];
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
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _SVGView2 = __webpack_require__(1);

var _SVGView3 = _interopRequireDefault(_SVGView2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PADDING = 5;
var COLORS = ['#ffffcc', '#fed976', '#fd8d3c', '#fc4e2a', '#e31a1c', '#bd0026', '#800026'];
var STROKE_WIDTH = 5;
var ITEM_RAD = 3;
var ITEM_COLOR = '#2c3e50';
var ITEM_PREFIX = '_item_';

var RTreeView = function (_SVGView) {
    _inherits(RTreeView, _SVGView);

    function RTreeView(domParent, tree, drawItems) {
        _classCallCheck(this, RTreeView);

        var _this = _possibleConstructorReturn(this, (RTreeView.__proto__ || Object.getPrototypeOf(RTreeView)).call(this, domParent));

        _this.drawItems = drawItems;
        _this.tree = tree;
        _this.drawTree();
        return _this;
    }

    _createClass(RTreeView, [{
        key: 'drawTree',
        value: function drawTree() {
            var t = this.tree;

            var BBox = t.boundingBox;

            _get(RTreeView.prototype.__proto__ || Object.getPrototypeOf(RTreeView.prototype), 'setViewBox', this).call(this, BBox.minX - PADDING, BBox.minY - PADDING, BBox.width + 2 * PADDING, BBox.height + 2 * PADDING);

            var root = t._root;

            var toDraw = [];
            var toExplore = [root];
            var curr = toExplore.pop();

            while (curr) {
                toDraw.push(curr);
                if (!curr.isLeaf) {
                    for (var i = 0; i < curr.children.length; i++) {
                        toExplore.push(curr.children[i]);
                    }
                }

                curr = toExplore.splice(0, 1)[0];
            }

            for (var _i = toDraw.length - 1; _i >= 0; _i--) {
                this.drawNode(toDraw[_i]);
            }
        }
    }, {
        key: 'drawNode',
        value: function drawNode(node) {
            var box = node.BBox;
            var height = node.height;

            var attributes = {
                'stroke-width': height,
                fill: 'transparent',
                stroke: this.getBoxColor(height)
            };

            if (this.drawItems) {
                this._drawItems(node.children);
            }

            this.appendRect(box.minX, box.minY, box.width, box.height, attributes);
        }
    }, {
        key: '_drawItems',
        value: function _drawItems(items) {
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                if (item.type === "point") {
                    var attrs = {
                        fill: ITEM_COLOR,
                        id: ITEM_PREFIX + item.id
                    };
                    this.appendCircle(item.minX, item.minY, ITEM_RAD, attrs);
                }
            }
        }
    }, {
        key: 'highlightItems',
        value: function highlightItems(items) {
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                var element = document.getElementById(ITEM_PREFIX + item.id);
                if (item.type === "point") {
                    element.setAttribute('r', '10');
                }
            }
        }
    }, {
        key: 'getBoxColor',
        value: function getBoxColor(lvl) {
            return COLORS[lvl];
        }
    }]);

    return RTreeView;
}(_SVGView3.default);

exports.default = RTreeView;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RTreeNode2 = __webpack_require__(14);

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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RTreeNode2 = __webpack_require__(14);

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
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _RTree = __webpack_require__(16);

var _RTree2 = _interopRequireDefault(_RTree);

var _RTreeView = __webpack_require__(18);

var _RTreeView2 = _interopRequireDefault(_RTreeView);

var _PriorityQueue = __webpack_require__(12);

var _PriorityQueue2 = _interopRequireDefault(_PriorityQueue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tree = new _RTree2.default();

for (var i = 0; i < 1000; i++) {
    var minX = Math.random() * 1000;
    var minY = Math.random() * 1000;
    var maxX = minX;
    var maxY = minY;

    tree._insert({ minX: minX, minY: minY, maxX: maxX, maxY: maxY, id: i, type: 'point' });
}

console.log(tree._search({ minX: 5, minY: 5, maxX: 6, maxY: 6 }));

var view = new _RTreeView2.default(document.getElementById('viz'), tree, true);

view.setOnClick(function (x, y) {
    var closest = tree.knn(x, y, 3);
    view.highlightItems(closest);
});

console.log(tree);

/***/ })
/******/ ]);