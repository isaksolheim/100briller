import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

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

  render(){
    const product = (
      <div className="products">
        {this.props.items.map(product => (
          <Link to={`/produkter/${product.id}`} key={product.id}>
            <div className="product">
              <img src={product.img} alt="briller" />
              <div className="title">{product.title}</div>
              <div className="price">{product.price} NOK</div>
            </div>
          </Link>
        ))}
      </div>
    );

    const gridView = (
      <div className="grid-view">
        {product}
      </div>
    );

    const listView = (
      <div className="list-view">
        {product}
      </div>
    );

    const singleView = (
      <div className="single-view">
        {product}
      </div>
    );

    return(
      <div>
        <div className="browse-container">
          <div className="controls">
            <h1>Produkter</h1>
            <div className="buttons">
              View: 
              <div className="view-button" onClick={this.handleClick}><i id="grid" className="fas fa-th-large"></i></div>
              <div className="view-button" onClick={this.handleClick}><i id="list" className="fas fa-list"></i></div>
              <div className="view-button" onClick={this.handleClick}><i id="single" className="fas fa-square"></i></div>
            </div>
          </div>
          <hr />
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

export default connect(mapStateToProps)(Browse)