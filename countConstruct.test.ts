import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";
import { countConstruct } from "./countConstruct.ts";

Deno.test("abc can't be constructed with def", () => {
  assertEquals(0, countConstruct("abc", ["d", "e", "f", "de", "ef", "def"]));
});

Deno.test("abc can be constructed once with abc", () => {
  assertEquals(1, countConstruct("abc", ["abc"]));
});

Deno.test(
  "abc can be constructed once with abc, missing overlapping stuff",
  () => {
    assertEquals(1, countConstruct("abc", ["ab", "bc", "abc"]));
  }
);

Deno.test("purple can be constructed twice with purp, ur, le, p, purpl", () => {
  assertEquals(2, countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
});

Deno.test(
  "lots of e's then an f should return false with e, ee, eee etc.",
  () => {
    assertEquals(
      0,
      countConstruct("e".repeat(1000) + "f", [
        "e",
        "ee",
        "eee",
        "eeee",
        "eeeee",
        "eeeeee",
      ])
    );
  }
);
