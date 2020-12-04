import { getEncounteredTrees } from "./utils/get-encountered-trees";
import { Slope } from "./types";

export function partOne(map: string): number {
  const slope: Slope = {
    right: 3,
    down: 1,
  };
  const trees = getEncounteredTrees(slope, map);

  return trees;
}
