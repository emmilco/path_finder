import Node from '../components/node';
import canvasSearchDraw from '../util/canvas_search_draw';
import canvasFoundDraw from '../util/canvas_found_draw';

function bfsSolver (rootCoords, grid, ctx, target, method) {
  const root = rootCoords;
  const targetNode = grid.array[target[0]][target[1]];
  const candidates = [];
  let explored = 0;
  ctx.canvas.addEventListener("click", () => window.clearInterval(this.interval));
  candidates.push(grid.array[root[0]][root[1]]);

  const traversalStep = () => {
    if (candidates.length === 0) return;
    let active;
    if (method === "dfs") {
      active = candidates.pop();
    } else {
      active = candidates.shift();
    }
    explored++;
    canvasSearchDraw(active, ctx);
    if (active.parent){
      let edge = active.edgeToParent();
      let edgeNode = grid.array[edge[0]][edge[1]];
      canvasSearchDraw(edgeNode, ctx);
    }
    if (active.x === target[0] && active.y === target[1]) {
      console.log(`${method} ${explored / targetNode.distance()}`);
      const result = document.createElement("p");
      result.className = "caption";
      const text = document.createTextNode(`Squares explored / path-length = ${(explored / targetNode.distance()).toFixed(2)}`);
      result.appendChild(text);
      ctx.canvas.parentNode.appendChild(result);
      markPathTo(active, grid, ctx);
      return;
    }
    active.children.forEach((child) => {
      candidates.push(child);
    });
    const interval = window.setTimeout(traversalStep, 0);
  };
  traversalStep();
}

function markPathTo(node, grid, ctx) {
  canvasFoundDraw(node, ctx);
  if (node.parent) {
    let edge = node.edgeToParent();
    let edgeNode = grid.array[edge[0]][edge[1]];
    canvasFoundDraw(edgeNode, ctx);
    window.setTimeout(() => markPathTo(node.parent, grid, ctx), 0);
  }

}

export  default bfsSolver;
