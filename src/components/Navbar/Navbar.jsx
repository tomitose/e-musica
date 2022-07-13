import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <nav className="nav-container-up">
        <div className="logos-nav-up">
          <img src="/img/Logos/Gibson_Guitar_logo.svg.png" alt="gibson" />
          <img
            src="/img/Logos/kramer-logo-color-black-bg-transparent.png"
            alt="kramer"
          />
          <img src="/img/Logos/krk_temp_footer_logo.png" alt="krk" />
          <img src="/img/Logos/Maestro_primary_black_v1.png" alt="maestro" />
        </div>
      </nav>
      <nav className="nav-container">
        <Link to={"/"}>
          <img className="guitar-logo" src="/guitar_logo.png" alt="logo" />
        </Link>
        <ul className="nav-items">
          <Link to={"/"} className="nav-items-li">
            Home
          </Link>
          <Link to={"/aboutus"} className="nav-items-li">
            About us
          </Link>
          <Button
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className="btn-models"
          >
            Models
          </Button>
        </ul>

        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Link className="btn-link-cat" to={`/category/epiphone`}>
            <MenuItem onClick={handleClose}>Epiphone</MenuItem>
          </Link>
          <Link className="btn-link-cat" to={`/category/gibson`}>
            <MenuItem onClick={handleClose}>Gibson</MenuItem>
          </Link>
        </Menu>
        <CartWidget />
      </nav>
    </div>
  );
};

export default Navbar;
