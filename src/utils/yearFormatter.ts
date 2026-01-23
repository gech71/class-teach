export const formatAcademicYear = (year: number): string => {
  const suffixes: Record<number, string> = {
    1: "1st Year",
    2: "2nd Year",
    3: "3rd Year",
    4: "4th Year",
    5: "5th Year",
  };

  return suffixes[year] ?? `${year}th Year`;
};
