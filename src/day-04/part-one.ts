import { REQUIRED_FIELDS } from "./constants";

export function partOne(passports: string[]): number {
  let validCount = 0;

  for (let i = 0; i < passports.length; i++) {
    const fields = passports[i]
      .split(/[\s\n]/)
      .map((field) => field.split(":")[0]);
    const success = REQUIRED_FIELDS.every((field) => fields.includes(field));

    if (success) {
      validCount++;
    }
  }

  return validCount;
}
