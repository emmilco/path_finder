class aStarSolver {
  constructor(root, target){
    // NOTE: root and target are passed in as nodes.
    this.root = root;
    this.target = target;
    this.examined = {};
    this.cameFrom = {};
    this.candidates = [root.coords];
    this.gScore = {root: 0};
    this.fScore = {};
    this.fScore[root.coords] = this.heuristic(root, target);
  }

  heuristic(current, target){
    // NOTE: returns the Manhattan distance between two nodes
    const dx = Math.abs(current.x - target.x);
    const dy = Math.abs(current.y - target.y);
    return dx + dy;
  }

}
