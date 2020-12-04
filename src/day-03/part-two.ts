import { getEncounteredTrees } from "./utils/get-encountered-trees";
import { Slope } from "./types";

export function partTwo(map: string): number {
  const slopes: Slope[] = [
    { right: 1, down: 1 },
    { right: 3, down: 1 },
    { right: 5, down: 1 },
    { right: 7, down: 1 },
    { right: 1, down: 2 },
  ];

  return slopes
    .map((slope) => getEncounteredTrees(slope, map))
    .reduce((accumulator, currentValue) => accumulator * currentValue);
}
