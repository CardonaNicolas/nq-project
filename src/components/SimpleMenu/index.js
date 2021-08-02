import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { NavLink } from 'react-router-dom'

import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaTools,
  FaHome,
  FaEnvelope,
  FaEye,
  FaEuroSign
} from 'react-icons/fa';

import logo from 'public/img/NQ.png';

import SimpleMenuStyled from './SimpleMenuStyled'
import MenuIcon from '@material-ui/icons/Menu'

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <SimpleMenuStyled>
      <div className="mobile-menu">
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <MenuIcon />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <NavLink
              activeClassName="active-menu"
              className=""
              exact
              to="/"
            >
              Home
            </NavLink></MenuItem>
          <MenuItem onClick={handleClose}>
            <NavLink
              activeClassName="active-menu"
              className=""
              exact
              to="/réalisations"
            >
              Portfolio
            </NavLink></MenuItem>
          <MenuItem onClick={handleClose}>
            <NavLink
              activeClassName="active-menu"
              className=""
              exact
              to="/tarif"
            >
              Tarifs
            </NavLink></MenuItem>
          <MenuItem onClick={handleClose}>
            <NavLink
              activeClassName="active-menu"
              className=""
              exact
              to="/compétences"
            >
              Skills
            </NavLink></MenuItem>
        </Menu>
      </div>
      <div className="nav-container-logo">
        <NavLink
          activeClassName=""
          className=""
          exact
          to="/"
        >
          <img src={logo} alt="Logo NQ" />
        </NavLink>
      </div>
      <div className="picto-rs-container">
        <a href="https://www.linkedin.com/in/nicolascardona" target="_blank"><FaLinkedinIn className="nav-icons-socials" /></a>
        <a href="https://wa.link/6vzs30" target="_blank"><FaWhatsapp className="nav-icons-socials" /></a>
        <a href="https://github.com/CardonaNicolas" target="_blank"><FaGithub className="nav-icons-socials" /></a>
        <a href="https://www.instagram.com/niko.cardo/" target="_blank"><FaInstagram className="nav-icons-socials" /></a>
      </div>
    </SimpleMenuStyled>
  );
}