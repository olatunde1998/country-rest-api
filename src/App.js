import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Country from "pages/Country";
// import AllCountry from "components/AllCountry";
import { createMuiTheme, ThemeProvider } from "@mui/material";
import NotFound from "pages/NotFound";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2B3945",
    },
  },
  typography: {
    fontFamily: "Nunito",
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/:id" element={<Country />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
