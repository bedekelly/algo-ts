type Interval = readonly [number, number];

const start = (i: Interval) => i[0];
const end = (i: Interval) => i[1];

export function insertInterval(
  intervals: readonly Interval[],
  newInterval: Interval
): Interval[] {
  const result: Interval[] = [];
  let insertInterval = newInterval;

  for (let i = 0; i < intervals.length; i++) {
    // Insert interval is strictly before the next interval.
    if (end(insertInterval) < start(intervals[i])) {
      result.push(insertInterval);
      return result.concat(intervals.slice(i));
    }

    // Next interval is strictly before the insert interval.
    else if (end(intervals[i]) < start(insertInterval)) {
      result.push(intervals[i]);
    }

    // There's some overlap; update the insert interval.
    else {
      insertInterval = [
        Math.min(start(insertInterval), start(intervals[i])),
        Math.max(end(insertInterval), end(intervals[i])),
      ];
    }
  }

  return result.concat([insertInterval]);
}
