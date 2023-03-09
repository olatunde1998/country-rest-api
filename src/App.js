import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "components/Home";
import Country from "components/Country";
// import AllCountry from "components/AllCountry";
import { createMuiTheme, ThemeProvider } from "@mui/material";

const theme = createMuiTheme({
  palette: {
    primary:{
      main: "#2B3945",
    } 
  },
  typography: {
    fontFamily:"Nunito",
    fontWeightRegular:400,
    fontWeightMedium: 500
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Country />} />
          {/* <Route path="/allcountry" element={<AllCountry />} /> */}
          {/* <Route path="/allcountry/:id" element={<Country />} /> */}
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
