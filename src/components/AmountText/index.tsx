import { InvoiceType } from "../../types";
import { Container } from "./style";
import currency from "helpers/currency";

type AmountTextProps = Pick<InvoiceType, "amount">;

const AmountText = ({ amount }: AmountTextProps) => (
  <Container isPositive={amount > 0}>{currency(amount)}</Container>
);

export default AmountText;
