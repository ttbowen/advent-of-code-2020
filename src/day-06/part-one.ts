export function partOne(groups: string[]): number {
  const getAnswers = (group: string) =>
    group
      .split("\n")
      .join("")
      .split("")
      .filter((item, index, self) => self.indexOf(item) === index);

  return groups.reduce((prev, current) => getAnswers(current).length + prev, 0);
}
