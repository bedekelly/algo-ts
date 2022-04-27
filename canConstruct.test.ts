import { assert } from "https://deno.land/std@0.136.0/testing/asserts.ts";
import { canConstruct } from "./canConstruct.ts";

Deno.test("can construct some words", () => {
  assert(canConstruct("onetwothree", ["two", "one", "three"]));
});

Deno.test("can not construct some words", () => {
  assert(!canConstruct("onetwothree", ["two", "one"]));
});

Deno.test("can always construct empty string", () => {
  assert(canConstruct("", ["one", "two", "", ""]));
});

Deno.test("can construct strings with repeated stuff", () => {
  assert(canConstruct("oneoneoneoneonetwo", ["one", "two", "", ""]));
});

Deno.test("can construct very long strings", () => {
  assert(
    canConstruct("o".repeat(1000), [
      "first",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "o",
    ])
  );
});

Deno.test("abcdef", () => {
  assert(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
});

Deno.test("skateboard", () => {
  assert(
    !canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
  );
});
Deno.test("eee", () => {
  assert(
    !canConstruct("e".repeat(1000) + "f", [
      "e",
      "ee",
      "eee",
      "eeee",
      "eeeee",
      "eeeeee",
      "eeeeeee",
    ])
  );
});
