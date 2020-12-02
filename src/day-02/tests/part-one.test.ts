import { partOne } from "../part-one";
import { getPasswordEntries } from "../index";
import { readInput } from '../../utils/read-input';

describe(`2020 - Day 2 - Part One`, () => {
  it(`should return 2 valid passwords with example input`, () => {
    const report = `1-3 a: abcde
    1-3 b: cdefg
    2-9 c: ccccccccc`;
    const input = getPasswordEntries(report);
    const expectedResult = 2;

    const result = partOne(input);

    expect(result).toBe(expectedResult);
  });

  it(`should return 517 valid passwords with input file`, () => {
    const file = readInput("../input.txt");
    const input = getPasswordEntries(file);
    const expectedResult = 517;

    const result = partOne(input);

    expect(result).toBe(expectedResult);
  });
});
