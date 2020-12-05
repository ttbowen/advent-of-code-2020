import { partOne } from "../part-one";
import { parseInput } from "../../utils/parse-input";
import { readInput } from "../../utils/read-input";

describe(`2020 - Day 5 - Part One`, () => {
  it(`should return a seat ID of 357 with example input`, () => {
    const expectedResult = 357;

    const result = partOne(["FBFBBFFRLR"]);

    expect(result).toBe(expectedResult);
  });

  it(`should return a seat ID of 919 with actual input`, () => {
    const expectedResult = 919;
    const file = readInput("../input.txt");
    const input = parseInput(file);

    const result = partOne(input);

    expect(result).toBe(expectedResult);
  });
});
