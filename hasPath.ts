import { edgesToAdjacencyList } from "./edgesToAdjacencyList.ts";

function hasPath(
  edges: [string, string][],
  start: string,
  end: string
): boolean {
  const adjacencyList = edgesToAdjacencyList(edges);

  const frontier = [start];
  let found = false;
  const seen = new Set();
  while (frontier.length) {
    const current = frontier.shift();
    console.log({ current });
    if (!current || seen.has(current)) continue;

    if (current === end) {
      found = true;
      break;
    }

    seen.add(current);
    const nextNodes = adjacencyList[current];
    if (!nextNodes) continue;
    for (const next of nextNodes) {
      frontier.push(next);
    }
  }

  return found;
}

const path = hasPath(
  [
    ["A", "B"],
    ["B", "E"],
    ["B", "Q"],
  ],
  "A",
  "D"
);

console.log(path);
