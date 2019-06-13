import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem,addQuantity,subtractQuantity} from '../actions/cartActions';
import { PayPalButton } from "react-paypal-button-v2";
import Recipe from './Recipe';

class Cart extends Component {
  //to remove the item completely
  handleRemove = (id) => {
    this.props.removeItem(id);
  }
  //to add the quantity
  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
    this.forceUpdate();
  }
  //to substruct from the quantity
  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
    this.forceUpdate();
  }
  render(){
    let addedItems;
    if (this.props.items.length) {
      addedItems = (
        this.props.items.map(item=>{
          return(
            <div className="added-item" key={item.id}>
              <Link to={`/produkter/${item.id}`}>
                <img src={item.img} alt="vare" />
              </Link>
              <div className="title">{item.title}</div>
              <div className="price">{item.price} NOK</div>
              <div className="amount">Antall: {item.quantity}</div>
              <div className="amount-buttons">
                <i className="fas fa-minus" onClick={() => {this.handleSubtractQuantity(item.id)}}></i>
                <i className="fas fa-plus" onClick={() => {this.handleAddQuantity(item.id)}}></i>
              </div>
            </div>
          )
        })
      );
    } else {
      addedItems = <p>Du har ingen produkter i handlekurven.</p>;
    }

    return(
      <div className="cart-container">
        <h1>1. Dine varer</h1>
        {addedItems}
        <h1>2. Frakt</h1>
        <Recipe />
        <div className="paypal">
          <PayPalButton
          amount="0.01"
          onSuccess={(details, data) => {
            alert("Transaction completed by " + details.payer.name.given_name);
  
            // OPTIONAL: Call your server to save the transaction
            return fetch("/paypal-transaction-complete", {
              method: "post",
              body: JSON.stringify({
                orderID: data.orderID
              })
            });
          }}
          />
      </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return{
    items: state.addedItems,
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    removeItem: (id)=>{dispatch(removeItem(id))},
    addQuantity: (id)=>{dispatch(addQuantity(id))},
    subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);