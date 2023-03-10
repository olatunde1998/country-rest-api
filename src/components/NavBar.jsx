import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';



function NavBar() {

  return (
    <Box sx={{ display: "flex"}}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="body"
            component="div"
            sx={{ flexGrow: 1}}
          >
           Where in the World?
          </Typography>
          <Box sx={{display: "flex"}}>
          <NightlightRoundIcon sx={{marginRight:"10px"}}/>
            <Typography
            variant="body"
            component="div"
            sx={{ flexGrow: 1}}
          >
           Dark Mode
          </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default NavBar;
