function add(matrix: Record<string, string[]>, one: string, two: string) {
  if (!(one in matrix)) matrix[one] = [];
  if (!(two in matrix)) matrix[two] = [];
  matrix[one].push(two);
  matrix[two].push(one);
}

const shapes: Record<number, string> = {
  3: "triangle",
  4: "square",
  5: "pentagon",
  6: "hexagon",
};

/**
 * O(E + V) time complexity.
 */
function determinePolygons(edges: [string, string][]): string[] {
  const polygons: string[][] = [];

  const adjacencyMatrix: Record<string, string[]> = {};
  for (const [a, b] of edges) {
    add(adjacencyMatrix, a, b);
  }

  const vertices = Object.keys(adjacencyMatrix);
  const seen = new Set();

  for (const startVertex of vertices) {
    if (seen.has(startVertex)) continue;
    seen.add(startVertex);

    const polygon = [];
    let currentVertex = startVertex;
    do {
      polygon.push(currentVertex);
      seen.add(currentVertex);
      const neighbours = adjacencyMatrix[currentVertex];

      const nextNeighbour = neighbours.find((n) => !seen.has(n));
      if (nextNeighbour) {
        currentVertex = nextNeighbour;
      } else if (neighbours.includes(startVertex)) {
        currentVertex = startVertex;
      } else {
        throw new Error("Panic: reached a dead end!");
      }
    } while (currentVertex !== startVertex);

    polygons.push(polygon);
    console.log({ polygons });
  }

  return polygons.map((p) => shapes[p.length]);
}

const result = determinePolygons([
  ["b", "c"],
  ["a", "b"],
  ["x", "y"],
  ["c", "a"],
  ["z", "y"],
  ["w", "x"],
  ["z", "w"],
  ["1", "2"],
  ["1", "3"],
  ["2", "3"],
]);

console.log({ result });
