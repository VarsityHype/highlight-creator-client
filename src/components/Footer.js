import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";

const logo = require("../assets/vype-logo.png");

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },

  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  }

}));

export default function Footer() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  //   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
    // handleMobileMenuClose();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    ></Menu>
  );

  return (
    <div className={classes.grow} id="footer">
      <AppBar
        position="static"
        style={{ background: "black", boxShadow: "none" }}

      >
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Typography className={classes.title} variant="caption">
            ©2020 VYPE Media
            <br /> 1314 Brittmoore Rd
            <br /> Houston, TX 77043
          </Typography>
          {/* <div className={classes.grow} /> */}

          <div>

          </div>
          <div className={classes.sectionDesktop}>
            <MenuItem>
              <a
                className="menu-item-a"
                href="https://www.facebook.com/VYPETexas/"
              >
                <FacebookIcon />
              </a>
            </MenuItem>
            <MenuItem>
              <a className="menu-item-a" href="https://twitter.com/vypehouston">
                <TwitterIcon />
              </a>
            </MenuItem>
            <MenuItem>
              <a
                className="menu-item-a"
                href="https://www.youtube.com/channel/UCRG0W0Drq75lntGXtARZ66g"
              >
                <YouTubeIcon />
              </a>
            </MenuItem>
            <MenuItem>
              <a
                className="menu-item-a"
                href="https://www.instagram.com/vypetexas/"
              >
                <InstagramIcon />
              </a>
            </MenuItem>
          </div>
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu} */}
      {renderMenu}
    </div>
  );
}
