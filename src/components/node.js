
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
    this.parent = parent;
    this.children = [];
    this.filled = false;
  }

  distance(){
    if (this.parent){
      return this.parent.distance() + 1;
    } else {
      return 0;
    }
  }


}

export default Node;
