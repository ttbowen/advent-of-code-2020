import { partOne } from "../part-one";
import { getReportEntries } from '../utils/get-report-entries';
import { readInput } from '../../utils/read-input';

describe(`2020 - Day 1 - Part One`, () => {
  it(`should return 514579 with example expense report`, () => {
    const report = `1721
          979
          366
          299
          675
          1456
          `;
    const input = getReportEntries(report);
    const expectedResult = 514579;

    const result = partOne(input);

    expect(result).toBe(expectedResult);
  });

  it(`should return 538464 with actual expense report`, () => {
    const file = readInput("../input.txt");
    const input = getReportEntries(file);
    const expectedResult = 538464;

    const result = partOne(input);

    expect(result).toBe(expectedResult);
  });
});
