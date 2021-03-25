import {
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
  TableSortLabel,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import Home from "@material-ui/icons/Home";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Menu from "@material-ui/core/Menu";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const headersData = [
  // {
  //   label: "Apie mus",
  //   href: "/about",
  // },
  {
    label: "Kontaktai",
    href: "/contact-us",
  },
  {
    label: "Prekių kategorijos",
    href: "/category",
  },
  {
    label: "Prisijungti",
    href: "/login",
  },
  {
    label: "Prekės",
    href: "/products",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#212121",
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  basketHover: {
    "&:hover": {
      color: "#fff",
    },
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
    "&:hover": {
      color: "#fff",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}));

export default function Navbar({totalQuantity}) {
  const { header, menuButton, toolbar, drawerContainer } = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [access_token, setaccess_token] = useState(false);
  const classes = useStyles();

  

  function clerLocalStorage() {
    console.log("logout");
    localStorage.clear();
    document.location.reload();
  }

  function getToken() {
    const tokenString = localStorage.getItem("access_token");
    return tokenString;
  }

  useEffect(() => {
    console.log("labas");
    setaccess_token(getToken());
  }, []);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {smartEShop}

        <div>{getMenuButtons()}</div>
        {access_token && (
          <div>
      
             <Link href="/cart" color="inherit" className={classes.basketHover}>
         
             <IconButton aria-label="show basket" color="inherit">
              <Badge  badgeContent={totalQuantity} color="secondary" >
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            
  </Link>
            

            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Mano užsakymai</MenuItem>
              <MenuItem onClick={() => clerLocalStorage()}>Atsijungti</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>
            {getDrawerChoices()}

            <Link to={"/login"} component={RouterLink}>
              <MenuItem>Prisijungti</MenuItem>
            </Link>
          </div>
        </Drawer>

        <div>{smartEShop}</div>
        {access_token && (
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
                
              <MenuItem onClick={handleClose}>Mano užsakymai</MenuItem>
              <MenuItem onClick={() => clerLocalStorage()}>Atsijungti</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <>
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
       
        <Link to={"/login"} component={RouterLink}>
              <MenuItem>Prisijungti</MenuItem>
            </Link>
            </>
        
      );
    });
  };

  const smartEShop = (
    <Button
      variant="link"
      style={{ fontSize: 100, color: "#fafafa" }}
      startIcon={<Home />}
      href="/"
    />
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className={header}>
        <FormGroup></FormGroup>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
