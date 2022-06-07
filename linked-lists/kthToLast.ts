// IQ 2.2

import { LinkedList } from ".";

function kthToLast(list: LinkedList, k: number): number[] {
  let index = 0;

  let curr = list.head;
  while (index < k && curr !== null) {
    curr = curr.next;
    index++;
    if (curr === null) throw "k out of list bounds";
  }

  let returnArray: number[] = [];
  while (curr !== null) {
    returnArray.push(curr.data);
    curr = curr.next;
  }

  return returnArray;
}

let kList: LinkedList = new LinkedList();
kList.insert(8); // 0
kList.insert(16); // 1
kList.insert(32); // 2
kList.insert(64); // 3
kList.insert(2); // 4
kList.insert(4); // 5

console.log("kList:", kList.toString());
console.log("kth to last from ", 3, kthToLast(kList, 3));
