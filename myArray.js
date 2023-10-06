// Custom implementation of linked lists to replicate arrays/lists

let temp = 0;

class Node {
  item = 0;
  next;

  constructor(item) {
    this.item = item;
  }
}

class MyArray {
  start;
  end;

  push(item) {
    let n = new Node(item);
    if (this.end == undefined) {
      this.start = n;
      this.end = n;
    }
    else {
      this.end.next = n;
      this.end = n;
    }
  }

  pushSort(item) {
    // no item
    if(this.start===undefined) {
      let x = new Node(item);
      this.start = x;
      this.end = x;
      return;
    }

    // insert at first item
    if(item<=this.start.item) { 
      let x = new Node(item);
      x.next = this.start;
      this.start = x;
      return;
    }

    // check if end
    if(item>=this.end.item) {
      let x = new Node(item);
      this.end.next = x;
      this.end = x;
      return;
    }
    
    let i = this.start;
    let temp;
    while(i.item<item && i!=undefined) {
      temp = i;
      i = i.next;
    }
    let x = new Node(item);
    temp.next = x;
    x.next = i;
  }


  pop() {
    // check for empty list
    if(this.start===undefined) {
      return 0;
    }

    // only 1 item
    if(this.start===this.end) {
      let temp = this.start.item;
      this.start = undefined;
      this.end = undefined;
      return temp;
    }

    let temp;
    let i = this.start;
    while(i!==this.end) {
      temp = i;
      i = i.next;
    }
    this.end = temp;
    this.end.next = undefined;
    return i.item;
  }

  shift() {
    // check for empty list
    if(this.start===undefined) {
      return 0;
    }

    // only 1 item
    let temp = this.start.item;
    if(this.start===this.end) {
      this.start = undefined;
      this.end = undefined;
      return temp;
    }
    this.start = this.start.next;
    return temp;
  }

  delete(n) {
    // check for empty list
    if(this.start===undefined) {
      return false;
    }

    // only 1 item
    if(this.start===this.end) {
      if(this.start.item===n){
        this.start=undefined;
        this.end=undefined;
        return true;
      }
      else {
        return false;
      }
    }

    // first item
    if(this.start.item===n){
      this.start = this.start.next;
      return true;
    }

    let temp;
    let i = this.start;
    while(i!==undefined && i.item !== n){
      temp = i;
      i = i.next;
    }
    if(i!=undefined){
      temp.next = i.next;
      if(i===this.end){
        this.end = temp;
      }
      return true;
    }
    else {
      return false;
    }
  }

  print() {
    let i = this.start;
    while (i != undefined) {
      console.log(i.item);
      i = i.next;
    }
  }
}

// Multiple tests of the functionality
let x = new MyArray();
x.pushSort(5);
x.pushSort(2);
x.pushSort(3);
x.pushSort(-100);
console.log(" ===============")
x.print();
x.delete(5);
console.log(" ===============")
x.print()
x.delete(1);
console.log("================")
x.print();
