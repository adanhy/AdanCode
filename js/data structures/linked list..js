class Node {
  constructor(data, next = null) {
    (this.data = data), (this.next = next);
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  AddTail(element) {
    let newNode = new Node(element);

    if (!this.head) {
      this.head = newNode;
    }
    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
    }
    tail.next = newNode;
  }
}

LinkedList.prototype.insertAtBeginning = function (data) {
  let newNode = new Node(data);
  newNode.next = this.head;
  this.head = newNode;
  return this.head;
};

LinkedList.prototype.insertAtEnd = function (data) {
  let newNode = new Node(data);
  if (!this.head) {
    this.head = newNode;
    return this.head;
  }
  let tail = this.head;
  while (tail.next !== null) {
    tail = tail.next;
  }
  tail.next = newNode;
  return this.head;
};

LinkedList.prototype.deleteFirstNode = function () {
  if (!this.head) {
    return;
  }
  this.head = this.head.next;
  return this.head;
};

LinkedList.prototype.deleteLastNode = function () {
  if (!this.head) {
    return null;
  }
  if (!this.head.next) {
    this.head = null;
    return;
  }
  let previous = this.head;
  let tail = this.head.next;

  while (tail.next !== null) {
    previous = tail;
    tail = tail.next;
  }

  previous.next = null;
  return this.head;
};
