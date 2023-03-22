import MyRouter from "./MyRouter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import UserContextProvider from "./Context/UserContextProvider";
import ModalContextProvider from "./Context/ModalContextProvider";
import { Provider } from "react-redux";
import { store } from "./store";
import { forwardRef } from "react";
import { Link as RouterLink } from "react-router-dom";

const LinkBehavior = forwardRef((props, ref) => {
  const { href, ...other } = props;
  // Map href (MUI) -> to (react-router)
  return (
    <RouterLink data-testid="custom-link" ref={ref} to={href} {...other} />
  );
});

function App() {
  const theme = createTheme({
    components: {
      MuiButtonBase: {
        defaultProps: {
          LinkComponent: LinkBehavior,
        },
      },
    },
  });

  return (
    <div className="App">
      <UserContextProvider>
        <ModalContextProvider>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <MyRouter />
            </ThemeProvider>
          </Provider>
        </ModalContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
