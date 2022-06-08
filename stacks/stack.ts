// pg 96

export class StackNode {
  val: number;
  next: StackNode | null = null;

  constructor(val: number) {
    this.val = val;
  }
}

export class Stack {
  // if top is null, list is empty
  top: StackNode | null;

  constructor(val?: number) {
    if (val !== undefined) {
      let node: StackNode = new StackNode(val);
      node.next = null;
      this.top = node;
    } else {
      this.top = null;
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
  }

  pop(): number {
    if (this.top === null) throw "empty stack";
    let val = this.top.val;
    this.top = this.top.next;
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

// let stk: Stack = new Stack(8);
// stk.push(16);
// stk.push(32);
// stk.push(32);
// stk.pop();
// stk.push(64);
// stk.push(2);
// stk.push(4);

// console.log("stk:", stk.toString());
