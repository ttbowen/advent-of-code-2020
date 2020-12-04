import { partTwo } from "../part-two";
import { readInput } from '../../utils/read-input';
import { getReportEntries } from '../utils/get-report-entries';

describe(`2020 - Day 1 - Part Two`, () => {
  it(`should return 241861950 with example expense report`, () => {
    const report = `1721
          979
          366
          299
          675
          1456
          `;
    const input = getReportEntries(report);
    const expectedResult = 241861950;

    const result = partTwo(input);

    expect(result).toBe(expectedResult);
  });

  it(`should return 278783190 with actual expense report`, () => {
    const file = readInput("../input.txt");
    const input = getReportEntries(file);
    const expectedResult = 278783190;

    const result = partTwo(input);

    expect(result).toBe(expectedResult);
  });
});
