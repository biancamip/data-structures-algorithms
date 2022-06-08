import { Stack, StackNode } from "./stack";

class StackMin {
  // if top is null, list is empty
  top: StackNode | null;
  minVal: Stack;

  constructor(val?: number) {
    if (val !== undefined) {
      let node: StackNode = new StackNode(val);
      node.next = null;

      this.top = node;
      this.minVal = new Stack(val);
    } else {
      this.top = null;
      this.minVal = new Stack();
    }
  }

  peek(): number {
    if (this.top === null) throw "empty stack";
    return this.top.val;
  }

  min(): number {
    return this.minVal.peek();
  }

  //remove this
  printMin() {
    return this.minVal.toString();
  }

  push(val: number): void {
    let node = new StackNode(val);
    node.next = this.top;
    this.top = node;

    let currMin = this.min();
    if (val <= currMin) this.minVal.push(val);
  }

  pop(): number {
    if (this.top === null) throw "empty stack";
    let val = this.top.val;
    this.top = this.top.next;

    let currMin = this.min();
    if (currMin === val) this.minVal.pop();

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

// let stkMin: StackMin = new StackMin(8);
// stkMin.push(16);
// stkMin.push(32);
// stkMin.push(32);
// stkMin.pop();
// stkMin.push(64);
// stkMin.push(4);
// stkMin.push(-2);
// stkMin.push(4);
// console.log(`[stk] ${stkMin.toString()}\n [min] ${stkMin.min()} `);

// stkMin.push(-1);
// stkMin.push(80);
// stkMin.push(-2);
// stkMin.pop();
// console.log(`[stk] ${stkMin.toString()}\n [min] ${stkMin.min()} `);

// console.log("print min", stkMin.printMin());
