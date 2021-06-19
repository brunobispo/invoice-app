import Button from "components/atoms/Button";
import { Container } from "./style"

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
  <Container>
    <Button
      variant="secondary"
      isGroup
      isCompact
      onClick={() => onChange(addMonths(date, -1))}
      aria-label="Previous Month"
    >
      {"<"}
    </Button>

    <Button variant="secondary" isGroup isCompact isResponsive disabled>
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
  </Container>
);

export default DateButton;
