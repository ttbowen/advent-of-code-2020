import { validator } from "./utils/validator";
import { parsePassportFields } from "./utils/parse-passport-fields";

export function partTwo(passports: string[]): number {
  let validCount = 0;

  for (let i = 0; i < passports.length; i++) {
    const fields = passports[i].split(/[\s\n]/);
    const parsedFields = parsePassportFields(fields);
    const isValid = validator(parsedFields);

    if (isValid) {
      validCount++;
    }
  }

  return validCount;
}
