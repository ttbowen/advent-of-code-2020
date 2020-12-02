import { partOne } from "../part-one";
import { getReportEntries } from "../index";

describe(`2020 - Day 1 - Part One`, () => {
  it(`should return 514579 with example expense report`, () => {
    const report = `1721
          979
          366
          299
          675
          1456
          `;
    const input = report.split("\n").map((number) => parseInt(number));
    const expectedResult = 514579;

    const result = partOne(input);

    expect(result).toBe(expectedResult);
  });

  it(`should return 538464 with actual expense report`, () => {
    const input = getReportEntries();
    const expectedResult = 538464;

    const result = partOne(input);

    expect(result).toBe(expectedResult);
  });
});
