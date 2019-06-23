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
            <tbody key={item.id}>
						<tr>
							<td data-th="Product">
								<div class="row">
									<div class="col-sm-2 hidden-xs"><img src={item.img} width='85px' alt="produkt" class="img-responsive"/></div>
									<div class="col-sm-10">
										<h4 class="nomargin">{item.title}</h4>
									</div>
								</div>
							</td>
							<td data-th="Price">{item.price} NOK</td>
							<td data-th="Quantity">
								<input type="number" class="form-control text-center" value={item.quantity} />
							</td>
							<td data-th="Subtotal" class="text-center">{item.price * item.quantity} NOK</td>
							<td class="actions" data-th="">
								<button class="btn btn-info btn-sm"><i class="fa fa-refresh"></i></button>
								<button class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i></button>								
							</td>
						</tr>
					</tbody>
            /*
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
            */
          )
        })
      );
    } else {
      addedItems = <p>Du har ingen produkter i handlekurven.</p>;
    }

    return(
      <div className="container">
        <table className="table table-hover table-condensed" id="cart">
          <thead>
						<tr>
							<th style={{width: '50%'}}>Product</th>
							<th style={{width: '10%'}}>Price</th>
							<th style={{width: '8%'}}>Quantity</th>
							<th style={{width: '22%'}} class="text-center">Subtotal</th>
							<th style={{width: '10%'}}></th>
						</tr>
					</thead>
          {addedItems}
          <tfoot>
						<tr class="visible-xs">
							<td class="text-center"><strong>Total 1.99</strong></td>
						</tr>
						<tr>
							<td><a href="#" class="btn btn-warning"><i class="fa fa-angle-left"></i> Continue Shopping</a></td>
							<td colspan="2" class="hidden-xs"></td>
							<td class="hidden-xs text-center"><strong>Total $1.99</strong></td>
							<td><a href="#" class="btn btn-success btn-block">Checkout <i class="fa fa-angle-right"></i></a></td>
						</tr>
					</tfoot>
        </table>
      </div>
      
      /*
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
      */
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