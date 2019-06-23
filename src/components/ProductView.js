import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';

class ProductView extends React.Component {
  constructor(props) {
    super(props);

    this.productInfo = this.productInfo.bind(this);
  }

  handleAddClick = (id) => {
    this.props.addToCart(id); 
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
      <div class="container">
        <hr class="featurette-divider" />
        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">{product.title} </h2>
            <p class="lead">{product.price} NOK</p>
              <div className="btn btn-primary" onClick={()=>{this.handleAddClick(product.id)}} style={{cursor: 'pointer'}}>Legg til handlekurv</div>
            </div>
            <div class="col-md-5">
            <img class="featurette-image img-fluid mx-auto" src={product.img} alt="product" />
          </div>
        </div>
      </div>
      /*
      <div className="product-container">
        <img src={product.img} alt="briller" />
        <div className="info">
          <div className="title">{product.title}</div>
          <div className="price">{product.price} NOK</div>
          <div className="add-button" onClick={()=>{this.handleAddClick(product.id)}}>Legg til</div>
          <div className="desc">{product.desc}</div>
        </div>
      </div>
      */
    );
  }

  render() {
    const yee = this.productInfo();
    return(
      <div>
        {yee}
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