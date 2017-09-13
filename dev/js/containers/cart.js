import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {clearFromCart} from '../actions/index';
import ProductItem from './productItem';


class Cart extends Component {


    removeFromCart = (id) => {
        this.props.dispatch(clearFromCart(id));
    };


    renderList = () => {
        return this.props.products.map((product) => (<ProductItem
                                                        key={product.id}
                                                        product={product}
                                                    />));
    }

    render() {
        if (!this.props.addedProducts.length) {
            return null;
        }

        return (
            <div>
                <h3>Your cart Summary</h3>
                <div className="col-md-12">
                    <span className="col-md-6">
                        Items in cart <br/> {this.props.totalQuantity}
                    </span>
                    <span className="col-md-6">
                        Total Rs. <br/> {this.props.totalPrice}
                    </span>
                </div>
                <br/>
                <table className="table table-hover  ">
                <thead>
                    <tr>
                        <td>Item</td>
                        <td>Quantity</td>
                        <td>Total</td>
                        <td></td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        _.map(this.props.addedProducts, (product) => {
                            return (
                            <tr key={product.id}>
                                <td>{product.productName}</td>
                                <td>{product.quantityInCart}</td>
                                <td>{product.quantityInCart * product.price}</td>
                                <td><button className="btn btn-danger" onClick={() => {this.removeFromCart(product.id)}}>Remove</button></td>
                            </tr>);
                        })

                    }
                    </tbody>
                </table>
            </div>
        );
    }

}

function mapStateToProps(state) {

    let totalQuantity = 0;
    let totalPrice = 0;

    const cart = state.cart;
    const  products = state.products;
    const addedProducts = [];

    _.each(cart, (product) => {
        totalQuantity += product.quantity;
        const item = _.find(products, {id: product.id});
        totalPrice += (item.price * product.quantity);
        item.quantityInCart = product.quantity;
        addedProducts.push({ ...item});
    });

    return {
        addedProducts,
        cart,
        totalQuantity,
        totalPrice,
    };
}

// function matchDispatchToProps(dispatch){
//     return bindActionCreators({clearFromCart: clearFromCart}, dispatch);
// }

Cart.defaultProps = {
    items: [],
}

export default connect(mapStateToProps)(Cart);
