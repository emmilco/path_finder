// NOTE: This is a MIN heap priority queue.

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
    const min = this.heap[1];
    this.exchange(1, this.size);
    this.heap.pop();
    this.size--;
    this.sink(1);
    return min;
  }

  less(i, j){
    return this.comparator(this.heap[i], this.heap[j]) === -1;
  }

  exchange(i, j){
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  swim(k){
    while( k > 1 && this.less(k, Math.floor(k/2))){
      this.exchange(Math.floor(k/2), k);
      k = Math.floor(k/2);
    }
  }

  sink(k){
    while(2*k <= this.size){
      // j is k's first child
      const j = 2*k;
      // choose the lesser of k's children
      if (j < this.size && this.less(j+1, j)) j++;
      // if k is not greater than its least child, break
      if (!this.less(j, k)) break;
      // make k the child, j the parent
      this.exchange(k, j);
      // repeat the process with k in its new position
      k = j;
    }
  }
}
