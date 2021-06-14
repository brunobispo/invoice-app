import Button from "../Button";

function addMonths(date: Date, months: number) {
  const newDate = new Date(date.getTime());
  newDate.setMonth(date.getMonth() + months);
  return newDate;
}

type DateButtonProps = {
  date: Date;
  onChange: (date: Date) => void;
};

const DateButton = ({ date, onChange }: DateButtonProps) => (
  <div>
    <Button
      variant="secondary"
      isGroup
      isCompact
      onClick={() => onChange(addMonths(date, -1))}
      aria-label="Previous Month"
    >
      {"<"}
    </Button>

    <Button variant="secondary" isGroup isCompact disabled>
      {date.toLocaleString("en-US", { month: "long", year: "numeric" })}
    </Button>

    <Button
      variant="secondary"
      isGroup
      isCompact
      onClick={() => onChange(addMonths(date, 1))}
      aria-label="Next Month"
    >
      {">"}
    </Button>
  </div>
);

export default DateButton;
