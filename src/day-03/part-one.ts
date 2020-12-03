import { encounteredTrees } from "./encountered-trees";
import { Slope } from "./types";

export function partOne(map: string): number {
  const slope: Slope = {
    right: 3,
    down: 1,
  };
  const trees = encounteredTrees(slope, map);

  return trees;
}
