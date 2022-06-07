// pg 92

export class ListNode {
  data: number;
  next: ListNode | null = null;

  constructor(d: number) {
    this.data = d;
  }
}

export class LinkedList {
  // if head is null, list is empty
  head: ListNode | null;

  constructor(data?: number) {
    if (!data) {
      this.head = null;
    } else {
      this.head = new ListNode(data);
    }
  }

  insert(data: number): void {
    if (this.head === null) {
      this.head = new ListNode(data);
      return;
    }

    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }

    curr.next = new ListNode(data);
  }

  remove(data: number): void {
    if (this.head === null) return;

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let curr = this.head;
    while (curr.next !== null) {
      if (curr.next.data === data) {
        curr.next = curr.next.next;
        return;
      }

      curr = curr.next;
    }
  }

  isEmpty() {
    return this.head === null;
  }

  // generate string from linked list in a friendlier way for better visualization
  toString(): string {
    let nodesData: number[] = [];

    let currNode: ListNode | null = this.head;
    while (currNode !== null) {
      nodesData.push(currNode.data);
      currNode = currNode.next;
    }

    return nodesData.join(" -> ");
  }
}

// let myList: LinkedList = new LinkedList(8);
// myList.insert(16);
// myList.insert(32);
// myList.insert(64);
// myList.insert(2);
// myList.insert(4);

// myList.remove(32);
// myList.insert(32);

// console.log("myList:", myList.toString());
