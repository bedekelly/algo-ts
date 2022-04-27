export function countIslands(matrix: number[][]) {
  if (matrix.length === 0) return 0;
  if (matrix[0].length === 0) return 0;
  if (!matrix.every((row) => row.length === matrix[0].length)) {
    throw new Error("Matrix must have rows of equal length.");
  }

  function* neighbours(i: number, j: number) {
    if (i > 0) {
      yield [i - 1, j];
    }
    if (i < matrix.length - 1) {
      yield [i + 1, j];
    }
    if (j > 0) {
      yield [i, j - 1];
    }
    if (j < matrix[0].length - 1) {
      yield [i, j + 1];
    }
  }

  const seen = new Array(matrix.length)
    .fill(null)
    .map(() => new Array(matrix[0].length).fill(false));

  function exploreIsland(i: number, j: number) {
    if (seen[i][j]) return;
    seen[i][j] = true;
    const toExplore = [...neighbours(i, j)];

    while (toExplore.length) {
      const [nextI, nextJ] = toExplore.pop()!;
      if (!matrix[nextI][nextJ]) continue;
      if (seen[nextI][nextJ]) continue;
      seen[nextI][nextJ] = true;
      for (const neighbour of neighbours(nextI, nextJ)) {
        toExplore.push(neighbour);
      }
    }
  }

  let numberIslands = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      const currentCell = matrix[i][j];
      if (!currentCell) continue;
      if (seen[i][j]) continue;
      numberIslands++;
      exploreIsland(i, j);
    }
  }

  return numberIslands;
}

const result = countIslands([
  [0, 1, 0, 0, 1, 0],
  [1, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 0],
  [0, 1, 0, 1, 1, 0],
  [0, 0, 0, 0, 0, 0],
]);
console.log({ result });
