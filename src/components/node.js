
class Node {
  constructor(coords, parent) {
    this.coords = coords;
    this.x = coords[0];
    this.y = coords[1];
    this.neighbors = [
      [this.x+1,this.y],
      [this.x-1,this.y],
      [this.x,this.y+1],
      [this.x,this.y-1]
    ];
    this.candNeighbors = [
      [this.x+2,this.y],
      [this.x-2,this.y],
      [this.x,this.y+2],
      [this.x,this.y-2]
    ];
    this.parent = parent;
    this.children = [];
    this.type = null;
    this.value = Math.random();
  }

  distance(){
    if (this.depth) return this.depth;
    if (this.parent){
      this.depth = this.parent.distance() + 1;
    } else {
      this.depth = 0;
    }
    return this.depth;
  }

  edgeToParent(){
    const mean = (a,b) => (a + b) / 2;
    return [mean(this.parent.x, this.x), mean(this.parent.y, this.y)];
  }
}

export default Node;
