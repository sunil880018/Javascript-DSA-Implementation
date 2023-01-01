class Stack {
  constructor() {
    this.index = -1;
    this.stack = [];
  }
  push(val) {
    this.stack.push(val);
    ++this.index;
  }
  pop() {
    if (this.index === -1) {
      return null;
    } else {
      const val = this.stack[this.index];
      this.stack.pop();
      --this.index;
      return val;
    }
  }
  top() {
    return this.index === -1 ? null : this.stack[this.index];
  }
  isEmpty() {
    return this.index === -1 ? true : false;
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.pop();
console.log(stack.top());
console.log(stack.isEmpty());
