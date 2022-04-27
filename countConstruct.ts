/**
 * Without memoization:
 *  Time complexity:  O(m^n * n * m)
 *      because it's m height and n branches, plus at each node there's m*n work done.
 *      but maybe because m^n*m is just m^(n+1) you'd leave out the *m at the end
 *  Space complexity: O(m^2)
 *      because the maximum call stack is m height, but each frame clones something of max length m
 *
 * With memoization:
 *  Time complexity: O(n * m^2)
 *      because we're filling up a big memo grid with m substrings on top and n prefixes to choose from down the side.
 *      Each time we fill in a number, we pay O(m) for the .slice operation.
 *      But there's no more numbers than this grid
 *  Space complexity: O(m^2)
 */
export function countConstruct(
  target: string,
  wordBank: string[],
  memo: Record<string, number> = {}
): number {
  if (target === "") return 1;

  if (target in memo) return memo[target];
  let result = 0;

  for (const word of wordBank) {
    if (!word) continue;
    if (target.startsWith(word)) {
      const subProblem = target.slice(word.length);
      result += countConstruct(subProblem, wordBank, memo);
    }
  }

  memo[target] = result;
  return result;
}
