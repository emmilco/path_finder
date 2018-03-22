import Node from './node';

class Grid {
  constructor(width, height){
    this.array = [...Array(height).keys()].map(i => Array(width));
    this.width = width;
    this.height = height;
    this.populateArray();
  }

  populateArray(){
    for (var i = 0; i < this.width; i++) {
      for (var j = 0; j < this.height; j++) {
        this.array[i][j] = new Node([i, j], null);
      }
    }
  }

  contains(x,y){
    return ((x >= 0 && x < this.width) && (y >= 0 && y < this.height));
  }

  isOpenAt(x,y){
    if (x + y === 0) return false;
    return this.contains(x,y) && !this.array[x][y].parent;
  }

  fillSquare(node){
    this.array[node.x][node.y] = node;
  }

  nodes(){
    return [].concat.apply([], this.array);
  }
}

export default Grid;
