import Grid from './components/grid';
import Node from './components/node';
import randomTraversal from './generators/random_traversal';

document.addEventListener("DOMContentLoaded", () => {
  window.grid = new Grid(40,40);
  randomTraversal([0,0], window.grid);
});
