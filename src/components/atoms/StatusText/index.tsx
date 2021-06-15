import { InvoiceType } from "../../../types";
import { Container } from "./style";

function getStatus(amount: number, isPaid: boolean): string {
  switch (true) {
    case !isPaid:
      return "Pending";
    case amount > 0 && isPaid:
      return "Paid";
    case amount < 0 && isPaid:
      return "Refunded";
    default:
      throw new Error("Status not found");
  }
}

type StatusTextProps = Pick<InvoiceType, "amount" | "isPaid">;

const StatusText = ({ amount, isPaid }: StatusTextProps) => (
  <Container isPaid={isPaid} isPositive={amount > 0}>
    {getStatus(amount, isPaid)}
  </Container>
);

export default StatusText;
