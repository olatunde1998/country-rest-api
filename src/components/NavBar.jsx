import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";



function NavBar() {

  return (
    <Box sx={{ display: "flex"}}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
           Where in the World?
          </Typography>
          <Box sx={{ display: { xs: "block", sm: "block" } }}>
            {/* {navItems.map((item) => ( */}
            <Button sx={{ color: "#fff" }}>
              {/* {item} */}
              Home
            </Button>
            <Link to="#">
              <Button sx={{ color: "#fff" }}>
                {/* {item} */}
                country
              </Button>
            </Link>
            {/* ))} */}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default NavBar;
