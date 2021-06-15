import ThemeProvider from "../style/ThemeProvider";
import Container from "../components/Container";
import DateButton from "../components/DateButton";
import Button from "../components/Button";
import InvoiceList from "../components/InvoiceList";
import { GlobalStyle } from "./style";

const App = () => (
  <ThemeProvider>
    <GlobalStyle />
    <Container>
      <DateButton date={new Date()} onChange={console.log} />
    </Container>
    <Container>
      <Button>+ Create Invoice</Button>
    </Container>
    <Container>
      <InvoiceList
        items={[
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
        ]}
      />
    </Container>
  </ThemeProvider>
);

export default App;
