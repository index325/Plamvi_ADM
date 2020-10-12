import React, { useContext, useEffect } from "react";

import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import { light as ThemeLight } from "@Utils";
import Texture from "./assets/img/wave_texture.svg"; // Import using relative path
import store from "./_redux";
import Routes from "./routes";
import { SnackbarProvider } from "notistack";

const useStyles = makeStyles((theme) => ({
  globalStyle: {
    backgroundColor: theme.palette.background.default,
    transition: "all 0.25s linear",
    minHeight: "100%",
    backgroundImage: `url(${Texture})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    height: "100%",
    zIndex: 999,
    top: "0px",
    bottom: "0px",
    overflowY: "auto",
  },
}));

const AppConstantsDefault = {
  setTheme: null,
  currentTheme: "light",
  version: "0.0.1", //Para cada commit, o terceiro número sobe 1,
  //para cada release o segundo número sobe 1
  //Para cada versão oficial lançada, o primeiro número sobe 1
  //Quando o número a esquerda sobe, os demais ficam 0, ex: 0.2.12 -> 0.3.0
  header: {
    currentTitle: "Inicio",
  },
  user: {
    name: "",
  },
};

export const AppContext = React.createContext(AppConstantsDefault);

const App = () => {
  const appConstants = useContext(AppContext);
  const classes = useStyles();
  useEffect(() => {
    document.title = `v${appConstants.version}`;
  }, [appConstants.version]);

  return (
    <SnackbarProvider maxSnack={3}>
      <Provider store={store}>
        <ThemeProvider theme={ThemeLight}>
          <AppContext.Provider value={appConstants}>
            <div className={classes.globalStyle}>
              <Router>
                <Routes />
              </Router>
            </div>
          </AppContext.Provider>
        </ThemeProvider>
      </Provider>
    </SnackbarProvider>
  );
};

export default App;
