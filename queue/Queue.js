import LinkedList from '../linked-list/LinkedList';

//FIFO
//firts in first out
export default class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  isEmpty() {
    return !this.linkedList.tail;
  }

  peek() {
    if (!this.linkedList.head) {
      return null;
    }

    return this.linkedList.head.value;
  }

  enqueue(value) {
    this.linkedList.append(value);
  }

  dequeue() {
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }

  toString(callback) {
    return this.linkedList.toString(callback);
  }
}


const testQueue = new Queue();
testQueue.enqueue(1);
testQueue.enqueue(2);
testQueue.enqueue(3);
testQueue.dequeue();
testQueue.peek();
testQueue.dequeue();

console.log(testQueue.peek());