import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";
import longestIncreasingPath from "./longestIncreasingPath.ts";

Deno.test("Empty grid", () => {
  assertEquals(longestIncreasingPath([]), -Infinity);
});

Deno.test("Grid with empty rows", () => {
  assertEquals(longestIncreasingPath([[], [], [], []]), -Infinity);
});

Deno.test("Grid with one element", () => {
  assertEquals(longestIncreasingPath([[1]]), 0);
});

Deno.test("Grid with two elements horizontally", () => {
  assertEquals(longestIncreasingPath([[1, 2]]), 1);
});

Deno.test("Grid with two elements vertically", () => {
  assertEquals(longestIncreasingPath([[2], [1]]), 1);
});

Deno.test("Bigger grid", () => {
  assertEquals<number>(
    longestIncreasingPath([
      [1, 2, 3],
      [4, 5, 4],
      [9, 8, 2],
    ]),
    6
  );
});

Deno.test("Bigger grid", () => {
  assertEquals<number>(
    longestIncreasingPath([
      [1, 2, 3, 4, 5],
      [4, 5, 4, 9, 12],
      [9, 8, 2, 42, 2],
    ]),
    6
  );
});
