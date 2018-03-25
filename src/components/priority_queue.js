// NOTE: This is a MIN heap priority queue.

class PriorityQueue {
  constructor(comparator){
    this.length = 0;
    this.heap = [null];
    this.comparator = comparator;
  }

  isEmpty(){
    return this.length === 0;
  }

  push(key){
    this.heap.push(key);
    this.swim(++this.length);
  }

  pop(key){
    const min = this.heap[1];
    this.exchange(1, this.length);
    this.heap.pop();
    this.length--;
    this.sink(1);
    return min;
  }

  less(i, j){
    return this.comparator(this.heap[i], this.heap[j]) < 0;
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
    while(2*k <= this.length){
      // j is k's first child
      let j = 2*k;
      // choose the lesser of k's children
      if (j < this.length && this.less(j+1, j)) j++;
      // if k is not greater than its least child, k is in place
      if (!this.less(j, k)) break;
      // make k the child, j the parent
      this.exchange(k, j);
      // repeat the process with k in its new position
      k = j;
    }
  }
}

export default PriorityQueue;
