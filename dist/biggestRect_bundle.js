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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
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

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Matrix = __webpack_require__(5);

var _Matrix2 = _interopRequireDefault(_Matrix);

var _MazeMatrixView = __webpack_require__(7);

var _MazeMatrixView2 = _interopRequireDefault(_MazeMatrixView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WALL = 1;

var m = new _Matrix2.default(5, 5, function () {
    return Math.random() < 0.2 ? WALL : 0;
});

var view = new _MazeMatrixView2.default(document.getElementById('viz'), m, blockClicked);

view.highlightRect(biggestRect(m));

function blockClicked(r, c) {
    if (m.get(r, c) === 0) {
        m.set(r, c, 1);
    } else {
        m.set(r, c, 0);
    }

    view.update();
    view.highlightRect(biggestRect(m));
}

function biggestRect(matrix) {}

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MATRIX = Symbol();

var Matrix = function () {
    function Matrix(rows, cols) {
        var dataGen = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
            return 0;
        };

        _classCallCheck(this, Matrix);

        var arr = [];

        for (var i = 0; i < rows; i++) {
            var row = [];
            for (var j = 0; j < cols; j++) {
                row.push(dataGen(i, j));
            }
            arr.push(row);
        }

        this[MATRIX] = arr;
    }

    _createClass(Matrix, [{
        key: 'get',
        value: function get(r, c) {
            return this.matrix[r][c];
        }
    }, {
        key: 'set',
        value: function set(r, c, val) {
            this[MATRIX][r][c] = val;
        }
    }, {
        key: 'print',
        value: function print() {
            var s = '';

            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    s += this.get(i, j) + '\t';
                }
                s += '\n';
            }

            console.log(s);
        }
    }, {
        key: 'matrix',
        get: function get() {
            return this[MATRIX];
        }
    }, {
        key: 'rows',
        get: function get() {
            return this.matrix.length;
        }
    }, {
        key: 'columns',
        get: function get() {
            return this.matrix[0].length;
        }
    }]);

    return Matrix;
}();

exports.default = Matrix;

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SVGView2 = __webpack_require__(0);

var _SVGView3 = _interopRequireDefault(_SVGView2);

var _Matrix = __webpack_require__(5);

var _Matrix2 = _interopRequireDefault(_Matrix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NS = 'http://www.w3.org/2000/svg';
var BLOCK_SIZE = 10;
var BLOCK_MARGIN = 1;
var WALL_COL = 'black';
var EMPTY_COL = 'white';
var STROKE = 'black';
var HIGHLIGHT_STROKE = 'red';
var HIGHLIGHT_FILL = 'white';
var HIGHLIGHT_FILL_OPACITY = 0;

var TreeView = function (_SVGView) {
    _inherits(TreeView, _SVGView);

    function TreeView(domParent, matrix, onClick) {
        _classCallCheck(this, TreeView);

        var _this = _possibleConstructorReturn(this, (TreeView.__proto__ || Object.getPrototypeOf(TreeView)).call(this, domParent));

        _this.onClick = onClick || function () {
            return 0;
        };
        _this.matrix = matrix;
        _this.blockMatrix = new _Matrix2.default(matrix.rows, matrix.cols);
        _this.highlighted = null;
        _this.build();
        return _this;
    }

    _createClass(TreeView, [{
        key: 'build',
        value: function build() {
            var SVG = this.SVG;
            var matrix = this.matrix;

            var rows = matrix.rows;
            var cols = matrix.columns;

            var W = cols * BLOCK_SIZE + (cols - 1) * BLOCK_MARGIN;
            var H = rows * BLOCK_SIZE + (rows - 1) * BLOCK_MARGIN;

            SVG.setAttribute('viewBox', '0 0 ' + W + ' ' + H);

            for (var i = 0; i < rows; i++) {
                for (var j = 0; j < cols; j++) {
                    var block = this.createBlock(i, j);
                    SVG.appendChild(block);
                    this.blockMatrix.set(i, j, block);
                }
            }
        }
    }, {
        key: 'update',
        value: function update() {
            for (var i = 0; i < this.matrix.rows; i++) {
                for (var j = 0; j < this.matrix.columns; j++) {
                    this.updateBlock(i, j);
                }
            }
        }
    }, {
        key: 'highlightSquare',
        value: function highlightSquare(square) {
            if (this.highlighted !== null) {
                this.SVG.removeChild(this.highlighted);
                this.highlighted = null;
            }

            var sq = this.highlight(square.r, square.c, square.side, square.side);
            this.SVG.appendChild(sq);
            this.highlighted = sq;
        }
    }, {
        key: 'highlightRect',
        value: function highlightRect(rect) {
            if (this.highlighted !== null) {
                this.SVG.removeChild(this.highlighted);
                this.highlighted = null;
            }

            var r = this.highlight(rect.r, rect.c, rect.h, rect.w);
            this.SVG.appendChild(r);
            this.highlighted = r;
        }
    }, {
        key: 'createBlock',
        value: function createBlock(r, c) {
            var block = document.createElementNS(NS, 'rect');
            block.setAttribute('x', BLOCK_SIZE * c + BLOCK_MARGIN * c);
            block.setAttribute('y', BLOCK_SIZE * r + BLOCK_MARGIN * r);
            block.setAttribute('r', r);
            block.setAttribute('c', c);
            block.setAttribute('width', BLOCK_SIZE);
            block.setAttribute('height', BLOCK_SIZE);
            //block.setAttribute('stroke', STROKE);
            block.setAttribute('fill', this.matrix.get(r, c) === 0 ? EMPTY_COL : WALL_COL);
            block.addEventListener('click', this.onClick.bind(this, r, c));
            return block;
        }
    }, {
        key: 'updateBlock',
        value: function updateBlock(r, c) {
            var block = this.blockMatrix.get(r, c);
            console.log(this.matrix.get(r, c));
            block.setAttribute('fill', this.matrix.get(r, c) === 0 ? EMPTY_COL : WALL_COL);
        }
    }, {
        key: 'highlight',
        value: function highlight(r, c, h, w) {
            var block = document.createElementNS(NS, 'rect');
            block.setAttribute('x', BLOCK_SIZE * c + BLOCK_MARGIN * c);
            block.setAttribute('y', BLOCK_SIZE * r + BLOCK_MARGIN * r);
            block.setAttribute('width', BLOCK_SIZE * w + (w - 1) * BLOCK_MARGIN);
            block.setAttribute('height', BLOCK_SIZE * h + (h - 1) * BLOCK_MARGIN);
            block.setAttribute('stroke', HIGHLIGHT_STROKE);
            block.setAttribute('fill', HIGHLIGHT_FILL);
            block.setAttribute('fill-opacity', HIGHLIGHT_FILL_OPACITY);
            block.setAttribute('pointer-events', 'none');
            return block;
        }
    }]);

    return TreeView;
}(_SVGView3.default);

exports.default = TreeView;

/***/ })

/******/ });