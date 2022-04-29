import MinHeap from "./minHeap.ts";
import { assertEquals, assert } from "https://deno.land/std/testing/asserts.ts";

Deno.test("Heap will keep the smallest item at the top", () => {
  const heap = new MinHeap<string>();
  heap.add([3, "bananas"]);
  heap.add([4, "carrots"]);
  heap.add([2, "apples"]);
  heap.add([1, "avocados"]);

  assertEquals(heap.toArray(), [
    [1, "avocados"],
    [2, "apples"],
    [3, "bananas"],
    [4, "carrots"],
  ]);

  assert(heap.heapPropertyHolds());
});
