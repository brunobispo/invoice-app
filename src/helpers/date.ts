const date = (value: string) => {
  const parsed = new Date(value);
  return new Date(
    parsed.getUTCFullYear(),
    parsed.getUTCMonth(),
    parsed.getUTCDate()
  ).toLocaleString("en-US", { day: "2-digit", month: "short" });
};

export default date;
