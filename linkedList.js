function LinkedList() {
  let length = 0;
  let head = null;

  let Node = function (elem) {
    this.elem = elem;
    this.next = null;
  };

  this.size = () => {
    return length;
  };

  this.head = () => {
    return head;
  };

  this.add = (elem) => {
    let node = new Node(elem);

    if (head === null) {
      head = node;
    } else {
      let curNode = head;

      while (curNode.next) {
        curNode = curNode.next;
      }
      curNode.next = node;
    }
    length++;
  };

  this.remove = (elem) => {
    let curNode = head;
    let prevNode;

    if (curNode.elem === elem) {
      head = curNode.next;
    } else {
      while (curNode.elem !== elem) {
        prevNode = curNode;
        curNode = curNode.next;
      }

      prevNode.next = curNode.next;
    }

    length--;
  };

  this.emtpy = () => {
    return length === 0;
  };

  this.indexOf = (elem) => {
    let curNode = head;
    let index = -1;

    while (curNode) {
      index++;
      if (curNode.elem === elem) {
        return index;
      }
      curNode = curNode.next;
    }

    return -1;
  };

  this.elemenAt = (index) => {
    let curNode = head;
    let count = 0;

    if (index >= length) return null;
    while (count < index) {
      curNode = curNode.next;
      count++;
    }

    return curNode.elem;
  };

  this.addAt = (elem, index) => {
    let node = new Node(elem);
    let curNode = head;
    let count = 0;
    let prevNode;

    if (index < 0 || index >= length) return false;
    if (index === 0) {
      node.next = curNode;
      head = node;
    } else {
      while (count < index) {
        prevNode = curNode;
        curNode = curNode.next;
        count++;
      }
      prevNode.next = node;
      node.next = curNode;
    }
    length++;
    return true;
  };

  this.removeAt = (index) => {
    let curNode = head;
    let prevNode;
    let count = 0;

    if (index < 0 || index >= length) return null;
    if (index === 0) {
      head = curNode.next;
    } else {
      while (count < index) {
        prevNode = curNode;
        curNode = curNode.next;
        count++;
      }
      prevNode.next = curNode.next;
    }
    length--;
    return curNode.elem;
  };

  this.print = () => {
    let curNode = head;
    let str = "";
    while (curNode) {
      str += curNode.elem + " -> ";
      curNode = curNode.next;
    }
    console.log(str + "null");
  };
}

let lList = new LinkedList();

lList.add("Cat");
lList.add("Dog");
lList.add("Fish");
lList.add("Tiger");
console.log(lList.size()); //Output: 4
lList.add("Delphin");
console.log(lList.size()); //Output: 5
console.log(lList.removeAt(2)); //Output: Fish
console.log(lList.size()); //Output: 4
console.log(lList.elemenAt(4)); //Output: null
console.log(lList.elemenAt(2)); //Output: Tiger
console.log(lList.addAt("Shark", 0)); //Output: true
console.log(lList.elemenAt(0)); //Output: Tiger
lList.print(); //Output: Shark -> Cat -> Dog -> Tiger -> Delphin -> null
