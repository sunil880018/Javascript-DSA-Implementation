class Node {
  constructor(val) {
    (this.val = val), (this.next = null);
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  insertAtlast(val) {
    if (!this.head) {
      this.head = new Node(val);
    } else {
      let traverseList = this.head;
      while (traverseList.next !== null) {
        traverseList = traverseList.next;
      }
      traverseList.next = new Node(val);
    }
  }
  insertAtBegin(val) {
    if (!this.head) {
      this.head = new Node(val);
    } else {
      let createdNewNode = new Node(val);
      createdNewNode.next = this.head;
      this.head = createdNewNode;
    }
  }
  deleteAtBegin() {
    if (!this.head) {
      return this.head;
    } else {
      this.head = this.head.next;
    }
  }
  deleteAtLast() {
    if (!this.head || this.head.next === null) {
      return (this.head = null);
    } else {
      let traverseList = this.head;
      while (traverseList.next.next !== null) {
        traverseList = traverseList.next;
      }
      traverseList.next = null;
    }
  }
  searchNode(val) {
    if (!this.head) {
      return null;
    } else {
      let traverseList = this.head;
      while (traverseList) {
        if (traverseList.val === val) return traverseList;
        traverseList = traverseList.next;
      }
      return null;
    }
  }
  printLinkedList() {
    let traverseList = this.head;
    while (traverseList) {
      console.log(traverseList.val + " ");
      traverseList = traverseList.next;
    }
  }
}
const head = new LinkedList();

head.insertAtlast(10);
head.insertAtlast(20);
head.insertAtlast(30);
head.printLinkedList();
