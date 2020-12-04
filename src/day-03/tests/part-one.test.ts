import { readInput } from "../../utils/read-input";
import { partOne } from "../part-one";
import { MAP_FIXTURE } from './map-fixture';

describe(`2020 - Day 3 - Part One`, () => {
  it(`should return 7 encountered trees with example input`, () => {
    const expectedResult = 7;

    const result = partOne(MAP_FIXTURE);

    expect(result).toBe(expectedResult);
  });

  it(`should return 220 encountered trees with actual input`, () => {
    const expectedResult = 220;
    const file = readInput("../input.txt");

    const result = partOne(file);

    expect(result).toBe(expectedResult);
  });
});
