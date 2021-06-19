export const format = (value: Date) => value.toISOString().split("T")[0];
export const parse = (value: string) => new Date(value);
