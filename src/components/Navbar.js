import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends React.Component {
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
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <Link to="/" className="navbar-brand">100briller</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/produkter" className="nav-link">Produkter</Link>
            </li>
            <li className="nav-item">
              <Link to="/om-oss" className="nav-link">Om oss</Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link">Handlekurv ({itemsInCart})</Link>
            </li>    
          </ul>
        </div>  
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
  }
}

export default connect(mapStateToProps)(Navbar);