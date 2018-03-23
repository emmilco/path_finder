class priorityQueue {
  constructor(comparator){
    this.size = 0;
    this.heap = [null];
    this.comparator = comparator;
  }

  isEmpty(){
    return this.size === 0;
  }

  insert(key){
    this.heap.push(key);
    this.swim(++this.size);
  }

  removeMax(key){
    const max = this.heap[1];
    this.exchange(1, this.size);
    this.heap.pop();
    this.size--;
    this.sink(1);
    return max;
  }

  less(i, j){
    return this.comparator(this.heap[i], this.heap[j]) === -1;
  }

  exchange(i, j){
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  swim(k){
    while( k > 1 && this.less(Math.floor(k/2), k)){
      this.exchange(Math.floor(k/2), k);
      k = Math.floor(k/2);
    }
  }

  sink(k){
    while(2*k <= this.size){
      // j is k's first child
      const j = 2*k;
      // choose the greater of k's children
      if (j < this.size && this.less(j, j+1)) j++;
      // if k is not less than its greatest child, break
      if (!this.less(k, j)) break;
      // make k the child, j the parent
      this.exchange(k, j);
      // repeat the process with k in its new position
      k = j;
    }
  }
}
