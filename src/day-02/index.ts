import { partOne } from "./part-one";
import { partTwo } from "./part-two";
import { readInput } from "../utils/read-input";
import { getPasswordEntries } from "./utils/get-password-entries";

const file = readInput();
const input = getPasswordEntries(file);

console.time("Time");
const resultOne = partOne(input);
const resultTwo = partTwo(input);
console.timeEnd("Time");

console.log("Solution to part 1:", resultOne);
console.log("Solution to part 2:", resultTwo);
