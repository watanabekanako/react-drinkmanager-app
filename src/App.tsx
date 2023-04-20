import { BrowserRouter } from "react-router-dom";

import "./App.css";

import { MainRouter } from "./router/MainRouter";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export const App = () => {
  const apptheme = createTheme({
    typography: {
      fontFamily: ["M PLUS 1p", "sans-serif"].join(","),
      // fontFamily: ["Sawarabi Gothic", "sans-serif"].join(","),
      // fontFamily: ["Noto Serif JP", "sans-serif"].join(","),
      // fontFamily: ["M PLUS Rounded 1c", "sans-serif"].join(","),
    },
  });
  return (
    <ThemeProvider theme={apptheme}>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
