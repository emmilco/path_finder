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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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

var Node = function () {
  function Node(coords, parent) {
    _classCallCheck(this, Node);

    this.x = coords[0];
    this.y = coords[1];
    this.neighbors = [[this.x + 1, this.y], [this.x - 1, this.y], [this.x, this.y + 1], [this.x, this.y - 1]];
    this.parent = parent;
    this.children = [];
    this.filled = false;
  }

  _createClass(Node, [{
    key: "distance",
    value: function distance() {
      if (this.parent) {
        return this.parent.distance() + 1;
      } else {
        return 0;
      }
    }
  }]);

  return Node;
}();

exports.default = Node;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _grid = __webpack_require__(2);

var _grid2 = _interopRequireDefault(_grid);

var _node = __webpack_require__(0);

var _node2 = _interopRequireDefault(_node);

var _random_traversal = __webpack_require__(3);

var _random_traversal2 = _interopRequireDefault(_random_traversal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {
  window.grid = new _grid2.default(40, 40);
  (0, _random_traversal2.default)([0, 0], window.grid);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _node = __webpack_require__(0);

var _node2 = _interopRequireDefault(_node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Grid = function () {
  function Grid(width, height) {
    _classCallCheck(this, Grid);

    this.array = [].concat(_toConsumableArray(Array(height).keys())).map(function (i) {
      return Array(width);
    });
    this.width = width;
    this.height = height;
    this.populateArray();
  }

  _createClass(Grid, [{
    key: 'populateArray',
    value: function populateArray() {
      for (var i = 0; i < this.width; i++) {
        for (var j = 0; j < this.height; j++) {
          this.array[i][j] = new _node2.default([i, j], null);
        }
      }
    }
  }, {
    key: 'contains',
    value: function contains(x, y) {
      return x >= 0 && x < this.width && y >= 0 && y < this.height;
    }
  }, {
    key: 'isOpenAt',
    value: function isOpenAt(x, y) {
      if (x + y === 0) return false;
      return this.contains(x, y) && !this.array[x][y].parent;
    }
  }, {
    key: 'fillSquare',
    value: function fillSquare(node) {
      this.array[node.x][node.y] = node;
    }
  }, {
    key: 'nodes',
    value: function nodes() {
      return [].concat.apply([], this.array);
    }
  }]);

  return Grid;
}();

exports.default = Grid;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _node = __webpack_require__(0);

var _node2 = _interopRequireDefault(_node);

var _canvas_draw = __webpack_require__(4);

var _canvas_draw2 = _interopRequireDefault(_canvas_draw);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function randomTraversal(root, grid) {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var candidates = [];
  candidates.push(new _node2.default(root, null));

  var traversalStep = function traversalStep() {
    if (candidates.length === 0) return;
    var active = candidates.shift();
    grid.fillSquare(active);
    (0, _canvas_draw2.default)(active, ctx);
    active.neighbors.forEach(function (child) {
      if (grid.isOpenAt(child[0], child[1])) {
        var node = grid.array[child[0]][child[1]];
        candidates.push(node);
        node.parent = active;
        active.children.push(node);
      }
    });
    window.setTimeout(traversalStep, 1);
  };

  traversalStep();
}

exports.default = randomTraversal;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function canvasDraw(node, ctx) {
  var size = 10;
  ctx.rect(node.x * size, node.y * size, size, size);
  ctx.stroke();
  ctx.font = "6px Georgia";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#000000";
  var distance = node.distance();
  ctx.fillText(distance, size * node.x + size / 2, size * node.y + size / 2);
}

exports.default = canvasDraw;

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map