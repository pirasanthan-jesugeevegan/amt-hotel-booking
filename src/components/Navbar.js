import React, { Component } from 'react';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';
//import FormatAlignRightIcon from "@material-ui/icons/FormatAlignRight";
import { FaAlignRight } from 'react-icons/fa';

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Beach Resort" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}
          >
            <li>
              <Link data-testid="nav-home" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link data-testid="nav-rooms" to="/rooms">
                Rooms
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
