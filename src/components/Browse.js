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
      <div className="row">
        {this.props.items.map(product => (
          <div className="col-md-4" key={product.id}>
            <div className="card mb-4 box-shadow">
              <img className="card-img-top" src={product.img} alt="produkt" />
              <div className="card-body">
                <p className="card-text">{product.title}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">{product.price} NOK</small>
                  <Link to={`/produkter/${product.id}`} key={product.id} className="btn btn-primary">Kjøp</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
    return(
      <div className="album py-5 bg-light">
        <div className="container">
          {product}
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