// pg 92

class ListNode {
  data: number;
  next: ListNode | null = null;

  constructor(d: number) {
    this.data = d;
  }
}

class LinkedList {
  head: ListNode;

  constructor(data: number) {
    this.head = new ListNode(data);
  }

  insert(d: number) {
    let currNode = this.head;

    while (currNode.next !== null) {
      currNode = currNode.next;
    }

    currNode.next = new ListNode(d);
  }

  // generate string from linked list in a friendlier way for better visualization purposes
  toString(): string {
    let nodesData: number[] = [];

    let currNode: ListNode | null = this.head;
    do {
      nodesData.push(currNode.data);
      currNode = currNode.next;
    } while (currNode !== null);

    return nodesData.join(" -> ");
  }
}

let myList: LinkedList = new LinkedList(8);
myList.insert(16);
myList.insert(32);
myList.insert(64);
myList.insert(2);
myList.insert(4);

console.log("myList:", myList.toString());
