export const parse = (value: string) => {
  const now = new Date();
  const [month, date, year] = value.split(/\D/).map((part) => parseInt(part));
  return new Date(year || now.getUTCFullYear(), month - 1, date);
};

export const format = (date: Date) => {
  return new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate()
  ).toLocaleString("en-US", {
    day: "2-digit",
    month: "numeric",
    year: "numeric",
  });
};
