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
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
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

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.jarvisMarch = jarvisMarch;

// Uses https://en.wikipedia.org/wiki/Gift_wrapping_algorithm to create a convex hull
// Around a set of points
function jarvisMarch(points) {
    var res = [];
    if (!points || points.length === undefined || points.length === 0) {
        return res;
    }

    // find leftmost point
    var min = points[0];
    for (var i = 0; i < points.length; i++) {
        if (points[i].x < min.x) {
            min = points[i];
        }
    }

    var lastPoint = min;
    var nextPoint = min;
    do {
        res.push(lastPoint);
        nextPoint = points[0];

        for (var _i = 0; _i < points.length; _i++) {
            if (nextPoint === lastPoint || orientation(lastPoint, points[_i], nextPoint) === 2) {
                nextPoint = points[_i];
            }
        }

        lastPoint = nextPoint;
    } while (nextPoint != res[0]);

    res.push(res[0]);
    return res;
}

// To find orientation of ordered triplet (p, q, r).
// The function returns following values
// 0 --> p, q and r are colinear
// 1 --> Clockwise
// 2 --> Counterclockwise
function orientation(p, q, r) {
    var val = (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);

    if (val == 0) return 0; // colinear
    return val > 0 ? 1 : 2; // clock or counterclock wise
}

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SVGView2 = __webpack_require__(1);

var _SVGView3 = _interopRequireDefault(_SVGView2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PADDING = 5;
var POINT_RAD = 3;
var POINT_COLOR = '#2c3e50';
var POINT_PREFIX = '_item_';

var LINE_COLOR = 'red';
var LINE_WIDTH = 5;

var PointSetView = function (_SVGView) {
    _inherits(PointSetView, _SVGView);

    function PointSetView(domParent, points) {
        _classCallCheck(this, PointSetView);

        var _this = _possibleConstructorReturn(this, (PointSetView.__proto__ || Object.getPrototypeOf(PointSetView)).call(this, domParent));

        points = points || [];

        _this._minX = 0;
        _this._minY = 0;
        _this._maxX = 0;
        _this._maxY = 0;

        points.forEach(function (p) {
            _this.addPoint(p);
        });
        return _this;
    }

    _createClass(PointSetView, [{
        key: 'addPoint',
        value: function addPoint(point) {
            this.updateViewBox(point);

            var attributes = {
                fill: POINT_COLOR
            };

            this.appendCircle(point.x, point.y, POINT_RAD, attributes);
        }

        // Update the SVG viewBox if needed

    }, {
        key: 'updateViewBox',
        value: function updateViewBox(point) {
            var changed = false;

            if (point.x < this._minX) {
                this._minX = point.x;
                changed = true;
            }
            if (point.y < this._minY) {
                this._minY = point.y;
                changed = true;
            }
            if (point.x > this._maxX) {
                this._maxX = point.x;
                changed = true;
            }
            if (point.y > this._maxY) {
                this._maxY = point.y;
                changed = true;
            }

            if (changed) {
                var w = this._maxX - this._minX;
                var h = this._maxY - this._minY;
                this.setViewBox(this._minX - PADDING, this._minY - PADDING, w + 2 * PADDING, h + 2 * PADDING);
            }
        }
    }, {
        key: 'drawLine',
        value: function drawLine(line) {
            if (line.length < 2) {
                return;
            }

            var attributes = {
                stroke: LINE_COLOR,
                'stroke-width': LINE_WIDTH
            };

            for (var i = 1; i < line.length; i++) {
                var p1 = line[i - 1];
                var p2 = line[i];
                this.appendLine(p1.x, p1.y, p2.x, p2.y, attributes);
            }
        }
    }]);

    return PointSetView;
}(_SVGView3.default);

exports.default = PointSetView;

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _PointSetView = __webpack_require__(22);

var _PointSetView2 = _interopRequireDefault(_PointSetView);

var _ConvexHull = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var points = [];
for (var i = 0; i < 10; i++) {
    points.push({
        x: Math.random() * 2000 - 1000,
        y: Math.random() * 2000 - 1000
    });
}

var view = new _PointSetView2.default(document.getElementById('viz'), points);
view.drawLine((0, _ConvexHull.jarvisMarch)(points));

/***/ })

/******/ });