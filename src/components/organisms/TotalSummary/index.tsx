import AmountText from "components/atoms/AmountText";
import { Container, Value, Title, Item } from "./style";

type TotalSummaryProps = {
  total: number;
  pending: number;
  paid: number;
  refunded: number;
};

const TotalSummary = ({
  total,
  pending,
  paid,
  refunded,
}: TotalSummaryProps) => (
  <Container>
    <Item isFeatured>
      <Title id="summary-total">Total Received</Title>
      <Value isFeatured aria-describedby="summary-total">
        <AmountText amount={total} />
      </Value>
    </Item>

    <Item>
      <Title id="summary-pending">Pending</Title>
      <Value variant="pending" aria-describedby="summary-pending">
        <AmountText amount={pending} />
      </Value>
    </Item>

    <Item>
      <Title id="summary-paid">Paid</Title>
      <Value variant="paid" aria-describedby="summary-paid">
        <AmountText amount={paid} />
      </Value>
    </Item>

    <Item>
      <Title id="summary-refunded">Refunded</Title>
      <Value variant="refunded" aria-describedby="summary-refunded">
        <AmountText amount={refunded} />
      </Value>
    </Item>
  </Container>
);

export default TotalSummary;
