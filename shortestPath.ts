import { edgesToAdjacencyList } from "./edgesToAdjacencyList.ts";

/**
 * Space complexity:
 *    could be O(E) for the "prev" edges but I was lazy and used a hashtable
 *    frontier list is O(E) since we won't ever add an edge twice
 *    O(V + E) for the adjacency list
 *    so probably O(V + E) overall for space
 *
 * Time complexity:
 *    O(V + E) since at worst we'll check every vertex and edge once.
 *
 */
function shortestPath(
  edges: [string, string][],
  start: string,
  end: string
): string[] {
  const adjacencyList = edgesToAdjacencyList(edges);

  const frontier: [string, string | null][] = [[start, null]];
  let found = false;
  const seen = new Set();

  // Build up the reverse of the path.
  const reverseEdges: Record<string, string | null> = {};
  while (frontier.length) {
    const [current, prev] = frontier.shift()!;
    reverseEdges[current] = prev;
    if (!current || seen.has(current)) continue;

    if (current === end) {
      found = true;
      break;
    }

    seen.add(current);
    const nextNodes = adjacencyList[current];
    if (!nextNodes) continue;
    for (const next of nextNodes) {
      frontier.push([next, current]);
    }
  }

  if (!found) {
    throw new Error("No valid path found.");
  }

  let currentNode: string | null = end;
  const computedPath: string[] = [];
  while (currentNode) {
    computedPath.unshift(currentNode);
    currentNode = reverseEdges[currentNode];
  }

  return computedPath;
}

const path = shortestPath(
  [
    ["A", "B"],
    ["B", "E"],
    ["B", "D"],
  ],
  "A",
  "D"
);

console.log(path);
