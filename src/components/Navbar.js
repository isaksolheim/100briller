import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  slideout = () => {
    var navbar = document.getElementById('navbar');
    if (navbar.className === 'navbar') {
      navbar.className += ' responsive';
    } else {
      navbar.className = 'navbar';
    }
    var button = document.getElementById('nav-button');
    if (button.innerHTML === '<i class="fa fa-bars fa-2x"></i>') {
      button.innerHTML = '<i class="fa fa-times fa-2x"></i>';
    } else {
      button.innerHTML = '<i class="fa fa-bars fa-2x"></i>';
    }
  }
  render() {
    return(
      <div className="navbar-container" id="home">
        <div className="navbar" id="navbar">
          <button onClick={this.slideout} className="nav-button" id="nav-button">
            <i className="fa fa-bars fa-2x"/>
          </button>
          <div className="nav-items">
            <Link to="/">
                <div className="nav-item" onClick={this.slideout}>100briller</div>
            </Link>
            <Link to="/kategorier"> 
                <div className="nav-item" onClick={this.slideout}>Kategorier</div>
            </Link>
            <Link to="/cart">
                <div className="nav-item" onClick={this.slideout}>Handlekurv</div>
            </Link>
            <Link to="/om-oss"> 
                <div className="nav-item" onClick={this.slideout}>Om oss</div>
            </Link>
          </div>
          <div className="nav-button"></div>
        </div>
      </div>
    );
  }
}

export default Navbar;