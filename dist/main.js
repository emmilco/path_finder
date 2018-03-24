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

    this.coords = coords;
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

var _a_star_solver = __webpack_require__(15);

var _a_star_solver2 = _interopRequireDefault(_a_star_solver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {
  var root = [0, 50];
  var target = [98, 50];
  var grid1 = new _grid2.default(100, 100);
  var grid2 = new _grid2.default(100, 100);
  var grid3 = new _grid2.default(100, 100);
  (0, _bfs_maze_generator2.default)(root, grid1, "1");
  (0, _bfs_maze_generator2.default)(root, grid2, "2");
  (0, _bfs_maze_generator2.default)(root, grid3, "3");
  window.setTimeout(function () {
    return (0, _bfs_solver2.default)(root, grid1, "bfs", "1", target);
  }, 15000);
  window.setTimeout(function () {
    return (0, _bfs_solver2.default)(root, grid2, "dfs", "2", target);
  }, 15000);
  window.setTimeout(function () {
    return new _a_star_solver2.default(root, grid3, "3", target).search();
  }, 15000);
  var grid4 = new _grid2.default(100, 100);
  var grid5 = new _grid2.default(100, 100);
  var grid6 = new _grid2.default(100, 100);
  (0, _prims_maze_generator2.default)(root, grid4, "4");
  (0, _prims_maze_generator2.default)(root, grid5, "5");
  (0, _prims_maze_generator2.default)(root, grid6, "6");
  window.setTimeout(function () {
    return (0, _bfs_solver2.default)(root, grid4, "bfs", "4", target);
  }, 15000);
  window.setTimeout(function () {
    return (0, _bfs_solver2.default)(root, grid5, "dfs", "5", target);
  }, 15000);
  window.setTimeout(function () {
    return new _a_star_solver2.default(root, grid6, "6", target).search();
  }, 15000);
  var grid7 = new _grid2.default(100, 100);
  var grid8 = new _grid2.default(100, 100);
  var grid9 = new _grid2.default(100, 100);
  (0, _dfs_maze_generator2.default)(root, grid7, "7");
  (0, _dfs_maze_generator2.default)(root, grid8, "8");
  (0, _dfs_maze_generator2.default)(root, grid9, "9");
  window.setTimeout(function () {
    return (0, _bfs_solver2.default)(root, grid7, "bfs", "7", target);
  }, 15000);
  window.setTimeout(function () {
    return (0, _bfs_solver2.default)(root, grid8, "dfs", "8", target);
  }, 15000);
  window.setTimeout(function () {
    return new _a_star_solver2.default(root, grid9, "9", target).search();
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
    this.root = [];
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
      if (x === this.root[0] && y === this.root[1]) return false;
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
  var distance = node.distance();
  ctx.fillStyle = "hsl(\n    " + distance * 2 + ",\n    " + (50 + 20 * Math.sin(distance / 3)) + "%,\n    " + (50 + 10 * Math.cos(distance / 3)) + "%)";
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

function bfsMazeGenerator(root, grid, canvasId) {
  var canvas = document.getElementById('' + canvasId);
  var ctx = canvas.getContext("2d");
  var candidates = [];
  grid.root = root;
  candidates.push(grid.array[root[0]][root[1]]);

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

function primsMazeGenerator(root, grid, canvasId) {
  var canvas = document.getElementById('' + canvasId);
  var ctx = canvas.getContext("2d");
  var candidates = [];
  grid.root = root;
  candidates.push(grid.array[root[0]][root[1]]);

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

function dfsMazeGenerator(root, grid, canvasId) {
  var canvas = document.getElementById('' + canvasId);
  var ctx = canvas.getContext("2d");
  var candidates = [];
  grid.root = root;
  candidates.push(grid.array[root[0]][root[1]]);

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

function bfsSolver(rootCoords, grid, method, canvasId, target) {
  // const target = [grid.height - 2, grid.width - 2];
  var root = rootCoords;
  var canvas = document.getElementById('' + canvasId);
  var ctx = canvas.getContext("2d");
  var candidates = [];
  var explored = 0;
  candidates.push(grid.array[root[0]][root[1]]);

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
      markPathTo(active, grid, ctx);
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

function markPathTo(node, grid, ctx) {
  (0, _canvas_found_draw2.default)(node, ctx);
  if (node.parent) {
    var edge = node.edgeToParent();
    var edgeNode = grid.array[edge[0]][edge[1]];
    (0, _canvas_found_draw2.default)(edgeNode, ctx);
    window.setTimeout(function () {
      return markPathTo(node.parent, grid, ctx);
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

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _priority_queue = __webpack_require__(16);

var _priority_queue2 = _interopRequireDefault(_priority_queue);

var _canvas_search_draw = __webpack_require__(13);

var _canvas_search_draw2 = _interopRequireDefault(_canvas_search_draw);

var _canvas_found_draw = __webpack_require__(14);

var _canvas_found_draw2 = _interopRequireDefault(_canvas_found_draw);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var aStarSolver = function () {
  function aStarSolver(rootCoords, grid, canvasId, target) {
    var _this = this;

    _classCallCheck(this, aStarSolver);

    this.canvasId = canvasId;
    this.rootCoords = rootCoords;
    this.rootNode = grid.array[rootCoords[0]][rootCoords[1]];
    // this.targetCoords = [grid.height - 2, grid.width - 2];
    this.targetCoords = target;
    this.examined = {};
    this.cameFrom = {};
    this.candidates = new _priority_queue2.default(function (a, b) {
      if (_this.fScore[a.coords] < _this.fScore[b.coords]) return -1;
    });
    this.candidates.insert(this.rootNode);
    this.gScore = _defineProperty({}, this.rootCoords, 0);
    this.fScore = {};
    this.fScore[this.rootCoords] = this.heuristic(this.rootNode, this.targetCoords);
    this.grid = grid;
    this.explored = 0;
  }

  _createClass(aStarSolver, [{
    key: 'heuristic',
    value: function heuristic(current) {
      // NOTE: using diagonal distance because of generator characteristics
      var dx = Math.abs(current[0] - this.targetCoords[0]);
      var dy = Math.abs(current[1] - this.targetCoords[1]);
      return Math.sqrt(dx * dx + dy * dy);
    }
  }, {
    key: 'search',
    value: function search() {
      var _this2 = this;

      if (this.candidates.isEmpty()) return -1;
      var active = this.candidates.removeMin();
      var canvas = document.getElementById('' + this.canvasId);
      var ctx = canvas.getContext("2d");
      if (active.parent) {
        var edge = active.edgeToParent();
        var edgeNode = this.grid.array[edge[0]][edge[1]];
        (0, _canvas_search_draw2.default)(edgeNode, ctx);
      }
      (0, _canvas_search_draw2.default)(active, ctx);

      if (active.coords.toString() === this.targetCoords.toString()) {
        return this.reconstructPath(active, ctx);
      }
      this.examined[active.coords] = true;
      active.children.forEach(function (child) {
        if (!_this2.examined[child.coords]) {
          _this2.candidates.insert(child);
          _this2.gScore[child.coords] = Infinity;
        } else {
          return;
        }
        var tentativeGScore = _this2.gScore[active.coords] + 1;
        if (tentativeGScore >= _this2.gScore) {
          return;
        }
        _this2.cameFrom[child.coords] = active.coords;
        _this2.gScore[child.coords] = tentativeGScore;
        _this2.fScore[child.coords] = _this2.gScore[child.coords] + _this2.heuristic(child.coords);
      });
      window.setTimeout(function () {
        return _this2.search();
      }, 0);
    }
  }, {
    key: 'reconstructPath',
    value: function reconstructPath(node, ctx) {
      var _this3 = this;

      (0, _canvas_found_draw2.default)(node, ctx);
      if (node.parent) {
        var edge = node.edgeToParent();
        var edgeNode = this.grid.array[edge[0]][edge[1]];
        (0, _canvas_found_draw2.default)(edgeNode, ctx);
        window.setTimeout(function () {
          return _this3.reconstructPath(node.parent, ctx);
        }, 0);
      }
    }
  }]);

  return aStarSolver;
}();

exports.default = aStarSolver;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// NOTE: This is a MIN heap priority queue.

var PriorityQueue = function () {
  function PriorityQueue(comparator) {
    _classCallCheck(this, PriorityQueue);

    this.size = 0;
    this.heap = [null];
    this.comparator = comparator;
  }

  _createClass(PriorityQueue, [{
    key: "isEmpty",
    value: function isEmpty() {
      return this.size === 0;
    }
  }, {
    key: "insert",
    value: function insert(key) {
      this.heap.push(key);
      this.swim(++this.size);
    }
  }, {
    key: "removeMin",
    value: function removeMin(key) {
      var min = this.heap[1];
      this.exchange(1, this.size);
      this.heap.pop();
      this.size--;
      this.sink(1);
      return min;
    }
  }, {
    key: "less",
    value: function less(i, j) {
      return this.comparator(this.heap[i], this.heap[j]) === -1;
    }
  }, {
    key: "exchange",
    value: function exchange(i, j) {
      var _ref = [this.heap[j], this.heap[i]];
      this.heap[i] = _ref[0];
      this.heap[j] = _ref[1];
    }
  }, {
    key: "swim",
    value: function swim(k) {
      while (k > 1 && this.less(k, Math.floor(k / 2))) {
        this.exchange(Math.floor(k / 2), k);
        k = Math.floor(k / 2);
      }
    }
  }, {
    key: "sink",
    value: function sink(k) {
      while (2 * k <= this.size) {
        // j is k's first child
        var j = 2 * k;
        // choose the lesser of k's children
        if (j < this.size && this.less(j + 1, j)) j++;
        // if k is not greater than its least child, k is in place
        if (!this.less(j, k)) break;
        // make k the child, j the parent
        this.exchange(k, j);
        // repeat the process with k in its new position
        k = j;
      }
    }
  }]);

  return PriorityQueue;
}();

exports.default = PriorityQueue;

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map