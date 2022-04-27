type WeightedGraphEdge = [string, string, number];

type WeightedGraph = Record<string, [string, number]>;

/**
 * Todo: Dijkstra's
 */
function weightedEdgesToAdjacencyMatrix(
  edges: WeightedGraphEdge[]
): WeightedGraph {
  const adjList: WeightedGraph = {};

  for (const [from, to, weight] of edges) {
  }

  return adjList;
}

function shortestPathWeighted(
  graph: WeightedGraphEdge[],
  start: string,
  end: string
): number {}
