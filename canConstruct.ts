export function canConstruct(
  target: string,
  wordBank: string[],
  memo: Record<string, boolean> = {}
): boolean {
  if (target === "") return true;

  if (target in memo) return memo[target];
  let result = false;

  for (const word of wordBank) {
    if (target.startsWith(word)) {
      const subProblem = target.slice(word.length);
      if (canConstruct(subProblem, wordBank, memo)) {
        result = true;
        break;
      }
    }
  }

  memo[target] = result;
  return result;
}
