import * as React from "react";
import useStyle from "./style";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";


const Header = (props) => {

const classes = useStyle();
  return (
    <AppBar position="static" className={classes.navBar}>

          <Typography align='right' component="h1" className={classes.navBarLogo} sx={{display:{sm:'none',md:'flex'}}}>
            {props.title}
          </Typography>

    </AppBar>
  );
};
export default Header;
