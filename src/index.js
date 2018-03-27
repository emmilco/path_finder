import bfsFlood from './generators/bfs_flood';
import bfsRandomFlood from './generators/bfs_random_flood';
import maze from './generators/maze_generator';
import bfsSolver from './solvers/bfs_solver';
import aStar from './solvers/a_star_solver';

document.addEventListener("DOMContentLoaded", () => {

  // bfsMazeGenerator(type, root, gridDims, canvasId, color, solver, method, target)
  maze("prims", [0,0], [100,100], "0", true, aStar, null, [98,98]);
  document.dispatchEvent(new Event("scroll"));
  // Prims headliner-maze, color, A* solver

  // BFS non-maze, B&W
  maze("bfsNonMaze", [0,0], [100,100], "1", false);

  // BFS maze, B&W
  maze("bfs", [0,0], [100,100], "2", false);

  // BFS maze, Colored
  maze("bfs", [0,0], [100,100], "3", true);

  // Prim's maze, B&W
  maze("prims", [0,0], [100,200], "4", false);

  // Prim's maze, Colored
  maze("prims", [0,0], [100,100], "5", true);

  // DFS non-maze, B&W
  maze("dfsNonMaze", [0,0], [100,100], "6", false);

  // DFS maze, B&W
  maze("dfs", [0,0], [100,100], "7", false);

  // DFS maze, Colorized
  maze("dfs", [0,0], [100,100], "8", true);

  // BFS maze, Colorized
  maze("bfs", [0,0], [100,100], "9", true);

  // BFS maze, with DFS solver, root at center
  maze("bfs", [50,50], [100,100], "10", true, bfsSolver, "dfs", [98,98]);

  // Prim's maze, with DFS solver, root at center
  maze("prims", [50,50], [100,100], "11", true, bfsSolver, "dfs", [98,98]);

  // DFS maze, with DFS solver, root at center
  maze("dfs", [50,50], [100,100], "12", true, bfsSolver, "dfs", [98,98]);

  // Prim's maze, BFS Solver, Root at center
  maze("bfs", [50,50], [100,100], "13", true, bfsSolver, "bfs", [98,98]);

  // Prim's maze, BFS Solver, Root and Target near center
  maze("prims", [40,50], [100,100], "14", true, bfsSolver, "bfs", [50,40]);

  // Prim's maze, DFS Solver, Root and Target near center
  maze("prims", [40,50], [100,100], "15", true, bfsSolver, "dfs", [50,40]);

  // BFS maze, DFS Solver, Root at corner
  maze("bfs", [0,0], [100,100], "16", true, bfsSolver, "dfs", [98,98]);

  // BFS maze, BFS Solver, Root at corner
  maze("bfs", [0,0], [100,100], "16a", true, bfsSolver, "bfs", [98,98]);

  // BFS maze, Dijkstra solver
  maze("bfs", [0,0], [100,200], "17", true, aStar, "dijkstra", [98,198]);

  // BFS maze, A* solver, Root at center
  maze("bfs", [50,50], [100,100], "18", true, aStar, null, [98,98]);

  // Prim's maze, A* solver, Root at center
  maze("prims", [50,50], [100,100], "19", true, aStar, null, [98,98]);

  // DFS maze, A* solver, Root at center
  maze("dfs", [50,50], [100,100], "20", true, aStar, null, [98,98]);

  maze("bfs", [0,0], [100,100], "21", true, bfsSolver, "dfs", [98,98]);
  maze("bfs", [0,0], [100,100], "22", true, bfsSolver, "bfs", [98,98]);
  maze("bfs", [0,0], [100,100], "23", true, aStar, null, [98,98]);
  maze("dfs", [0,0], [100,100], "24", true, bfsSolver, "dfs", [98,98]);
  maze("dfs", [0,0], [100,100], "25", true, bfsSolver, "bfs", [98,98]);
  maze("dfs", [0,0], [100,100], "26", true, aStar, null, [98,98]);
  maze("prims", [0,0], [100,100], "27", true, bfsSolver, "dfs", [98,98]);
  maze("prims", [0,0], [100,100], "28", true, bfsSolver, "bfs", [98,98]);
  maze("prims", [0,0], [100,100], "29", true, aStar, null, [98,98]);
  maze("prims", [0,0], [300,300], "30", true, aStar, null, [298,298]);


});
