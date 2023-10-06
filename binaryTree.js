// Implementation of a binary tree

class Node {
  item;
  left;
  right;

  constructor(item) {
    this.item = item;
  }
}

class BinaryTree {
  root;

  add(item) {
    let x = new Node(item);

    // empty tree
    if(this.root===undefined) {
      this.root = x;
      return;
    }

    let i = this.root;
    let temp;
    while(i!=undefined) {
      temp = i;
      if(item<i.item) {
        i = i.left;
      }
      else {
        i = i.right;
      }
    }
    if(item<temp.item) {
      temp.left = x;
    }
    else {
      temp.right = x;
    }
  }

  print(n) { // recursion
    if(n===undefined) {
      return;
    }

    console.log(n.item);
    if(n.left!=undefined) {
      print(n.left);
    }

    if(n.right!=undefined) {
      print(n.right);
    }
  }
}

// Tests of the binary tree's functionality
let bt = new BinaryTree();
bt.add(10)
bt.add(5)
bt.print(bt.root)
