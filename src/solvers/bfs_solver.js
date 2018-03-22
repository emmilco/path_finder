import Node from '../components/node';
import canvasSearchDraw from '../util/canvas_search_draw';
import canvasFoundDraw from '../util/canvas_found_draw';

function bfsSolver (grid, method) {
  const target = [grid.height - 2, grid.width - 2];
  const root = [0,0];
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const candidates = [];
  let explored = 0;
  candidates.push(grid.array[0][0]);

  const traversalStep = () => {
    if (candidates.length === 0) return;
    let active;
    if (method === "dfs") {
      active = candidates.pop();
    } else {
      active = candidates.shift();
    }
    explored += 1;
    canvasSearchDraw(active, ctx);
    if (active.parent){
      let edge = active.edgeToParent();
      let edgeNode = grid.array[edge[0]][edge[1]];
      canvasSearchDraw(edgeNode, ctx);
    }
    if (active.x === target[0] && active.y === target[1]) {
      markPathTo(active, grid);
      console.log(explored);
      return;
    }
    active.children.forEach((child) => {
      candidates.push(child);
    });
    window.setTimeout(traversalStep, 0);
  };
  traversalStep();
}

function markPathTo(node, grid) {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvasFoundDraw(node, ctx);
  if (node.parent) {
    let edge = node.edgeToParent();
    let edgeNode = grid.array[edge[0]][edge[1]];
    canvasFoundDraw(edgeNode, ctx);
    window.setTimeout(() => markPathTo(node.parent, grid), 0);
  }

}

export  default bfsSolver;
