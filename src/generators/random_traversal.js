import Node from '../components/node';
import canvasDraw from '../util/canvas_draw';

function randomTraversal (root, grid) {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const candidates = [];
  candidates.push(new Node(root, null));

  const traversalStep = () => {
    if (candidates.length === 0) return;
    const active = candidates.shift();
    grid.fillSquare(active);
    canvasDraw(active, ctx);
    active.neighbors.forEach((child) => {
      if (grid.isOpenAt(child[0], child[1])) {
        const node = grid.array[child[0]][child[1]];
        candidates.push(node);
        node.parent = active;
        active.children.push(node);
      }
    });
    window.setTimeout(traversalStep, 1);
  };

  traversalStep();
}

export  default randomTraversal;
