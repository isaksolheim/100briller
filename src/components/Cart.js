import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem,addQuantity,subtractQuantity} from '../actions/cartActions';

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
								<div className="row">
									<div className="col-sm-2 hidden-xs"><img src={item.img} width='85px' alt="produkt" className="img-responsive"/></div>
									<div className="col-sm-10">
										<h4 className="nomargin">{item.title}</h4>
									</div>
								</div>
							</td>
							<td data-th="Price">{item.price} NOK</td>
							<td data-th="Quantity">
								{/*<input type="number" className="form-control text-center" value={item.quantity} />*/}
                {item.quantity}
                <i style={{cursor: 'pointer'}} onClick={ () => {this.handleAddQuantity(item.id)}} className="fas fa-arrow-alt-circle-up"></i>
                <i style={{cursor: 'pointer'}} onClick={ () => {this.handleSubtractQuantity(item.id)}} className="fas fa-arrow-alt-circle-down"></i>
							</td>
							<td data-th="Subtotal" className="text-center">{item.price * item.quantity} NOK</td>
							<td className="actions" data-th="">
								<button onClick={ () => {this.handleRemove(item.id)}} className="btn btn-danger btn-sm"><i className="fa fa-trash"></i></button>								
							</td>
						</tr>
					</tbody>
          )
        })
      );
    } else {
      addedItems = (
        <tbody>
          <tr>
            <td>Du har ingen produkter i handlekurven.</td>
          </tr>
        </tbody>
      );
    }

    return(
      <div className="container">
        <table className="table table-hover table-condensed" id="cart">
          <thead>
						<tr>
							<th style={{width: '50%'}}>Produkt</th>
							<th style={{width: '10%'}}>Pris</th>
							<th style={{width: '8%'}}>Antall</th>
							<th style={{width: '22%'}} className="text-center">Subtotal</th>
							<th style={{width: '10%'}}></th>
						</tr>
					</thead>
          {addedItems}
          <tfoot>
						<tr>
							<td><Link to="/produkter" className="btn btn-warning"><i className="fa fa-angle-left"></i>Tilbake</Link></td>
							<td colSpan="2" className="hidden-xs"></td>
							<td className="hidden-xs text-center"><strong>Total {this.props.total} NOK</strong></td>
							<td><div className="btn btn-success btn-block" style={{cursor: 'pointer'}}>Kjøp <i className="fa fa-angle-right"></i></div></td>
						</tr>
					</tfoot>
        </table>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return{
    items: state.addedItems,
    total: state.total
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