import { partOne } from "./part-one";
import { partTwo } from "./part-two";
import { readInput } from "../utils/read-input";

const file = readInput();

console.group("Day 3");
console.time("Time");
const resultOne = partOne(file);
const resultTwo = partTwo(file);
console.timeEnd("Time");

console.log("Solution to part 1:", resultOne);
console.log("Solution to part 2:", resultTwo);
console.groupEnd();
