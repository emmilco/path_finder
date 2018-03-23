import PriorityQueue from '../components/priority_queue';
import canvasSearchDraw from '../util/canvas_search_draw';
import canvasFoundDraw from '../util/canvas_found_draw';

class aStarSolver {
  constructor(rootCoords, grid){
    this.rootCoords = rootCoords;
    this.rootNode = grid.array[rootCoords[0]][rootCoords[1]];
    this.targetCoords = [grid.height - 2, grid.width - 2];
    this.examined = {};
    this.cameFrom = {};
    this.candidates = new PriorityQueue((a,b) => {
      if (this.fScore[a.coords] < this.fScore[b.coords]) return -1;
    });
    this.candidates.insert(this.rootNode);
    this.gScore = {[this.rootCoords]: 0};
    this.fScore = {};
    this.fScore[this.rootCoords] = this.heuristic(this.rootNode, this.targetCoords);
    this.grid = grid;
    this.explored = 0;
  }

  heuristic(current){
    // NOTE: returns the Manhattan distance between two nodes
    const dx = Math.abs(current[0] - this.targetCoords[0]);
    const dy = Math.abs(current[1] - this.targetCoords[1]);
    return dx + dy;
  }

  search() {
    if (this.candidates.isEmpty()) return -1;
    const active = this.candidates.removeMin();
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    if (active.parent){
      let edge = active.edgeToParent();
      let edgeNode = this.grid.array[edge[0]][edge[1]];
      canvasSearchDraw(edgeNode, ctx);
    }
    canvasSearchDraw(active, ctx);

    if (active.coords.toString() === this.targetCoords.toString()) {
      return this.reconstructPath(active);
    }
    this.examined[active.coords] = true;
    active.children.forEach((child) => {
      if(!this.examined[child.coords]){
        this.candidates.insert(child);
        this.gScore[child.coords] = Infinity;
      } else {
        return;
      }
      const tentativeGScore = this.gScore[active.coords] + 1;
      if (tentativeGScore >= this.gScore){
        return;
      }
      this.cameFrom[child.coords] = active.coords;
      this.gScore[child.coords] = tentativeGScore;
      this.fScore[child.coords] = this.gScore[child.coords] +
        this.heuristic(child.coords);
    });
    window.setTimeout(() => this.search(), 0);
  }

  reconstructPath(node){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    canvasFoundDraw(node, ctx);
    if (node.parent) {
      let edge = node.edgeToParent();
      let edgeNode = this.grid.array[edge[0]][edge[1]];
      canvasFoundDraw(edgeNode, ctx);
      window.setTimeout(() => this.reconstructPath(node.parent, this.grid), 0);
    }
  }
}

export default aStarSolver;
