import { PasswordEntry } from "./types";

export function partTwo(entries: PasswordEntry[]): number {
  let validCount = 0;
  for (const entry of entries) {
    const { digitOne, digitTwo, char, password } = entry;
    const firstChar = password.charAt(digitOne - 1);
    const secondChar = password.charAt(digitTwo - 1);

    if (
      (firstChar === char && secondChar !== char) ||
      (firstChar !== char && secondChar === char)
    ) {
      validCount++;
    }
  }

  return validCount;
}
