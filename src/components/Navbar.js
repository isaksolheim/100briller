import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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

    // just removes responsive class if we are viewing on desktop
    if (document.documentElement.clientWidth > 839) {
      navbar.className = 'navbar';
    }
  }

  getCartItems = () => {
    var numberOfItems = 0;
    for (var i = 0; i < this.props.items.length; i++) {
      numberOfItems += this.props.items[i].quantity;
    }
    return numberOfItems;
  }

  render() {
    var itemsInCart = this.getCartItems(); 

    return(
      <div className="navbar-container" id="home">
        <div className="navbar" id="navbar">
          <div className="nav-logo">100briller</div>
          <button onClick={this.slideout} className="nav-button" id="nav-button">
            <i className="fa fa-bars fa-2x"/>
          </button>
          <div className="nav-items">
            <Link to="/">
                <div className="nav-item" onClick={this.slideout}><i className="fas fa-home"></i>Hjem</div>
            </Link>
            <Link to="/produkter"> 
                <div className="nav-item" onClick={this.slideout}><i className="fas fa-glasses"></i>Produkter</div>
            </Link>
            
            <Link to="/om-oss"> 
                <div className="nav-item" onClick={this.slideout}><i className="fas fa-question"></i>Om oss</div>
            </Link>
          </div>
          <Link to="/cart">
            <div className="nav-cart"><i className="fas fa-shopping-cart fa-2x" /></div>
            <div className="nav-cart-items">{itemsInCart}</div>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
  }
}

export default connect(mapStateToProps)(Navbar);