import { Provider as ReduxProvider } from "react-redux";
import ThemeProvider from "style/ThemeProvider";
import { GlobalStyle } from "./style";
import Dashboard from "components/pages/Dashboard";
import { store } from "state/store";

const App = () => (
  <ReduxProvider store={store}>
    <ThemeProvider>
      <GlobalStyle />
      <Dashboard />
    </ThemeProvider>
  </ReduxProvider>
);

export default App;
