export function partTwo(groups: string[]): number {
  const getAnswers = (group: string) =>
    group
      .split("\n")
      .map((answers) => answers.split(""))
      .reduce((acc, current) =>
        acc.filter((answer) => current.includes(answer))
      );

  return groups.reduce((prev, current) => getAnswers(current).length + prev, 0);
}
