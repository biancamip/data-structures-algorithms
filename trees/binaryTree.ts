class BinTreeNode {
  value: number;
  left: BinTreeNode | null = null;
  right: BinTreeNode | null = null;

  constructor(name: number) {
    this.value = name;
  }
}

function insert(root: BinTreeNode, val: number) {
  if (root.left === null) {
    root.left = new BinTreeNode(val);
  } else if (root.right === null) {
    root.right = new BinTreeNode(val);
  } else {
    // both l and r are not null, try to insert on left
    insert(root.left, val);
  }
}

function main(): void {
  let root = new BinTreeNode(8);
  insert(root, 6);
  insert(root, 4);
  return;
}
