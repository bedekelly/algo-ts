export function _trapRainWater(heights: number[]): number {
  if (heights.length === 0) return 0;

  let result = 0;
  let level = 0;
  let l = 0;
  let r = heights.length - 1;

  while (l < r) {
    let lower;
    if (heights[l] < heights[r]) {
      lower = heights[l];
      l++;
    } else {
      lower = heights[r];
      r--;
    }
    level = Math.max(level, lower);
    result += level - lower;
  }

  return result;
}

export function trapRainWater(heights: number[]): number {
  let left = 0;
  let right = heights.length - 1;
  let total = 0;
  let waterLevel = 0;
  console.log({ left, right, total, waterLevel });
  while (left < right) {
    let lowerSide;
    if (heights[left] <= heights[right]) {
      left += 1;
      lowerSide = heights[left];
    } else {
      right -= 1;
      lowerSide = heights[right];
    }
    waterLevel = Math.max(waterLevel, lowerSide);
    total += waterLevel - lowerSide;
    console.log({ left, right, total, waterLevel, lowerSide });
  }

  return total;
}
