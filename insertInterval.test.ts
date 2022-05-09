const { test } = Deno;
import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";
import { insertInterval } from "./insertInterval.ts";

test("Empty array", () => {
  assertEquals(insertInterval([], [1, 2]), [[1, 2]]);
});

test("One prefix, non overlapping", () => {
  assertEquals(insertInterval([[1, 2]], [4, 5]), [
    [1, 2],
    [4, 5],
  ]);
});

test("One suffix, non overlapping", () => {
  assertEquals(insertInterval([[9, 10]], [4, 5]), [
    [4, 5],
    [9, 10],
  ]);
});

test("One prefix, overlapping", () => {
  assertEquals(insertInterval([[1, 3]], [2, 4]), [[1, 4]]);
});

test("One suffix, overlapping", () => {
  assertEquals(insertInterval([[2, 4]], [1, 3]), [[1, 4]]);
});

test("Two prefixes, one overlapping", () => {
  assertEquals(
    insertInterval(
      [
        [1, 3],
        [5, 7],
      ],
      [6, 10]
    ),
    [
      [1, 3],
      [5, 10],
    ]
  );
});

test("No overlaps but in middle", () => {
  assertEquals(
    insertInterval(
      [
        [1, 3],
        [10, 11],
      ],
      [4, 5]
    ),
    [
      [1, 3],
      [4, 5],
      [10, 11],
    ]
  );
});

test("Multiple overlap", () => {
  assertEquals(
    insertInterval(
      [
        [1, 3],
        [4, 6],
        [7, 9],
        [11, 13],
        [14, 15],
      ],
      [5, 12]
    ),
    [
      [1, 3],
      [4, 13],
      [14, 15],
    ]
  );
});
