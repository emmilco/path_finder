import PriorityQueue from '../components/priority_queue';
import canvasSearchDraw from '../util/canvas_search_draw';
import canvasFoundDraw from '../util/canvas_found_draw';

class aStarSolver {
  constructor(rootCoords, grid, ctx, target, method){
    this.interval = null;
    this.method = method;
    this.ctx = ctx;
    this.rootCoords = rootCoords;
    this.rootNode = grid.array[rootCoords[0]][rootCoords[1]];
    this.targetCoords = target;
    this.examined = {};
    this.cameFrom = {};
    this.candidates = new PriorityQueue((a,b) => {
      if (this.fScore[a.coords] < this.fScore[b.coords]) return -1;
    });
    this.candidates.push(this.rootNode);
    this.gScore = {[this.rootCoords]: 0};
    this.fScore = {};
    this.fScore[this.rootCoords] = this.heuristic(this.rootNode, this.targetCoords);
    this.grid = grid;
    this.targetNode = grid.array[target[0]][target[1]];
    this.explored = 0;
    this.result = document.createElement("p");
    this.result.className = "caption";
    this.ctx.canvas.parentNode.appendChild(this.result);
    ctx.canvas.addEventListener("click", () => window.clearInterval(this.interval));
  }

  heuristic(current){
    if (this.method === "dijkstra") return 0;
    const dx = Math.abs(current[0] - this.targetCoords[0]);
    const dy = Math.abs(current[1] - this.targetCoords[1]);
    // return dx + dy;
    return Math.sqrt(dx*dx + dy*dy);

  }

  search() {
    if (this.candidates.isEmpty()) return -1;
    const active = this.candidates.pop();
    this.explored++;
    const ctx = this.ctx;
    if (active.parent){
      let edge = active.edgeToParent();
      let edgeNode = this.grid.array[edge[0]][edge[1]];
      canvasSearchDraw(edgeNode, ctx);
    }
    canvasSearchDraw(active, ctx);

    if (active.coords.toString() === this.targetCoords.toString()) {
      return this.reconstructPath(active, ctx);
    }
    this.result.textContent = `Squares Explored / Path Length = ${(this.explored / this.targetNode.distance()).toFixed(2)}`;

    this.examined[active.coords] = true;
    active.children.forEach((child) => {
      if(!this.examined[child.coords]){
        this.candidates.push(child);
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
    this.interval = window.setTimeout(() => this.search(), 0);
  }

  reconstructPath(node, ctx){
    canvasFoundDraw(node, ctx);
    if (node.parent) {
      let edge = node.edgeToParent();
      let edgeNode = this.grid.array[edge[0]][edge[1]];
      canvasFoundDraw(edgeNode, ctx);
      window.setTimeout(() => this.reconstructPath(node.parent, ctx), 0);
    }
  }
}

const aStar = (root, grid, ctx, target, method) => {
  new aStarSolver(root, grid, ctx, target, method).search();
};


export default aStar;
