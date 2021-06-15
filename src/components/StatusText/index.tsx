import { InvoiceType } from "../../types";
import { Container } from "./style";

function getStatus(
  amount: number,
  isPaid: boolean
): "pending" | "paid" | "refunded" {
  switch (true) {
    case !isPaid:
      return "pending";
    case amount > 0 && isPaid:
      return "paid";
    case amount < 0 && isPaid:
      return "refunded";
    default:
      throw new Error("Status not found");
  }
}

type StatusTextProps = Pick<InvoiceType, "amount" | "isPaid">;

const StatusText = ({ amount, isPaid }: StatusTextProps) => (
  <Container isPaid={isPaid} isPositive={amount > 0}>
    {getStatus(amount, isPaid).replace(/^\w/, (char) => char.toUpperCase())}
  </Container>
);

export default StatusText;
