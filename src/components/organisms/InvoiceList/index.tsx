import { InvoiceType } from "types";
import InvoiceItem from "components/molecules/InvoiceItem";

import { Container, Title, Header } from "./style";

type InvoiceListProps = {
  items: InvoiceType[];
};

const InvoiceList = ({ items }: InvoiceListProps) => (
  <Container>
    <Header aria-hidden>
      <Title>Date</Title>
      <Title>Id</Title>
      <Title>Client</Title>
      <Title>Amount</Title>
      <Title>Status</Title>
    </Header>

    {items.map((data) => (
      <InvoiceItem {...data} key={data.id} />
    ))}
  </Container>
);

export default InvoiceList;
