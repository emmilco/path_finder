import Node from '../components/node';
import Grid from '../components/grid';
import canvasDraw from '../util/canvas_draw';
import canvasSearchDraw from '../util/canvas_search_draw';

const mazeGenerator = (type, root, gridDims, canvas, color, solver, method, target) => {
  canvas.addEventListener("click", () => window.clearInterval(interval));
  const grid = new Grid(...gridDims);
  const drawMethod = (color ? canvasDraw : canvasSearchDraw);
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const candidates = [];
  grid.root = root;
  candidates.push(grid.array[root[0]][root[1]]);

  const traversalStep = () => {
    if (candidates.length === 0) {
      window.clearInterval(interval);
      if (solver) return solver(root, grid, ctx, target, method);
      return;
    }

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
    case "prims":
      candidates.sort((a,b) => { return b.value - a.value; });
      active = candidates.pop();
      break;
    case "bfsNonMaze":
      active = candidates.shift();
      break;
    case "dfsNonMaze":
      active = candidates.pop();
      break;
    }

    active.type = "path";
    if (active.parent){
      let edge = active.edgeToParent();
      let edgeNode = grid.array[edge[0]][edge[1]];
      edgeNode.type = 'path';
      edgeNode.parent = active.parent;
      drawMethod(edgeNode, ctx);
    }

    const children = active.candNeighbors.filter((neighbor) => {
      return grid.isOpenAt(neighbor[0], neighbor[1]);
    });

    children.forEach((child) => {
      const node = grid.array[child[0]][child[1]];
      candidates.push(node);
      node.parent = active;
      active.children.push(node);
    });

    drawMethod(active, ctx);
  };

  const interval = window.setInterval(traversalStep, 0);
};

const maze = (type, root, gridDims, canvasId, color, solver, method, target) => {
  const canvas = document.getElementById(canvasId);
  canvas.addEventListener("click", () => {
    mazeGenerator(type, root, gridDims, canvas, color, solver, method, target);
  });
};

export default maze;