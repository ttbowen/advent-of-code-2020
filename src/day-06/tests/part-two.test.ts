import { GROUPS_FIXTURE } from "./fixture";
import { partTwo } from "../part-two";
import { readInput } from "../../utils/read-input";
import { parseInput } from "../../utils/parse-input";

describe(`2020 - Day 6 - Part Two`, () => {
  it(`should return a sum of 6 with example input`, () => {
    const expectedResult = 6;

    const result = partTwo(GROUPS_FIXTURE);

    expect(result).toBe(expectedResult);
  });

  it(`should return a sum of 3323 with actual input`, () => {
    const expectedResult = 3323;
    const file = readInput("../input.txt");
    const seperator = "\n\n";
    const groups = parseInput(file, seperator);

    const result = partTwo(groups);

    expect(result).toBe(expectedResult);
  });
});
