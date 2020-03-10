import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
// import Badge from "@material-ui/core/Badge";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
// import AccountCircle from "@material-ui/icons/AccountCircle";
// import NotificationsIcon from "@material-ui/icons/Notifications";
// import MoreIcon from "@material-ui/icons/MoreVert";
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
  //   sectionMobile: {
  //     display: "flex",
  //     [theme.breakpoints.up("md")]: {
  //       display: "none"
  //     }
  //   }
}));

export default function Footer() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  //   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  //   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  //   const handleProfileMenuOpen = event => {
  //     setAnchorEl(event.currentTarget);
  //   };

  //   const handleMobileMenuClose = () => {
  //     setMobileMoreAnchorEl(null);
  //   };

  const handleMenuClose = () => {
    setAnchorEl(null);
    // handleMobileMenuClose();
  };

  //   const handleMobileMenuOpen = event => {
  //     setMobileMoreAnchorEl(event.currentTarget);
  //   };

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

  //   const mobileMenuId = "primary-search-account-menu-mobile";
  //   const renderMobileMenu = (
  //     <Menu
  //       anchorEl={mobileMoreAnchorEl}
  //       anchorOrigin={{ vertical: "top", horizontal: "right" }}
  //       id={mobileMenuId}
  //       keepMounted
  //       transformOrigin={{ vertical: "top", horizontal: "right" }}
  //       open={isMobileMenuOpen}
  //       onClose={handleMobileMenuClose}
  //     >
  //       <MenuItem>
  //         <IconButton aria-label="show 11 new notifications" color="inherit">
  //           <Badge badgeContent={0} color="secondary">
  //             <NotificationsIcon />
  //           </Badge>
  //         </IconButton>
  //         <p>Notifications</p>
  //       </MenuItem>

  //       <MenuItem onClick={handleProfileMenuOpen}>
  //         <IconButton
  //           aria-label="account of current user"
  //           aria-controls="primary-search-account-menu"
  //           aria-haspopup="true"
  //           color="inherit"
  //         >
  //           <AccountCircle />
  //         </IconButton>
  //         <p>Profile</p>
  //       </MenuItem>
  //       <MenuItem>
  //         <a className="menu-item-a-mobile" href="/playlists">
  //           Playlists
  //         </a>
  //       </MenuItem>
  //       <MenuItem>
  //         <a className="menu-item-a-mobile" href="/upload">
  //           Upload
  //         </a>
  //       </MenuItem>
  //     </Menu>
  //   );

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
