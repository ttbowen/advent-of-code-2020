export function partOne(boardingPasses: string[]): number {
  const radix = 2;
  const ids = boardingPasses.map((pass) =>
    parseInt(pass.replace(/F|L/g, "0").replace(/B|R/g, "1"), radix)
  );

  return Math.max(...ids);
}
