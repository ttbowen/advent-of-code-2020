import { partOne } from "./part-one";
import { partTwo } from "./part-two";
import { readInput } from "../utils/read-input";
import { parseInput } from "../utils/index";

const file = readInput();
const groups = parseInput(file);

console.group("Day 5");
console.time("Time");
const resultOne = partOne(groups);
const resultTwo = partTwo(groups);
console.timeEnd("Time");

console.log("Solution to part 1:", resultOne);
console.log("Solution to part 2:", resultTwo);
console.groupEnd();
