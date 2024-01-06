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
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ({

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bottomUpFibonacci = bottomUpFibonacci;
exports.recursiveFastDoubling = recursiveFastDoubling;
function bottomUpFibonacci(n) {
    if (n < 1) {
        return 0;
    } else if (n < 3) {
        return 1;
    }

    // F(1)
    var a = 1;
    // F(2)
    var b = 1;

    var k = 2;

    while (k < n) {
        var tmp = b;
        b = a + b;
        a = tmp;
        k++;
    }

    return b;
}

function recursiveFastDoubling(n) {
    return __recursiveFastDoubling(n, {});
}

function __recursiveFastDoubling(n, mem) {
    if (n < 1) {
        return 0;
    } else if (n < 3) {
        return 1;
    }

    if (n in mem) {
        return mem[n];
    }

    var k = void 0;
    if (n % 2 === 1) {
        k = (n - 1) / 2;
    } else {
        k = n / 2;
    }

    var fN = __recursiveFastDoubling(k, mem);
    var fNPlus = __recursiveFastDoubling(k + 1, mem);

    var res = void 0;
    if (n % 2 === 1) {
        res = fNPlus * fNPlus + fN * fN;
    } else {
        res = fN * (2 * fNPlus - fN);
    }
    mem[n] = res;
    return res;
}

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Fibonacci = __webpack_require__(16);

var d = new Date();
var sum = 0;
for (var i = 0; i < 10000; i++) {
    sum += (0, _Fibonacci.recursiveFastDoubling)(i);
}
console.log(new Date() - d);

d = new Date();
for (var _i = 0; _i < 10000; _i++) {
    sum += (0, _Fibonacci.bottomUpFibonacci)(_i);
}
console.log(new Date() - d);
console.log(sum);

/***/ })

/******/ });