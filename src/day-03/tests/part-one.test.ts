import { readInput } from "../../utils/read-input";
import { partOne } from "../part-one";

describe(`2020 - Day 3 - Part One`, () => {
  it(`should return 7 encountered trees with example input`, () => {
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
    const expectedResult = 7;

    const result = partOne(map);

    expect(result).toBe(expectedResult);
  });

  it(`should return 220 encountered trees with actual input`, () => {
    const map = readInput("../input.txt");
    const expectedResult = 220;

    const result = partOne(map);

    expect(result).toBe(expectedResult);
  });
});
