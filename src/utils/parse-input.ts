/**
 * Takes in the input and splits by newline.
 * @param input The input to parse.
 */
export const parseInput = (input: string): string[] =>
  input.split("\n").filter((line) => line !== "");
