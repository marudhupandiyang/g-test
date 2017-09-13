import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';
import ProductItem from './productItem';


class ProductList extends Component {

    renderList = () => {
        return this.props.products.map((product) => (<ProductItem
                                                        key={product.id}
                                                        product={product}
                                                    />));
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
        products: state.products,
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser: selectUser}, dispatch);
}

ProductList.defaultProps = {
    products: [],
}

export default connect(mapStateToProps, matchDispatchToProps)(ProductList);
