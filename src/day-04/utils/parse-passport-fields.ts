import { PassportFields } from "../types";

/**
 * Parse the passport field input.
 * @param fields The passport fields.
 */
export function parsePassportFields(fields: string[]): Partial<PassportFields> {
  const parsedFields: Partial<PassportFields> = {};

  for (const field of fields) {
    const numericFields = ["byr", "iyr", "eyr"];
    const fieldAndValue = field.split(":");
    const name = fieldAndValue[0];
    const value = fieldAndValue[1];

    // Parse numeric fields into numbers.
    parsedFields[name] = numericFields.indexOf(name) > -1 ? +value : value;
  }

  return parsedFields;
}
