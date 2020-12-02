/**
 * Find the product of three entries that sum to 2020.
 *
 * @param entries The entries from the expense report.
 */
export function partTwo(entries: number[]): number {
  for (let i = 0; i < entries.length; i++) {
    for (let j = i + 1; j < entries.length; j++) {
      for (let k = j + 1; k < entries.length; k++) {
        const sum = entries[i] + entries[j] + entries[k];
        if (sum === 2020) {
          return entries[i] * entries[j] * entries[k];
        }
      }
    }
  }

  return 0;
}
