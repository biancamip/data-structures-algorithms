// IQ 2.1

import { LinkedList } from "./classDefinition";

function removeDups(list: LinkedList): LinkedList {
  let hashMap = new Map<number, any>();

  let currNode = rdList.head;
  let prevNode = rdList.head;

  while (currNode !== null) {
    let onHash = hashMap.get(currNode.data);

    if (onHash === undefined) {
      hashMap.set(currNode.data, true);
      prevNode = currNode;
      currNode = currNode.next;
    } else {
      if (prevNode !== null) {
        prevNode.next = currNode.next;
        currNode = currNode.next;
      }
    }
  }

  return list;
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

console.log("rdlist:\n", rdList.toString());
console.log("dups removed:\n", removeDups(rdList).toString());
