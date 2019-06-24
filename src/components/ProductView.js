import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import { Link } from 'react-router-dom';

class ProductView extends React.Component {
  constructor(props) {
    super(props);

    this.productInfo = this.productInfo.bind(this);
  }

  handleAddClick = (id) => {
    // add item to cart
    this.props.addToCart(id); 

    // create new button that takes you to cart
    document.getElementById('button').style.display = 'none';
    var link = document.getElementById('link');
    var button = document.createElement('div');
    button.innerHTML = "Til Handlekurv";
    button.className = "btn btn-warning";
    link.appendChild(button);
    document.getElementById('wrapper').appendChild(link);
  }

  redirect =  () => {
    console.log('yee');
  }

  productInfo = () => {
    // first, find the product by matching
    // id from url with id in items prop
    var products = this.props.items;
    var id = Number(this.props.match.params.id);
    var product = {};
    for (var i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        product = products[i];
        break;
      }
    }

    // what will be rendered:
    return(
      <div className="container">
        <hr className="featurette-divider" />
        <div className="row featurette">
          <div id="wrapper" className="col-md-7 order-md-2">
            <h2 className="featurette-heading">{product.title}</h2>
            <p className="lead">{product.price}NOK</p>
              <div
                id="button" 
                className="btn btn-primary" 
                onClick={()=>{this.handleAddClick(product.id)}} 
                style={{cursor: 'pointer', transition: '0.3s all'}}>
                  Legg til handlekurv
              </div>
              <Link to="/cart" id="link"></Link>
            </div>
            <div className="col-md-5">
            <img className="featurette-image img-fluid mx-auto" src={product.img} alt="product" />
          </div>
        </div>
      </div>
    );
  }

  render() {
    const view = this.productInfo();
    return(
      <div>
        {view}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductView);