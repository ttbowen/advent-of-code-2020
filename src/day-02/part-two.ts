import { PasswordEntry } from "./types";

/**
 * Find how many passwords are valid according to their policies.
 *
 * @param entries The password entries.
 */
export function partTwo(entries: PasswordEntry[]): number {
  let validCount = 0;
  for (const entry of entries) {
    const { digitOne, digitTwo, char, password } = entry;
    const firstChar = password[digitOne - 1];
    const secondChar = password[digitTwo - 1];

    if (
      (firstChar === char && secondChar !== char) ||
      (firstChar !== char && secondChar === char)
    ) {
      validCount++;
    }
  }

  return validCount;
}
