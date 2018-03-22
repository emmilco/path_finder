import Node from '../components/node';
import canvasDraw from '../util/canvas_draw';
import shuffleArray from '../util/shuffle_array';

function bfsMazeGenerator (root, grid) {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const candidates = [];
  candidates.push(new Node(root, null));

  const traversalStep = () => {
    if (candidates.length === 0) return;
    const active = candidates.shift();
    grid.fillSquare(active);
    canvasDraw(active, ctx);
    const children = active.neighbors.filter((neighbor) => {
      return (grid.isOpenAt(neighbor[0], neighbor[1]) &&
        !grid.array[neighbor[0]][neighbor[1]].filled);
    });
    if (children.length > 2) {
      children.splice(Math.floor(Math.random()*children.length), 1);
    }
    children.forEach((child) => {
      const node = grid.array[child[0]][child[1]];
      candidates.push(node);
      node.parent = active;
      node.filled = true;
      active.children.push(node);
    });
    shuffleArray(candidates);
    // window.setTimeout(traversalStep, 0);
    traversalStep();
  };

  traversalStep();
}

export  default bfsMazeGenerator;
