import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  FaLinkedinIn, 
  FaGithub, 
  FaInstagram, 
  FaWhatsapp,
  FaTools,
  FaHome,
  FaEnvelope,
  FaEye,
} from 'react-icons/fa';

import PropTypes from 'prop-types';
import NavStyled from './NavStyled';

import logo from 'public/img/NQ.png';

const Nav = () => {
  return (
    <NavStyled>
      <div className="nav-container-menu">
        <nav>
          <ul>
            <li>
              <NavLink
                activeClassName=""
                className=""
                exact
                to="/"
              >
                <FaHome className="nav-icons-menu" />
                <div>Home</div>
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName=""
                className=""
                exact
                to="/compétences"
              >
                <FaTools className="nav-icons-menu" />
                <div>Skills</div>
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName=""
                className=""
                exact
                to="/réalisations"
              >
                <FaEye className="nav-icons-menu" />
                <div>Portfolio</div>
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName=""
                className=""
                exact
                to="/contact"
              >
                <FaEnvelope className="nav-icons-menu" />
                <div>Contact</div>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="nav-container-logo">
        <NavLink
          activeClassName=""
          className=""
          exact
          to="/"
        >
          <img src={logo} alt="Logo NQ"/>
        </NavLink>
      </div>
      <div className="nav-container-socials">
          <a href="https://www.linkedin.com/in/nicolascardona"><FaLinkedinIn className="nav-icons-socials" /></a>
          <a href="https://wa.link/6vzs30"><FaWhatsapp className="nav-icons-socials" /></a>
          <a href="https://github.com/CardonaNicolas"><FaGithub className="nav-icons-socials" /></a>
          <a href="https://www.instagram.com/niko.cardo/"><FaInstagram className="nav-icons-socials" /></a>
      </div>
    </NavStyled>
  );
}

Nav.propTypes = {
}

export default Nav;