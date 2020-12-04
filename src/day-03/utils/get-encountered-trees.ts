import { parseInput } from "../../utils/parse-input";
import { Slope } from "../types";

const TREE_CHAR = "#";

/**
 * Returns a count of all the trees you would encounter for the specified slope on
 * the given map.
 *
 * @param slope The slope positions.
 * @param map The toboggan map.
 */
export function getEncounteredTrees(slope: Slope, map: string): number {
  const rows = parseInput(map);

  let treesEncountered = 0;
  let rightPosition = 0;
  for (let row = slope.down; row < rows.length; row += slope.down) {
    rightPosition += slope.right;
    const position = rightPosition % rows[row].length;

    if (rows[row][position] === TREE_CHAR) {
      treesEncountered++;
    }
  }

  return treesEncountered;
}
