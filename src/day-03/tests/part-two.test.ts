import { readInput } from "../../utils/read-input";
import { partTwo } from "../part-two";
import { MAP_FIXTURE } from './map-fixture';

describe(`2020 - Day 3 - Part Two`, () => {
  it(`should return 336 with example input`, () => {
    const expectedResult = 336;

    const result = partTwo(MAP_FIXTURE);

    expect(result).toBe(expectedResult);
  });

  it(`should return 2138320800 with actual input`, () => {
    const expectedResult = 2138320800;
    const file = readInput("../input.txt");

    const result = partTwo(file);

    expect(result).toBe(expectedResult);
  });
});
