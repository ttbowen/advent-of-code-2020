import { partTwo } from "../part-two";
import { getPasswordEntries } from "../index";
import { readInput } from "../../utils/read-input";

describe(`2020 - Day 2 - Part Two`, () => {
  it(`should return 1 valid passwords with example input`, () => {
    const report = `1-3 a: abcde
    1-3 b: cdefg
    2-9 c: ccccccccc`;
    const input = getPasswordEntries(report);
    const expectedResult = 1;

    const result = partTwo(input);

    expect(result).toBe(expectedResult);
  });

  it(`should return 284 valid passwords with input file`, () => {
    const file = readInput("../input.txt");
    const input = getPasswordEntries(file);
    const expectedResult = 284;

    const result = partTwo(input);

    expect(result).toBe(expectedResult);
  });
});
