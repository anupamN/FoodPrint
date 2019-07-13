import React from 'react';
import './style.css';
import logo from '../../logo.png';
import Button from '@material-ui/core/Button';

const Nav = () => (
  <nav className="Nav-wrapper">
    <img alt="logo" width="400px" src={logo} />
    <span className="Nav-right">
      <Button>About</Button>
      <Button variant="outlined" color="primary">
        Login
      </Button>
    </span>
  </nav>
);

export default Nav;