/**
 * Takes in the input and splits by newline.
 * @param input The input to parse.
 * @param seperator Delimiter to seperator input.
 */
export const parseInput = (
  input: string,
  seperator: RegExp | string = "\n"
): string[] => input.split(seperator).filter((line) => line !== "");
