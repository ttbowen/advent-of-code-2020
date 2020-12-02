/**
 * Find two entries that sum to 2020 and then multiply those two numbers together.
 *
 * @param entries The entries from the expense report.
 */
export function partOne(entries: number[]): number {
  for (let i = 0; i < entries.length; i++) {
    for (let j = i + 1; j < entries.length; j++) {
      const sum = entries[i] + entries[j];
      if (sum === 2020) {
        return entries[i] * entries[j];
      }
    }
  }

  return 0;
}
