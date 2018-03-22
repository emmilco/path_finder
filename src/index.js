import Grid from './components/grid';
import Node from './components/node';
import bfsFlood from './generators/bfs_flood';
import bfsRandomFlood from './generators/bfs_random_flood';
import bfsMazeGenerator from './generators/bfs_maze_generator';
import primsMazeGenerator from './generators/prims_maze_generator';
import dfsMazeGenerator from './generators/dfs_maze_generator';

document.addEventListener("DOMContentLoaded", () => {
  window.grid = new Grid(160,160);
  dfsMazeGenerator([0,0], window.grid);
});
