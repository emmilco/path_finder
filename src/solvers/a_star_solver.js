import PriorityQueue from '../components/priority_queue';

class aStarSolver {
  constructor(rootNode, targetCoords, grid){
    this.rootCoords = [rootNode.x, rootNode.y];
    this.targetCoords = targetCoords;
    this.examined = {};
    this.cameFrom = {};
    this.candidates = new PriorityQueue((a,b) => {
      if (this.fScore[a.coords] < this.fScore[b.coords]) return -1;
    });
    this.candidates.insert(rootNode);
    this.gScore = {[this.rootCoords]: 0};
    this.fScore = {};
    this.fScore[this.rootCoords] = this.heuristic(rootNode, targetCoords);
  }

  heuristic(current, target){
    // NOTE: returns the Manhattan distance between two nodes
    const dx = Math.abs(current.x - target[0]);
    const dy = Math.abs(current.y - target[1]);
    return dx + dy;
  }

  search() {
    while(!this.candidates.isEmpty()){
      const active = this.candidates.removeMin();
      if (active.coords.toString() === this.targetCoords.toString()) {
        return this.reconstructPath(active);
      }
      this.examined[active.coords] = true;
      active.children.forEach((child) => {
        if(!this.examined[child.coords]){
          this.candidates.insert(child);
        } else {
          return;
        }

      });
    }
  }



}
