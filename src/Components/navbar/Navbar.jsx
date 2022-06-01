import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, NavLink, useNavigate, Link } from "react-router-dom";

import "./Navbar.css";
import { useAuth } from "../../contexts/AuthContextProvider";
import { ADMIN } from "../../helpers/consts";
import { Favorite, Person, ShoppingBag } from "@mui/icons-material";

import { Badge } from "@mui/material";

const pages = [
  { name: "Home", link: "/", id: 1 },
  { name: "Store", link: "/products", id: 2 },
  { name: "About Us", link: "/about", id: 3 },
  { name: "Contactus", link: "/contacts", id: 4 },
];

const admin = { name: "Admin", link: "/admin", id: 5 };

const navigate = useNavigate;

const Navbar = () => {
  const { user, checkAuth, logout } = useAuth();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [count, setCount] = React.useState(0);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    }
  }, []);

  return (
    <AppBar sx={{ background: "black" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <img
              id="logo"
              src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/922/7343835922_bb88bce2-48f3-488c-9eb9-000ec0aaae8a.png?cb=1653546157"
              width="90px"
              heigth="80px"
              alt=""
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <NavLink to={page.link} key={page.id}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      ml: "auto",
                      my: 2,
                      color: "black",
                      display: "block",
                      fontWeight: "bold",
                    }}
                  >
                    {page.name}
                  </Button>
                </NavLink>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            KCOMICS
          </Typography>
          <Box
            sx={{
              justifyContent: "center",
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <NavLink to={page.link} key={page.id}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    ml: "auto",
                    my: 2,
                    color: "white",
                    display: "block",
                    fontWeight: "500",
                  }}
                >
                  {page.name}
                </Button>
              </NavLink>
            ))}
            {user === ADMIN ? (
              <NavLink to={admin.link} key={admin.key}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    ml: "auto",
                    my: 2,
                    color: "white",
                    display: "block",
                    fontWeight: "500",
                  }}
                >
                  ADMIN PANEL
                </Button>
              </NavLink>
            ) : (
              ""
            )}
          </Box>

          <Tooltip title="Favorites" className="navbar-icon">
            <IconButton sx={{ p: 0, color: "white" }}>
              <Favorite />
            </IconButton>
          </Tooltip>

          <Link to="/cart">
            <Tooltip title="Cart" className="navbar-icon">
              <IconButton sx={{ p: 0, color: "white" }}>
                <Badge badgeContent={count} color="error">
                  <ShoppingBag />
                </Badge>
              </IconButton>
            </Tooltip>
          </Link>

          <Box sx={{ flexGrow: 0 }}>
            {user ? (
              <Button
                color="inherit"
                sx={{ color: "white" }}
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </Button>
            ) : (
              <>
                <NavLink to="/login">
                  <Button color="inherit" sx={{ color: "white" }}>
                    Login
                  </Button>
                </NavLink>

                <NavLink to="/register">
                  <Button color="inherit" sx={{ color: "white" }}>
                    Register
                  </Button>
                </NavLink>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
