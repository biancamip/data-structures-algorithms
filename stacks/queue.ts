class QueueNode {
  val: number;
  next: QueueNode | null = null;

  constructor(val: number) {
    this.val = val;
  }
}

class Queue {
  first: QueueNode | null = null;
  last: QueueNode | null = null;

  constructor(val?: number) {
    if (val !== undefined) {
      this.first = new QueueNode(val);
    }
  }

  isEmpty() {
    return this.first === null && this.last === null;
  }

  enqueue(val: number): void {
    let node = new QueueNode(val);

    if (this.last === null && this.first !== null) {
      this.last = node;
      this.first.next = this.last;
    } else if (this.last !== null) {
      this.last.next = node;
      this.last = node;
    } else {
      this.last = node;
      this.first = node;
    }
  }

  dequeue(): number {
    if (this.first === null) throw "empty queue";
    let val = this.first.val;
    this.first = this.first.next;
    return val;
  }

  // generate string from queue in a friendlier way for better visualization
  toString(): string {
    let nodeVals: number[] = [];

    let curr = this.first;
    while (curr !== null) {
      nodeVals.push(curr.val);
      curr = curr.next;
    }
    return "start: " + nodeVals.join(", ");
  }
}

let que: Queue = new Queue(8);
que.enqueue(16);
que.enqueue(32);
que.enqueue(64);
que.enqueue(2);
que.enqueue(4);
que.dequeue();
que.dequeue();
que.enqueue(80);
que.dequeue();

console.log("queue:", que.toString());
