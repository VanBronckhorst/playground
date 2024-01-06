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
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
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
        key: 'appendLine',
        value: function appendLine(x1, y1, x2, y2, attributes) {
            var ns = 'http://www.w3.org/2000/svg';

            var line = document.createElementNS(ns, 'line');
            line.setAttribute('x1', x1);
            line.setAttribute('x2', x2);
            line.setAttribute('y1', y1);
            line.setAttribute('y2', y2);

            for (var k in attributes) {
                line.setAttribute(k, attributes[k]);
            }

            this.SVG.appendChild(line);
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

/***/ 17:
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

/***/ 23:
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

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _RTree = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../classes/Rtree/RTree.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _RTree2 = _interopRequireDefault(_RTree);

var _RTreeView = __webpack_require__(23);

var _RTreeView2 = _interopRequireDefault(_RTreeView);

var _PriorityQueue = __webpack_require__(17);

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

/******/ });