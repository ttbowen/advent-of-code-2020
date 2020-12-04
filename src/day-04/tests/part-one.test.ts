import { partOne } from "../part-one";
import { parseInput } from "../../utils/parse-input";
import { readInput } from "../../utils/read-input";
import { PASSPORTS_FIXTURE } from "./passports-fixture";

describe(`2020 - Day 4 - Part One`, () => {
  it(`should return 2 valid passports with example input`, () => {
    const expectedResult = 2;
    const seperator = "\n\n";
    const input = parseInput(PASSPORTS_FIXTURE, seperator);

    const result = partOne(input);

    expect(result).toBe(expectedResult);
  });

  it(`should return 254 valid passports with actual input`, () => {
    const expectedResult = 254;
    const seperator = "\n\n";
    const file = readInput("../input.txt");
    const input = parseInput(file, seperator);

    const result = partOne(input);

    expect(result).toBe(expectedResult);
  });
});
