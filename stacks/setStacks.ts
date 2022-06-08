// 3.3

import { StackNode } from "./classDefinition";

export class ThresholdStack {
  // if top is null, list is empty
  top: StackNode | null;
  next: ThresholdStack | null;
  size: number;

  constructor(val?: number, next?: ThresholdStack | null) {
    if (val !== undefined) {
      let node: StackNode = new StackNode(val);
      node.next = null;
      this.top = node;
      this.next = next !== undefined ? next : null;
      this.size = 1;
    } else {
      this.top = null;
      this.next = null;
      this.size = 0;
    }
  }

  peek(): number {
    if (this.top === null) throw "empty stack";
    return this.top.val;
  }

  push(val: number): void {
    let node = new StackNode(val);
    node.next = this.top;
    this.top = node;
    this.size++;
  }

  pop(): number {
    if (this.top === null) throw "empty stack";
    let val = this.top.val;
    this.top = this.top.next;
    this.size--;
    return val;
  }

  isEmpty(): boolean {
    return this.top === null;
  }

  // generate string from stack in a friendlier way for better visualization
  toString(): string {
    let nodeVals: number[] = [];

    let curr = this.top;
    while (curr !== null) {
      nodeVals.push(curr.val);
      curr = curr.next;
    }
    return "top: " + nodeVals.join(", ");
  }
}

class SetOfStacks {
  threshold: number;
  top: ThresholdStack;

  constructor(threshold: number, val?: number) {
    this.threshold = threshold;
    this.top = new ThresholdStack(val);
  }

  isEmpty(): boolean {
    return this.top.isEmpty() && this.top.next === null;
  }

  peek(): number {
    if (this.top.isEmpty() && this.top.next !== null) {
      return this.top.next.peek();
    } else if (!this.top.isEmpty()) {
      return this.top.peek();
    } else {
      throw "empty stack";
    }
  }

  push(val: number): void {
    if (this.top.size === this.threshold) {
      let next = new ThresholdStack(val, this.top);
      this.top = next;
    } else {
      this.top.push(val);
    }
  }

  pop(): number {
    if (this.top.isEmpty() && this.top.next !== null) {
      this.top = this.top.next;
      return this.top.pop();
    } else if (!this.top.isEmpty()) {
      return this.top.pop();
    } else throw "empty stack";
  }

  // generate string from a set of stacks in a friendlier way for better visualization
  toString(): string {
    let stacks: ThresholdStack[] = [];
    let curr: ThresholdStack | null = this.top;
    while (curr !== null) {
      stacks.push(curr);
      curr = curr.next;
    }

    return stacks.join(" -> ");
  }
}

let setStks: SetOfStacks = new SetOfStacks(4, 8);
setStks.push(16);
setStks.push(32);
setStks.push(32);
setStks.pop();
setStks.push(64);

// ^
setStks.push(4);
setStks.push(-2);
setStks.push(4);
setStks.push(-1);

// ^
setStks.push(80);
setStks.push(-2);
setStks.push(3);
setStks.push(29);

setStks.pop();
setStks.pop();
setStks.pop();
setStks.pop();
setStks.pop();

console.log("setStks", setStks.toString());
