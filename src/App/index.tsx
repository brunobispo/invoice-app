import ThemeProvider from "style/ThemeProvider";
import Container from "components/atoms/Container";
import DateButton from "components/molecules/DateButton";
import Button from "components/atoms/Button";
import InvoiceList from "components/organisms/InvoiceList";
import TotalSummary from "components/organisms/TotalSummary";
import { GlobalStyle } from "./style";

const items = [
  {
    creation: new Date(),
    client: "Bruno Bispo",
    id: "bf67e1af6346e6a15318553a35d3a828941d552d",
    amount: 23.32,
    isPaid: false,
  },
  {
    creation: new Date(),
    client: "Bruno Bispo",
    id: "cf67e1af6346e6a15318553a35d3a828941d552d",
    amount: 23.32,
    isPaid: true,
  },
  {
    creation: new Date(),
    client: "Bruno Bispo",
    id: "ff67e1af6346e6a15318553a35d3a828941d552d",
    amount: -23.32,
    isPaid: true,
  },
];

const App = () => (
  <ThemeProvider>
    <GlobalStyle />
    <Container>
      <DateButton date={new Date()} onChange={console.log} />
    </Container>
    <Container>
      <TotalSummary
        total={201372}
        pending={19381}
        paid={18384}
        refunded={-189373}
      />
    </Container>
    <Container>
      <Button>+ Create Invoice</Button>
    </Container>
    <Container>
      <InvoiceList items={items} />
    </Container>
  </ThemeProvider>
);

export default App;
