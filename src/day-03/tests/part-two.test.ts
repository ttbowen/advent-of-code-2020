import { partTwo } from "../part-two";
import { readInput } from "../../utils/read-input";

describe(`2020 - Day 3 - Part Two`, () => {
  it(`should return 336 with example input`, () => {
    const map = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`;
    const expectedResult = 336;

    const result = partTwo(map);

    expect(result).toBe(expectedResult);
  });

  it(`should return 2138320800 with actual input`, () => {
    const map = readInput("../input.txt");
    const expectedResult = 2138320800;

    const result = partTwo(map);

    expect(result).toBe(expectedResult);
  });
});
