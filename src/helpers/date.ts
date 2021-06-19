export const format = (value: Date) => {
  return new Date(
    value.getUTCFullYear(),
    value.getUTCMonth(),
    value.getUTCDate()
  ).toLocaleString("en-US", { day: "2-digit", month: "short" });
};
