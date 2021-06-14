import ThemeProvider from "../style/ThemeProvider";
import Container from "../components/Container";
import DateButton from "../components/DateButton";
import Button from "../components/Button";
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
  </ThemeProvider>
);

export default App;
