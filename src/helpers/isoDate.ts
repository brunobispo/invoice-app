const isoDate = (value: Date) => value.toISOString().split("T")[0];

export default isoDate;
