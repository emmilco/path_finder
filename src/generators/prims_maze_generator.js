import Node from '../components/node';
import canvasDraw from '../util/canvas_draw';

function primsMazeGenerator (root, grid) {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const candidates = [];
  candidates.push(grid.array[0][0]);

  const traversalStep = () => {
    if (candidates.length === 0) return;
    candidates.sort((a,b) => {
      return b.value - a.value;
    });
    const active = candidates.pop();
    active.type = "path";
    if (active.parent){
      let edge = active.edgeToParent();
      let edgeNode = grid.array[edge[0]][edge[1]];
      edgeNode.type = 'path';
      edgeNode.parent = active.parent;
      canvasDraw(edgeNode, ctx);
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
    canvasDraw(active, ctx);
    window.setTimeout(traversalStep, 0);
    // traversalStep();
  };

  traversalStep();
}

export  default primsMazeGenerator;
