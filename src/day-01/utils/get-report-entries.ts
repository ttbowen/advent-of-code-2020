import { parseInput } from '../../utils/parse-input';

/**
 * Parse and return the report entries.
 * @param input The file input to get reports from.
 */
export const getReportEntries = (input: string): number[] =>
  parseInput(input).map((number) => parseInt(number));