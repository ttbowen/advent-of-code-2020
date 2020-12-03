import { partOne } from "./part-one";
import { partTwo } from "./part-two";
import { readInput } from "../utils/read-input";

const map = readInput("input.txt");

console.time("Time");
const resultOne = partOne(map);
const resultTwo = partTwo(map);
console.timeEnd("Time");

console.log("Solution to part 1:", resultOne);
console.log("Solution to part 2:", resultTwo);
