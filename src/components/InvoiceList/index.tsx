import { InvoiceType } from "../../types";
import InvoiceItem from "../InvoiceItem";
import { Container } from "./style";

type InvoiceListProps = {
  items: InvoiceType[];
};

const InvoiceList = ({ items }: InvoiceListProps) => (
  <Container>
    {items.map((data) => (
      <InvoiceItem {...data} key={data.id} />
    ))}
  </Container>
);

export default InvoiceList;
