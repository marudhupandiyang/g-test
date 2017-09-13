import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addToCart, removeFromCart} from '../actions/index';
import _ from 'lodash';

class ProductItem extends Component {


   addToCart = (id) => {
        this.props.dispatch(addToCart(id));
    };

    removeFromCart = (id) => {
        this.props.dispatch(removeFromCart(id));
    };

    renderActions = (id) => {
        if (this.props.inCartCount) {
            return (<div>
                        <span className="btn btn-danger" onClick={() => this.removeFromCart(id)}> - </span>
                        <span > {this.props.inCartCount} in cart </span>
                        <span className="btn btn-primary" onClick={() => this.addToCart(id)}> + </span>
                    </div>)
        } else {
            return (<button
                        className="btn btn-secondary"
                        onClick={() => this.addToCart(id)}
                    >
                        Add to cart
                </button>);
        }
    }

    render() {
        const product = this.props.product;
        return (
                <li
                    className="product-item col-md-3"
                    key={product.id}
                >

                    <img src={product.imageurl} />
                    <div>
                        <p className="brand-name">{product.brandName}</p>
                        <p className="product-name">{product.productName}</p>
                    </div>
                    <div className="product-price">
                        Rs. {product.price}
                    </div>

                    <div className="product-actions-holder">
                        {this.renderActions(product.id)}
                    </div>
                </li>
            );
    }
}


function mapStateToProps(state, props) {

    let inCartCount = 0;
    if (props.product) {
        const item = _.find(state.cart, { id: props.product.id});
        inCartCount = item ? item.quantity : 0;
    }
    return {
        inCartCount
    };
}

export default connect(mapStateToProps)(ProductItem);
