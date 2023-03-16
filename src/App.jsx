import MyRouter from "./MyRouter";
import { ThemeProvider } from "@material-ui/styles";
import "./App.css";
import UserContextProvider from "./Context/UserContextProvider";
import ModalContextProvider from "./Context/ModalContextProvider";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  const theme = {
    background: "blue",
    a: {
      color: "white",
      display: "block",
      backgroundColor: "purple",
      padding: 20,
    },
  };

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
