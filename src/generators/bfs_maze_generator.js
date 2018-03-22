import Node from '../components/node';
import canvasDraw from '../util/canvas_draw';

function bfsMazeGenerator (root, grid) {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const candidates = [];
  candidates.push(new Node(root, null));

  const traversalStep = () => {
    if (candidates.length === 0) return;
    const active = candidates.splice(Math.floor(Math.random()*candidates.length), 1)[0];
    if (active.type) { window.setTimeout(traversalStep, 0); }
    if (grid.intersectsPath(active.x, active.y)) {
      active.type = "wall";
    } else {
      active.type = "path";
      const children = active.neighbors.filter((neighbor) => {
        return grid.isOpenAt(neighbor[0], neighbor[1]);
      });
      children.forEach((child) => {
        const node = grid.array[child[0]][child[1]];
        candidates.push(node);
        node.parent = active;
        node.filled = true;
        active.children.push(node);
      });
    }

    grid.fillSquare(active);
    canvasDraw(active, ctx);
    // window.setTimeout(traversalStep, 0);
    traversalStep();
  };

  traversalStep();
}

export  default bfsMazeGenerator;
