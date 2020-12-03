import { Slope } from "./types";

/**
 * Returns a count of all the trees you would encounter for the specified slope on
 * the given map.
 *
 * @param slope The slope positions.
 * @param map The toboggan map.
 */
export function encounteredTrees(slope: Slope, map: string): number {
  const { right, down } = slope;
  const tree = "#";
  const rows = map.split("\n").filter((line) => line !== "");

  let treesEncountered = 0;
  let posX = 0;
  for (let y = down; y < rows.length; y += down) {
    posX += right;
    const position = posX % rows[y].length;

    if (rows[y][position] === tree) {
      treesEncountered++;
    }
  }

  return treesEncountered;
}
