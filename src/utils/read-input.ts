import { readFileSync } from "fs";
import * as getCallerFile from "get-caller-file";

/**
 * Reads the input from a file.
 * @param fileName The name of the file.
 */
export function readInput(fileName: string): string {
  const file = getCallerFile()
    .split("/")
    .slice(0, -1)
    .concat(fileName)
    .join("/");

  return readFileSync(file).toString();
}
