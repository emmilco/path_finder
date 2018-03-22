
class Node {
  constructor(coords, parent) {
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
  }

  distance(){
    if (this.parent){
      return this.parent.distance() + 1;
    } else {
      return 0;
    }
  }

  edgeToParent(){
    const mean = (a,b) => (a + b) / 2;
    return [mean(this.parent.x, this.x), mean(this.parent.y, this.y)];
  }


}

export default Node;
