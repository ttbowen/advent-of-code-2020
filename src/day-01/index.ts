import { partOne } from "./part-one";
import { partTwo } from "./part-two";
import { readInput } from "../utils/read-input";

export const getReportEntries = (): number[] =>
  readInput("input.txt")
    .split("\n")
    .map((number) => parseInt(number));

const input = getReportEntries();

console.time("Time");
const resultOne = partOne(input);
const resultTwo = partTwo(input);
console.timeEnd("Time");

console.log("Solution to part 1:", resultOne);
console.log("Solution to part 2:", resultTwo);
