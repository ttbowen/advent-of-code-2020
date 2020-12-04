import { parseInput } from "../../utils/parse-input";
import { readInput } from "../../utils/read-input";
import { partTwo } from "../part-two";

describe(`2020 - Day 4 - Part Two`, () => {
  it(`should return 184 valid passports`, () => {
    const expectedResult = 184;
    const seperator = "\n\n";
    const file = readInput("../input.txt");
    const input = parseInput(file, seperator);

    const result = partTwo(input);

    expect(result).toBe(expectedResult);
  });
});
