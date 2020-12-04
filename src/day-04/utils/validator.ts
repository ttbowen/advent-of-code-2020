import { PassportFields } from "../types";
import { REQUIRED_FIELDS } from "../constants";

function validateRequired(fields: Partial<PassportFields>) {
  for (const field of REQUIRED_FIELDS) {
    if (fields[field] === undefined) {
      return false;
    }
  }

  return true;
}

function validateMinAndMax(value: number, min: number, max: number) {
  return value >= min && value <= max;
}

function validateHeight(height: string) {
  const heightRegex = /(\d+)(cm|in)/;
  const heightMatches = height.match(heightRegex) || [];
  const value = +heightMatches[1];
  const unit = heightMatches[2];

  let isValid = false;

  if (!isNaN(value)) {
    if (unit === "cm") {
      isValid = validateMinAndMax(value, 150, 193);
    } else if (unit === "in") {
      isValid = validateMinAndMax(value, 59, 76);
    }
  }

  return isValid;
}

function validatePattern(value: string, pattern: RegExp) {
  return pattern.test(value);
}

/**
 * Validates the passport rules.
 * @param fields The passport fields.
 */
export function validator(fields: Partial<PassportFields>): boolean {
  return (
    validateRequired(fields) &&
    validateMinAndMax(fields.byr, 1920, 2002) &&
    validateMinAndMax(fields.iyr, 2010, 2020) &&
    validateMinAndMax(fields.eyr, 2020, 2030) &&
    validateHeight(fields.hgt) &&
    validatePattern(fields.hcl, /#[0-9a-f]{6}/) &&
    validatePattern(fields.ecl, /amb|blu|brn|gry|grn|hzl|oth/) &&
    validatePattern(fields.pid, /^\d{9}$/)
  );
}
