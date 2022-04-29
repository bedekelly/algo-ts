import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";

import { trapRainWater } from "./rainwater.ts";

Deno.test("No rainwater trapped in empty array", () => {
  assertEquals(0, trapRainWater([]));
});

Deno.test("No rainwater in single column", () => {
  assertEquals(0, trapRainWater([3]));
});

Deno.test("No rainwater in single empty space", () => {
  assertEquals(0, trapRainWater([0]));
});

Deno.test("No rainwater in two blocks", () => {
  assertEquals(0, trapRainWater([1, 1]));
});

Deno.test("No rainwater in three blocks", () => {
  assertEquals(0, trapRainWater([2, 2, 2]));
});

Deno.test("No rainwater in stairs", () => {
  assertEquals(0, trapRainWater([1, 2, 3]));
});

Deno.test("No rainwater in backwards stairs", () => {
  assertEquals(0, trapRainWater([3, 2, 1]));
});

Deno.test("One trapped rainwater in U shape", () => {
  assertEquals(trapRainWater([1, 0, 1]), 1);
});

Deno.test("Trapped rainwater in raised U shape", () => {
  assertEquals(2, trapRainWater([3, 1, 3]));
});

Deno.test("Trapped rainwater uses height of lower side of U shape", () => {
  assertEquals(3, trapRainWater([5, 1, 4]));
});

Deno.test("Some weird thing with middle bits", () => {
  assertEquals(1, trapRainWater([0, 5, 3, 4, 0]));
});
