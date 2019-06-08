import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../actions/cartActions';

class Browse extends Component{
  constructor(props) {
    super(props);

    this.state = {
      view: 'grid'
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (evt) => {
    this.setState({
      view: evt.target.id,
    })
  }

  handleAddClick = (id) => {
    this.props.addToCart(id); 
  }

  render(){
    const product = (
      <div>
        {this.props.items.map(product => (
          <div className="product" key={product.id}>
            <img src={product.img} alt="briller" />
            <div className="name">{product.name}</div>
            <div className="price">{product.price} NOK</div>
            <div className="add-button" onClick={()=>{this.handleAddClick(product.id)}}>Legg til</div>
          </div>
        ))}
      </div>
    );

    const gridView = (
      <div className="grid-view">
        grid
        {product}
      </div>
    );

    const listView = (
      <div className="list-view">
        list
        {product}
      </div>
    );

    const singleView = (
      <div className="single-view">
        single
        {product}
      </div>
    );



    /*
    let itemList = this.props.items.map( item => {
      return (
        <div className="card" key={item.id}>
          <div className="card-image">
            <img src={item.img} alt={item.title}/>
            <span className="card-title">{item.title}</span>
            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleAddClick(item.id)}}><i className="material-icons">add</i></span>
          </div>

          <div className="card-content">
            <p>{item.desc}</p>
            <p><b>Price: {item.price}$</b></p>
          </div>
        </div>
      );
    });
    */
    return(
      /*
      <div className="container">
        <h3 className="center">Our items</h3>
        <div className="box">
          {itemList}
        </div>
      </div>
      */
     <div>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
        <div className="browse-container">
          <div className="buttons">
            <div className="view-button" id="grid" onClick={this.handleClick}>Grid</div>
            <div className="view-button" id="list" onClick={this.handleClick}>List</div>
            <div className="view-button" id="single" onClick={this.handleClick}>Single</div>
          </div>
          {(this.state.view === 'grid') ? gridView : (this.state.view === 'list' ? listView : singleView)}
        </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(Browse)