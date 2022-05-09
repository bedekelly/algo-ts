export default function longestIncreasingPath(matrix: number[][]) {
  if (matrix.length === 0) return -Infinity;
  //   const totalSize = matrix.length * matrix[0].length;
  //   let workDone = 0;
  const longestPaths: (number | null)[][] = matrix.map(() =>
    matrix[0].map(() => null)
  );

  /**
   * From a point which doesn't exist: -Infinity.
   * From a point which has no neighbours: 0.
   * From a point which has no increasing neighbours.
   * From a point which has one increasing neighbour: 1 + that neighbour.
   */
  function longestPathFromPoint(
    [row, col]: [number, number],
    prev = -Infinity
  ): number {
    // console.log({ workDone: ++workDone, totalSize });
    if (row < 0 || row >= matrix.length) return -Infinity;
    if (col < 0 || col >= matrix[row].length) return -Infinity;

    if (longestPaths[row][col] !== null) {
      return longestPaths[row][col] as number;
    }

    const thisVal = matrix[row][col];
    if (thisVal <= prev) return -Infinity;

    const result = Math.max(
      ...[
        [row, col - 1],
        [row, col + 1],
        [row - 1, col],
        [row + 1, col],
      ].map((rc) => 1 + longestPathFromPoint(rc as [number, number], thisVal))
    );
    longestPaths[row][col] = Math.max(result, 0);
    return longestPaths[row][col] as number;
  }

  let longestSoFar = -Infinity;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const longest = longestPathFromPoint([row, col]);
      longestSoFar = Math.max(longest, longestSoFar);
    }
  }

  return longestSoFar;
}
