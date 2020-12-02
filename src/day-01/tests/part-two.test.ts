import { partTwo } from "../part-two";
import { getReportEntries } from "../index";

describe(`2020 - Day 1 - Part Two`, () => {
  it(`should return 241861950 with example expense report`, () => {
    const report = `1721
          979
          366
          299
          675
          1456
          `;
    const input = report.split("\n").map((number) => parseInt(number));
    const expectedResult = 241861950;

    const result = partTwo(input);

    expect(result).toBe(expectedResult);
  });

  it(`should return 278783190 with actual expense report`, () => {
    const input = getReportEntries();
    const expectedResult = 278783190;

    const result = partTwo(input);

    expect(result).toBe(expectedResult);
  });
});
