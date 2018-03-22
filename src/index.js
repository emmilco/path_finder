import Grid from './components/grid';
import Node from './components/node';
import bfsFlood from './generators/bfs_flood';
import bfsRandomFlood from './generators/bfs_random_flood';
import bfsMazeGenerator from './generators/bfs_maze_generator';

document.addEventListener("DOMContentLoaded", () => {
  window.grid = new Grid(80,80);
  bfsMazeGenerator([0,0], window.grid);
});
