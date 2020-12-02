import { partOne } from "./part-one";
import { partTwo } from "./part-two";
import { readInput } from "../utils/read-input";
import { PasswordEntry } from "./types";

export const getPasswordEntries = (file: string): PasswordEntry[] => {
  const entries = file.split("\n").filter((input) => input !== "");

  return entries.map((input) => {
    const regex = /(\d+)-(\d+)\s([a-z]):\s([a-z]+)/;
    const matches = regex.exec(input);

    return {
      digitOne: +matches[1],
      digitTwo: +matches[2],
      char: matches[3],
      password: matches[4],
    };
  });
};

const file = readInput("input.txt");
const input = getPasswordEntries(file);

console.time("Time");
const resultOne = partOne(input);
const resultTwo = partTwo(input);
console.timeEnd("Time");

console.log("Solution to part 1:", resultOne);
console.log("Solution to part 2:", resultTwo);
