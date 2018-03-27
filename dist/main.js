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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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
      if (this.depth) return this.depth;
      if (this.parent) {
        this.depth = this.parent.distance() + 1;
      } else {
        this.depth = 0;
      }
      return this.depth;
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


Object.defineProperty(exports, "__esModule", {
  value: true
});
function canvasDraw(node, ctx) {
  var size = 5;
  var distance = node.distance();
  ctx.fillStyle = "hsl(\n    " + (180 + distance * 3) + ",\n    90%,\n    45%)";
  if (node.type === "wall") ctx.fillStyle = 'white';
  ctx.fillRect(node.x * size, node.y * size, size, size);
}

exports.default = canvasDraw;

/***/ }),
/* 2 */
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

exports.default = canvasSearchDraw;

/***/ }),
/* 3 */
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

    this.length = 0;
    this.heap = [null];
    this.comparator = comparator;
  }

  _createClass(PriorityQueue, [{
    key: "isEmpty",
    value: function isEmpty() {
      return this.length === 0;
    }
  }, {
    key: "push",
    value: function push(key) {
      this.heap.push(key);
      this.swim(++this.length);
    }
  }, {
    key: "pop",
    value: function pop(key) {
      var min = this.heap[1];
      this.exchange(1, this.length);
      this.heap.pop();
      this.length--;
      this.sink(1);
      return min;
    }
  }, {
    key: "less",
    value: function less(i, j) {
      return this.comparator(this.heap[i], this.heap[j]) < 0;
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
      while (2 * k <= this.length) {
        // j is k's first child
        var j = 2 * k;
        // choose the lesser of k's children
        if (j < this.length && this.less(j + 1, j)) j++;
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

/***/ }),
/* 4 */
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

exports.default = canvasFoundDraw;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _bfs_flood = __webpack_require__(6);

var _bfs_flood2 = _interopRequireDefault(_bfs_flood);

var _bfs_random_flood = __webpack_require__(7);

var _bfs_random_flood2 = _interopRequireDefault(_bfs_random_flood);

var _maze_generator = __webpack_require__(9);

var _maze_generator2 = _interopRequireDefault(_maze_generator);

var _bfs_solver = __webpack_require__(11);

var _bfs_solver2 = _interopRequireDefault(_bfs_solver);

var _a_star_solver = __webpack_require__(12);

var _a_star_solver2 = _interopRequireDefault(_a_star_solver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {

  // bfsMazeGenerator(type, root, gridDims, canvasId, color, solver, method, target)
  (0, _maze_generator2.default)("prims", [0, 0], [100, 100], "0", true, _a_star_solver2.default, null, [98, 98]);
  document.dispatchEvent(new Event("scroll"));
  // Prims headliner-maze, color, A* solver
  (0, _maze_generator2.default)("bfsNonMaze", [0, 0], [100, 100], "1", false);

  // BFS non-maze, B&W
  (0, _maze_generator2.default)("bfsNonMaze", [0, 0], [100, 100], "1", false);

  // BFS maze, B&W
  (0, _maze_generator2.default)("bfs", [0, 0], [100, 100], "2", false);

  // BFS maze, Colored
  (0, _maze_generator2.default)("bfs", [0, 0], [100, 100], "3", true);

  // Prim's maze, B&W
  (0, _maze_generator2.default)("prims", [0, 0], [100, 200], "4", false);

  // Prim's maze, Colored
  (0, _maze_generator2.default)("prims", [0, 0], [100, 100], "5", true);

  // DFS non-maze, B&W
  (0, _maze_generator2.default)("dfsNonMaze", [0, 0], [100, 100], "6", false);

  // DFS maze, B&W
  (0, _maze_generator2.default)("dfs", [0, 0], [100, 100], "7", false);

  // DFS maze, Colorized
  (0, _maze_generator2.default)("dfs", [0, 0], [100, 100], "8", true);

  // BFS maze, Colorized
  (0, _maze_generator2.default)("bfs", [0, 0], [100, 100], "9", true);

  // BFS maze, with DFS solver, root at center
  (0, _maze_generator2.default)("bfs", [50, 50], [100, 100], "10", true, _bfs_solver2.default, "dfs", [98, 98]);

  // Prim's maze, with DFS solver, root at center
  (0, _maze_generator2.default)("prims", [50, 50], [100, 100], "11", true, _bfs_solver2.default, "dfs", [98, 98]);

  // DFS maze, with DFS solver, root at center
  (0, _maze_generator2.default)("dfs", [50, 50], [100, 100], "12", true, _bfs_solver2.default, "dfs", [98, 98]);

  // Prim's maze, BFS Solver, Root at center
  (0, _maze_generator2.default)("bfs", [50, 50], [100, 100], "13", true, _bfs_solver2.default, "bfs", [98, 98]);

  // Prim's maze, BFS Solver, Root and Target near center
  (0, _maze_generator2.default)("prims", [40, 50], [100, 100], "14", true, _bfs_solver2.default, "bfs", [50, 40]);

  // Prim's maze, DFS Solver, Root and Target near center
  (0, _maze_generator2.default)("prims", [40, 50], [100, 100], "15", true, _bfs_solver2.default, "dfs", [50, 40]);

  // BFS maze, DFS Solver, Root at corner
  (0, _maze_generator2.default)("bfs", [0, 0], [100, 100], "16", true, _bfs_solver2.default, "dfs", [98, 98]);

  // BFS maze, BFS Solver, Root at corner
  (0, _maze_generator2.default)("bfs", [0, 0], [100, 100], "16a", true, _bfs_solver2.default, "bfs", [98, 98]);

  // BFS maze, Dijkstra solver
  (0, _maze_generator2.default)("bfs", [0, 0], [100, 200], "17", true, _a_star_solver2.default, "dijkstra", [98, 198]);

  // BFS maze, A* solver, Root at center
  (0, _maze_generator2.default)("bfs", [50, 50], [100, 100], "18", true, _a_star_solver2.default, null, [98, 98]);

  // Prim's maze, A* solver, Root at center
  (0, _maze_generator2.default)("prims", [50, 50], [100, 100], "19", true, _a_star_solver2.default, null, [98, 98]);

  // DFS maze, A* solver, Root at center
  (0, _maze_generator2.default)("dfs", [50, 50], [100, 100], "20", true, _a_star_solver2.default, null, [98, 98]);

  (0, _maze_generator2.default)("bfs", [0, 0], [100, 100], "21", true, _bfs_solver2.default, "dfs", [98, 98]);
  (0, _maze_generator2.default)("bfs", [0, 0], [100, 100], "22", true, _bfs_solver2.default, "bfs", [98, 98]);
  (0, _maze_generator2.default)("bfs", [0, 0], [100, 100], "23", true, _a_star_solver2.default, null, [98, 98]);
  (0, _maze_generator2.default)("dfs", [0, 0], [100, 100], "24", true, _bfs_solver2.default, "dfs", [98, 98]);
  (0, _maze_generator2.default)("dfs", [0, 0], [100, 100], "25", true, _bfs_solver2.default, "bfs", [98, 98]);
  (0, _maze_generator2.default)("dfs", [0, 0], [100, 100], "26", true, _a_star_solver2.default, null, [98, 98]);
  (0, _maze_generator2.default)("prims", [0, 0], [100, 100], "27", true, _bfs_solver2.default, "dfs", [98, 98]);
  (0, _maze_generator2.default)("prims", [0, 0], [100, 100], "28", true, _bfs_solver2.default, "bfs", [98, 98]);
  (0, _maze_generator2.default)("prims", [0, 0], [100, 100], "29", true, _a_star_solver2.default, null, [98, 98]);
  (0, _maze_generator2.default)("prims", [0, 0], [300, 300], "30", true, _a_star_solver2.default, null, [298, 298]);
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _node = __webpack_require__(0);

var _node2 = _interopRequireDefault(_node);

var _canvas_draw = __webpack_require__(1);

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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _node = __webpack_require__(0);

var _node2 = _interopRequireDefault(_node);

var _canvas_draw = __webpack_require__(1);

var _canvas_draw2 = _interopRequireDefault(_canvas_draw);

var _shuffle_array = __webpack_require__(8);

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
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _node = __webpack_require__(0);

var _node2 = _interopRequireDefault(_node);

var _grid = __webpack_require__(10);

var _grid2 = _interopRequireDefault(_grid);

var _priority_queue = __webpack_require__(3);

var _priority_queue2 = _interopRequireDefault(_priority_queue);

var _canvas_draw = __webpack_require__(1);

var _canvas_draw2 = _interopRequireDefault(_canvas_draw);

var _canvas_search_draw = __webpack_require__(2);

var _canvas_search_draw2 = _interopRequireDefault(_canvas_search_draw);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var mazeGenerator = function mazeGenerator(type, root, gridDims, canvas, color, solver, method, target) {
  canvas.addEventListener("click", function () {
    return window.clearInterval(interval);
  });
  var grid = new (Function.prototype.bind.apply(_grid2.default, [null].concat(_toConsumableArray(gridDims))))();
  var drawMethod = color ? _canvas_draw2.default : _canvas_search_draw2.default;
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var maxDepth = 0;
  grid.root = root;
  var candidates = void 0;
  if (type === "prims") {
    candidates = new _priority_queue2.default(function (a, b) {
      return b.value - a.value;
    });
  } else {
    candidates = [];
  }
  candidates.push(grid.array[root[0]][root[1]]);

  var traversalStep = function traversalStep() {
    if (candidates.length === 0) {
      console.log(maxDepth);
      window.clearInterval(interval);
      if (solver) return solver(root, grid, ctx, target, method);
      return;
    }

    var active = void 0;
    switch (type) {
      case "bfs":
        active = candidates.splice(Math.floor(Math.random() * candidates.length), 1)[0];
        break;
      case "dfs":
        active = candidates.splice(candidates.length - Math.floor(Math.random() * 3 + 1), 1)[0];
        break;
      case "bfsNonMaze":
        active = candidates.shift();
        break;
      case "prims":
      case "dfsNonMaze":
        active = candidates.pop();
        break;
    }

    active.type = "path";
    var distance = active.distance();
    if (distance > maxDepth) maxDepth = distance;
    if (active.parent) {
      var edge = active.edgeToParent();
      var edgeNode = grid.array[edge[0]][edge[1]];
      edgeNode.type = 'path';
      edgeNode.parent = active.parent;
      drawMethod(edgeNode, ctx);
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

    drawMethod(active, ctx);
  };

  var interval = window.setInterval(traversalStep, 0);
};

var maze = function maze(type, root, gridDims, canvasId, color, solver, method, target) {
  var canvas = document.getElementById(canvasId);
  canvas.addEventListener("click", function () {
    mazeGenerator(type, root, gridDims, canvas, color, solver, method, target);
  });
  var scrollHandler = function scrollHandler() {
    if (canvas.getBoundingClientRect().bottom < window.innerHeight && canvas.getBoundingClientRect().top > 0) {
      mazeGenerator(type, root, gridDims, canvas, color, solver, method, target);
      document.removeEventListener("scroll", scrollHandler);
    }
  };
  document.addEventListener("scroll", scrollHandler);
};

exports.default = maze;

/***/ }),
/* 10 */
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

    this.array = [].concat(_toConsumableArray(Array(width).keys())).map(function (i) {
      return Array(height);
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _node = __webpack_require__(0);

var _node2 = _interopRequireDefault(_node);

var _canvas_search_draw = __webpack_require__(2);

var _canvas_search_draw2 = _interopRequireDefault(_canvas_search_draw);

var _canvas_found_draw = __webpack_require__(4);

var _canvas_found_draw2 = _interopRequireDefault(_canvas_found_draw);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function bfsSolver(rootCoords, grid, ctx, target, method) {
  var _this = this;

  var root = rootCoords;
  var targetNode = grid.array[target[0]][target[1]];
  var candidates = [];
  var explored = 0;
  ctx.canvas.addEventListener("click", function () {
    return window.clearInterval(_this.interval);
  });
  candidates.push(grid.array[root[0]][root[1]]);

  var traversalStep = function traversalStep() {
    if (candidates.length === 0) return;
    var active = void 0;
    if (method === "dfs") {
      active = candidates.pop();
    } else {
      active = candidates.shift();
    }
    explored++;
    (0, _canvas_search_draw2.default)(active, ctx);
    if (active.parent) {
      var edge = active.edgeToParent();
      var edgeNode = grid.array[edge[0]][edge[1]];
      (0, _canvas_search_draw2.default)(edgeNode, ctx);
    }
    if (active.x === target[0] && active.y === target[1]) {
      console.log(method + ' ' + explored / targetNode.distance());
      markPathTo(active, grid, ctx);
      return;
    }
    active.children.forEach(function (child) {
      candidates.push(child);
    });
    var interval = window.setTimeout(traversalStep, 0);
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _priority_queue = __webpack_require__(3);

var _priority_queue2 = _interopRequireDefault(_priority_queue);

var _canvas_search_draw = __webpack_require__(2);

var _canvas_search_draw2 = _interopRequireDefault(_canvas_search_draw);

var _canvas_found_draw = __webpack_require__(4);

var _canvas_found_draw2 = _interopRequireDefault(_canvas_found_draw);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var aStarSolver = function () {
  function aStarSolver(rootCoords, grid, ctx, target, method) {
    var _this = this;

    _classCallCheck(this, aStarSolver);

    this.interval = null;
    this.method = method;
    this.ctx = ctx;
    this.rootCoords = rootCoords;
    this.rootNode = grid.array[rootCoords[0]][rootCoords[1]];
    this.targetCoords = target;
    this.examined = {};
    this.cameFrom = {};
    this.candidates = new _priority_queue2.default(function (a, b) {
      if (_this.fScore[a.coords] < _this.fScore[b.coords]) return -1;
    });
    this.candidates.push(this.rootNode);
    this.gScore = _defineProperty({}, this.rootCoords, 0);
    this.fScore = {};
    this.fScore[this.rootCoords] = this.heuristic(this.rootNode, this.targetCoords);
    this.grid = grid;
    this.targetNode = grid.array[target[0]][target[1]];
    this.explored = 0;
    ctx.canvas.addEventListener("click", function () {
      return window.clearInterval(_this.interval);
    });
  }

  _createClass(aStarSolver, [{
    key: 'heuristic',
    value: function heuristic(current) {
      if (this.method === "dijkstra") return 0;
      var dx = Math.abs(current[0] - this.targetCoords[0]);
      var dy = Math.abs(current[1] - this.targetCoords[1]);
      // return dx + dy;
      return Math.sqrt(dx * dx + dy * dy);
    }
  }, {
    key: 'search',
    value: function search() {
      var _this2 = this;

      if (this.candidates.isEmpty()) return -1;
      var active = this.candidates.pop();
      this.explored++;
      var ctx = this.ctx;
      if (active.parent) {
        var edge = active.edgeToParent();
        var edgeNode = this.grid.array[edge[0]][edge[1]];
        (0, _canvas_search_draw2.default)(edgeNode, ctx);
      }
      (0, _canvas_search_draw2.default)(active, ctx);

      if (active.coords.toString() === this.targetCoords.toString()) {
        console.log('a* ' + this.explored / this.targetNode.distance());
        return this.reconstructPath(active, ctx);
      }
      this.examined[active.coords] = true;
      active.children.forEach(function (child) {
        if (!_this2.examined[child.coords]) {
          _this2.candidates.push(child);
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
      this.interval = window.setTimeout(function () {
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

var aStar = function aStar(root, grid, ctx, target, method) {
  new aStarSolver(root, grid, ctx, target, method).search();
};

exports.default = aStar;

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map