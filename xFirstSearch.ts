type Graph<T extends string | number> = Record<T, T[]>;
type Implements<T, P extends unknown[]> = new (...args: P) => T;

interface Strategy<T> {
  add(t: T): void;
  next(): T;
  hasNext(): boolean;

  /**
   * Should we add the nodes from each new edge in reverse?
   * This is helpful for iterating in a readable way.
   */
  reverse: boolean;
}

abstract class ArrayStrategy<T> {
  protected queue: T[];

  constructor() {
    this.queue = [];
  }

  hasNext(): boolean {
    return this.queue.length !== 0;
  }

  toString(): string {
    return JSON.stringify(this.queue);
  }
}

class BreadthFirstSearch<T> extends ArrayStrategy<T> implements Strategy<T> {
  reverse = false;

  add(t: T): void {
    this.queue.push(t);
  }
  next(): T {
    const retval = this.queue.shift();
    if (retval === undefined) {
      throw new Error("No next value available");
    }
    return retval;
  }
}

class DepthFirstSearch<T> extends ArrayStrategy<T> implements Strategy<T> {
  reverse = true;

  add(t: T): void {
    this.queue.push(t);
  }
  next(): T {
    const retval = this.queue.pop();
    if (retval === undefined) {
      throw new Error("No next value available");
    }
    return retval;
  }
}

// Breadth-first: 0,1,2,3,4
// Depth-first: 0,1,3,4,2
const graph = {
  0: [1, 2, 3],
  1: [3, 4],
  2: [],
  3: [],
  4: [],
};

function printReachableNodes<T extends string | number>(
  graph: Graph<T>,
  start: T,
  Strat: Implements<Strategy<T>, []>
) {
  const searcher = new Strat();
  const seen = new Set();

  searcher.add(start);

  while (searcher.hasNext()) {
    const current = searcher.next();
    if (seen.has(current)) continue;
    console.log(current);

    seen.add(current);
    const nextNodes = graph[current];

    if (searcher.reverse) {
      nextNodes.reverse();
    }

    for (const next of nextNodes) {
      searcher.add(next);
    }
    console.log(searcher.toString());
  }
}

printReachableNodes(graph, 0, BreadthFirstSearch);
printReachableNodes(graph, 0, DepthFirstSearch);
