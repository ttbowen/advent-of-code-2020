import { partOne } from "../part-one";
import { GROUPS_FIXTURE } from "./fixture";
import { readInput } from "../../utils/read-input";
import { parseInput } from "../../utils/parse-input";

describe(`2020 - Day 6 - Part One`, () => {
  it(`should return a sum of 11 with example input`, () => {
    const expectedResult = 11;

    const result = partOne(GROUPS_FIXTURE);

    expect(result).toBe(expectedResult);
  });

  it(`should return a sum of 6530 with actual input`, () => {
    const expectedResult = 6530;
    const file = readInput("../input.txt");
    const seperator = "\n\n";
    const groups = parseInput(file, seperator);

    const result = partOne(groups);

    expect(result).toBe(expectedResult);
  });
});
