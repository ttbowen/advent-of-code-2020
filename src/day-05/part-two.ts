export function partTwo(boardingPasses: string[]): number {
  const radix = 2;
  const boardingIds = boardingPasses.map((pass) =>
    parseInt(pass.replace(/F|L/g, "0").replace(/B|R/g, "1"), radix)
  );

  return boardingIds
    .sort((a, b) => a - b)
    .reduce((accumulator, currentValue, currentIndex, sourceArray) =>
      sourceArray[currentIndex - 1] + 1 === currentValue
        ? accumulator
        : sourceArray[currentIndex - 1] + 1
    );
}
