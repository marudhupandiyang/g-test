import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index'


class ProductList extends Component {


    addToCart = (id) => {
        // dispatch action
    }

    renderItem = (product) => {
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
                        <button
                            className="btn btn-secondary"
                            onClick={() => this.props.addToCart(product.id)}
                        >
                            Add to cart
                        </button>
                    </div>
                </li>
            );
    }

    renderList = () => {
        return this.props.products.map((product) => this.renderItem(product));
    }

    render() {
        return (
            <ul className='product-item-container col-md-12'>
                {this.renderList()}
            </ul>
        );
    }

}

function mapStateToProps(state) {
    return {
        products: state.products
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser: selectUser}, dispatch);
}

ProductList.defaultProps = {
    products: [],
}

export default connect(mapStateToProps, matchDispatchToProps)(ProductList);
