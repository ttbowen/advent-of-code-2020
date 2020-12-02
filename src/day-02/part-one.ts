import { PasswordEntry } from "./types";

export function partOne(entries: PasswordEntry[]): number {
  let validCount = 0;
  for (const entry of entries) {
    const { digitOne, digitTwo, char, password } = entry;
    const occurances = password.split(char).length - 1;

    if (occurances >= digitOne && occurances <= digitTwo) {
      validCount++;
    }
  }

  return validCount;
}
