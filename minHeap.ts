type HeapItem<T> = [number, T];

export default class MinHeap<T> {
  #heap: HeapItem<T>[];

  constructor() {
    this.#heap = [];
  }

  static parent(i: number) {
    if (i <= 0) return null;
    return Math.floor((i - 1) / 2);
  }

  static leftChild(i: number) {
    return i * 2 + 1;
  }

  static rightChild(i: number) {
    return i * 2 + 2;
  }

  private swap(one: number, two: number) {
    const temp = this.#heap[one];
    this.#heap[one] = this.#heap[two];
    this.#heap[two] = temp;
  }

  add(item: HeapItem<T>) {
    this.#heap.push(item);
    let index = this.#heap.length - 1;
    while (index !== null) {
      const parent = MinHeap.parent(index);
      if (parent === null) break;
      if (this.#heap[index] < this.#heap[parent]) {
        this.swap(index, parent);
      } else {
        break;
      }
      index = parent;
    }
  }

  peek() {
    return this.#heap[0];
  }

  pop() {
    const last = this.#heap.length - 1;
    this.swap(0, last);
  }

  toArray() {
    return this.#heap;
  }

  heapPropertyHolds(startNode = 0): boolean {
    if (this.#heap[startNode] == undefined) return true;
    const leftIndex = MinHeap.leftChild(startNode);
    const rightIndex = MinHeap.rightChild(startNode);

    const thisVal = this.#heap[startNode][0];
    const left = this.#heap[leftIndex]?.[0];
    const right = this.#heap[rightIndex]?.[0];

    if (left !== undefined && left < thisVal) return false;
    if (right !== undefined && right < thisVal) return false;

    return (
      this.heapPropertyHolds(leftIndex) && this.heapPropertyHolds(rightIndex)
    );
  }
}
