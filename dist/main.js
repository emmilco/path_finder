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
    this.candNeighbors = [[this.x + 2, this.y], [this.x - 2, this.y], [this.x, this.y + 2], [this.x, this.y - 2]];
    this.parent = parent;
    this.children = [];
    this.type = null;
    this.value = Math.random();
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
  }, {
    key: "edgeToParent",
    value: function edgeToParent() {
      var mean = function mean(a, b) {
        return (a + b) / 2;
      };
      return [mean(this.parent.x, this.x), mean(this.parent.y, this.y)];
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

var _bfs_flood = __webpack_require__(5);

var _bfs_flood2 = _interopRequireDefault(_bfs_flood);

var _bfs_random_flood = __webpack_require__(8);

var _bfs_random_flood2 = _interopRequireDefault(_bfs_random_flood);

var _bfs_maze_generator = __webpack_require__(9);

var _bfs_maze_generator2 = _interopRequireDefault(_bfs_maze_generator);

var _prims_maze_generator = __webpack_require__(10);

var _prims_maze_generator2 = _interopRequireDefault(_prims_maze_generator);

var _dfs_maze_generator = __webpack_require__(11);

var _dfs_maze_generator2 = _interopRequireDefault(_dfs_maze_generator);

var _bfs_solver = __webpack_require__(12);

var _bfs_solver2 = _interopRequireDefault(_bfs_solver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {
  window.grid = new _grid2.default(100, 100);
  (0, _prims_maze_generator2.default)([0, 0], window.grid);
  window.setTimeout(function () {
    return (0, _bfs_solver2.default)(window.grid, "dfs");
  }, 15000);
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
    key: "populateArray",
    value: function populateArray() {
      for (var i = 0; i < this.width; i++) {
        for (var j = 0; j < this.height; j++) {
          this.array[i][j] = new _node2.default([i, j], null);
        }
      }
    }
  }, {
    key: "contains",
    value: function contains(x, y) {
      return x >= 0 && x < this.width && y >= 0 && y < this.height;
    }
  }, {
    key: "isOpenAt",
    value: function isOpenAt(x, y) {
      if (x + y === 0) return false;
      return this.contains(x, y) && !this.array[x][y].parent;
    }
  }, {
    key: "intersectsPath",
    value: function intersectsPath(x, y) {
      var close = this.array[x][y].candNeighbors;
      var count = 0;
      for (var i = 0; i < close.length; i++) {
        var x0 = close[i][0];
        var y0 = close[i][1];
        if (this.contains(x0, y0) && this.array[x0][y0].type === "path") {
          count += 1;
        }
      }
      if (count > 2) return true;
    }
  }, {
    key: "fillSquare",
    value: function fillSquare(node) {
      this.array[node.x][node.y] = node;
    }
  }, {
    key: "nodes",
    value: function nodes() {
      return [].concat.apply([], this.array);
    }
  }]);

  return Grid;
}();

exports.default = Grid;

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function canvasDraw(node, ctx) {
  var size = 5;
  ctx.fillStyle = "hsl(\n    " + node.distance() * 2 + ",\n    " + (50 + 20 * Math.sin(node.distance() / 3)) + "%,\n    " + (50 + 10 * Math.cos(node.distance() / 3)) + "%)";
  if (node.type === "wall") ctx.fillStyle = 'white';
  ctx.fillRect(node.x * size, node.y * size, size, size);
}

// function canvasDraw(node, ctx){
//   const size = 20;
//   ctx.rect(node.x * size,node.y * size, size, size);
//   ctx.stroke();
//   ctx.font="9px Georgia";
//   ctx.textAlign="center";
//   ctx.textBaseline = "middle";
//   ctx.fillStyle = "#000000";
//   const distance = node.distance();
//   ctx.fillText(distance, size*node.x+(size/2), size*node.y+(size/2));
// }

exports.default = canvasDraw;

/***/ }),
/* 5 */
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

function bfsFlood(root, grid) {
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
    window.setTimeout(traversalStep, 0);
  };

  traversalStep();
}

exports.default = bfsFlood;

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var shuffleArray = function shuffleArray(array) {
  for (var i = 0; i < array.length; i++) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref = [array[j], array[i]];
    array[i] = _ref[0];
    array[j] = _ref[1];
  }
};

exports.default = shuffleArray;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _node = __webpack_require__(0);

var _node2 = _interopRequireDefault(_node);

var _canvas_draw = __webpack_require__(4);

var _canvas_draw2 = _interopRequireDefault(_canvas_draw);

var _shuffle_array = __webpack_require__(7);

var _shuffle_array2 = _interopRequireDefault(_shuffle_array);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function bfsRandomFlood(root, grid) {
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
    (0, _shuffle_array2.default)(candidates);
    window.setTimeout(traversalStep, 0);
  };

  traversalStep();
}

exports.default = bfsRandomFlood;

/***/ }),
/* 9 */
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

function bfsMazeGenerator(root, grid) {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var candidates = [];
  candidates.push(grid.array[0][0]);

  var traversalStep = function traversalStep() {
    if (candidates.length === 0) return;

    var active = candidates.splice(Math.floor(Math.random() * candidates.length), 1)[0];
    active.type = "path";
    if (active.parent) {
      var edge = active.edgeToParent();
      var edgeNode = grid.array[edge[0]][edge[1]];
      edgeNode.type = 'path';
      edgeNode.parent = active.parent;
      (0, _canvas_draw2.default)(edgeNode, ctx);
    }
    var children = active.candNeighbors.filter(function (neighbor) {
      return grid.isOpenAt(neighbor[0], neighbor[1]);
    });
    children.forEach(function (child) {
      var node = grid.array[child[0]][child[1]];
      candidates.push(node);
      node.parent = active;
      active.children.push(node);
    });
    (0, _canvas_draw2.default)(active, ctx);
    window.setTimeout(traversalStep, 0);
    // traversalStep();
  };

  traversalStep();
}

exports.default = bfsMazeGenerator;

/***/ }),
/* 10 */
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

function primsMazeGenerator(root, grid) {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var candidates = [];
  candidates.push(grid.array[0][0]);

  var traversalStep = function traversalStep() {
    if (candidates.length === 0) return;
    candidates.sort(function (a, b) {
      return b.value - a.value;
    });
    var active = candidates.pop();
    active.type = "path";
    if (active.parent) {
      var edge = active.edgeToParent();
      var edgeNode = grid.array[edge[0]][edge[1]];
      edgeNode.type = 'path';
      edgeNode.parent = active.parent;
      (0, _canvas_draw2.default)(edgeNode, ctx);
    }
    var children = active.candNeighbors.filter(function (neighbor) {
      return grid.isOpenAt(neighbor[0], neighbor[1]);
    });
    children.forEach(function (child) {
      var node = grid.array[child[0]][child[1]];
      candidates.push(node);
      node.parent = active;
      active.children.push(node);
    });
    (0, _canvas_draw2.default)(active, ctx);
    window.setTimeout(traversalStep, 0);
    // traversalStep();
  };

  traversalStep();
}

exports.default = primsMazeGenerator;

/***/ }),
/* 11 */
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

function dfsMazeGenerator(root, grid) {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var candidates = [];
  candidates.push(grid.array[0][0]);

  var traversalStep = function traversalStep() {
    if (candidates.length === 0) return;
    var active = candidates.splice(candidates.length - Math.floor(Math.random() * 3 + 1), 1)[0];
    active.type = "path";
    if (active.parent) {
      var edge = active.edgeToParent();
      var edgeNode = grid.array[edge[0]][edge[1]];
      edgeNode.type = 'path';
      edgeNode.parent = active.parent;
      (0, _canvas_draw2.default)(edgeNode, ctx);
    }
    var children = active.candNeighbors.filter(function (neighbor) {
      return grid.isOpenAt(neighbor[0], neighbor[1]);
    });
    children.forEach(function (child) {
      var node = grid.array[child[0]][child[1]];
      candidates.push(node);
      node.parent = active;
      active.children.push(node);
    });
    (0, _canvas_draw2.default)(active, ctx);
    window.setTimeout(traversalStep, 0);
    // traversalStep();
  };

  traversalStep();
}

exports.default = dfsMazeGenerator;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _node = __webpack_require__(0);

var _node2 = _interopRequireDefault(_node);

var _canvas_search_draw = __webpack_require__(13);

var _canvas_search_draw2 = _interopRequireDefault(_canvas_search_draw);

var _canvas_found_draw = __webpack_require__(14);

var _canvas_found_draw2 = _interopRequireDefault(_canvas_found_draw);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function bfsSolver(grid, method) {
  var target = [grid.height - 2, grid.width - 2];
  var root = [0, 0];
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var candidates = [];
  var explored = 0;
  candidates.push(grid.array[0][0]);

  var traversalStep = function traversalStep() {
    if (candidates.length === 0) return;
    var active = void 0;
    if (method === "dfs") {
      active = candidates.pop();
    } else {
      active = candidates.shift();
    }
    explored += 1;
    (0, _canvas_search_draw2.default)(active, ctx);
    if (active.parent) {
      var edge = active.edgeToParent();
      var edgeNode = grid.array[edge[0]][edge[1]];
      (0, _canvas_search_draw2.default)(edgeNode, ctx);
    }
    if (active.x === target[0] && active.y === target[1]) {
      markPathTo(active, grid);
      console.log(explored);
      return;
    }
    active.children.forEach(function (child) {
      candidates.push(child);
    });
    window.setTimeout(traversalStep, 0);
  };
  traversalStep();
}

function markPathTo(node, grid) {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  (0, _canvas_found_draw2.default)(node, ctx);
  if (node.parent) {
    var edge = node.edgeToParent();
    var edgeNode = grid.array[edge[0]][edge[1]];
    (0, _canvas_found_draw2.default)(edgeNode, ctx);
    window.setTimeout(function () {
      return markPathTo(node.parent, grid);
    }, 0);
  }
}

exports.default = bfsSolver;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function canvasSearchDraw(node, ctx) {
  var size = 5;
  ctx.fillStyle = "white";
  if (node.type === "wall") ctx.fillStyle = 'white';
  ctx.fillRect(node.x * size, node.y * size, size, size);
}

// function canvasSearchDraw(node, ctx){
//   const size = 20;
//   ctx.rect(node.x * size,node.y * size, size, size);
//   ctx.stroke();
//   ctx.font="9px Georgia";
//   ctx.textAlign="center";
//   ctx.textBaseline = "middle";
//   ctx.fillStyle = "#000000";
//   const distance = node.distance();
//   ctx.fillText(distance, size*node.x+(size/2), size*node.y+(size/2));
// }

exports.default = canvasSearchDraw;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function canvasFoundDraw(node, ctx) {
  var size = 5;
  ctx.fillStyle = "red";
  if (node.type === "wall") ctx.fillStyle = 'white';
  ctx.fillRect(node.x * size, node.y * size, size, size);
}

// function canvasFoundDraw(node, ctx){
//   const size = 20;
//   ctx.rect(node.x * size,node.y * size, size, size);
//   ctx.stroke();
//   ctx.font="9px Georgia";
//   ctx.textAlign="center";
//   ctx.textBaseline = "middle";
//   ctx.fillStyle = "#000000";
//   const distance = node.distance();
//   ctx.fillText(distance, size*node.x+(size/2), size*node.y+(size/2));
// }

exports.default = canvasFoundDraw;

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map