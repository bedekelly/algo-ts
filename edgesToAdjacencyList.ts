type Edge = [string, string];

/**
 * Convert a list of directed edges to an adjacency list.
 */
export function edgesToAdjacencyList(edges: Edge[]): Record<string, string[]> {
  const adjacency: Record<string, string[]> = {};
  for (const [start, end] of edges) {
    if (adjacency[start] === undefined) {
      adjacency[start] = [];
    }
    adjacency[start].push(end);
  }
  return adjacency;
}
