const isoDate = (value: string) => new Date(value).toISOString().split("T")[0];

export default isoDate;
