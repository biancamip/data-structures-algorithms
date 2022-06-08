// 2.3

import { LinkedList, ListNode } from "./classDefinition";

function deleteNode(node: ListNode | null) {
  if (node !== null && node.next !== null) {
    node.data = node.next.data;
    node.next = node.next.next;
  }
}

let rdList = new LinkedList();
rdList.insert(8);
rdList.insert(2);
rdList.insert(16);
rdList.insert(32);
rdList.insert(64);
rdList.insert(32);
rdList.insert(64);
rdList.insert(2);
rdList.insert(8);
rdList.insert(4);
rdList.insert(4);

let i = 0;
let node = rdList.head;
while (i < 5) {
  if (node) {
    node = node.next;
  }
  i++;
}

console.log("rdlist:\n", rdList.toString());
deleteNode(node);
console.log("rdlist:\n", rdList.toString());
