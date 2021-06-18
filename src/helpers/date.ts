const date = (value: string) =>
  new Date(value).toLocaleString("en-US", { day: "2-digit", month: "short" });

export default date;
