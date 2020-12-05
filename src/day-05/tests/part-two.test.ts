import { parseInput } from "../../utils/parse-input";
import { readInput } from "../../utils/read-input";
import { partTwo } from "../part-two";

describe(`2020 - Day 5 - Part Two`, () => {
  it(`should return 642 as the seat ID`, () => {
    const expectedResult = 642;
    const file = readInput("../input.txt");
    const input = parseInput(file);

    const result = partTwo(input);

    expect(result).toBe(expectedResult);
  });
});
