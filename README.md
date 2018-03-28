# README

![Gif of maze generation](./maze.gif)

Pathfinder is a single-page demo of a few major maze-generation and pathfinding algorithms.  It is built completely in vanilla JavaScript (ES6), using HTML5 canvas elements in order to render the mazes.

[Live version.](https://emmilco.github.io/path_finder/)

## Technologies

JavaScript, Canvas, HTML5, CSS3

## Algorithms and Data Structures Used

- A*
- BFS
- DFS
- Prim's Algorithm
- Dijkstra's Algorithm
- Binary MinHeap Priority Queue
- Directed graphs

## Overview

Each maze is implemented as a spanning tree consisting of nodes which represent squares on a rectangular grid.  Each node has a few properties: x and y coordinates, parent, children, value.  Nodes are linked dynamically by each algorithm to create a spanning tree within the limits of the canvas.  

The various generating algorithms are implemented using a switch within a single generator function, which determines how the active node is chosen out of the pool of candidate nodes.

``` js
// generators/maze_generators.js

let active;
switch (type) {
case "bfs":
  active = candidates.splice(
    Math.floor(Math.random()*candidates.length), 1
  )[0];
  break;
case "dfs":
  active = candidates.splice(
    candidates.length - Math.floor(Math.random()*3+1), 1
  )[0];
  break;
case "bfsNonMaze":
  active = candidates.shift();
  break;
case "prims":
case "dfsNonMaze":
  active = candidates.pop();
  break;
}
```

A\* is implemented as an ES6 class.  Both it and the Prim's generator use a binary min-heap priority queue to reduce the cost of finding the optimal node within the pool of candidates.  

I also built an implementation of Fisher-Yates shuffle, as well as two simple grid-flooding functions, but found them ultimately unnecessary for the project.  

[Visit the live site for further explanations!](https://emmilco.github.io/path_finder/)
