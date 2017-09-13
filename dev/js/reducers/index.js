import {combineReducers} from 'redux';
import ProductListReducer from './productList';
import CartReducer from './cart';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    products: ProductListReducer,
    cart: CartReducer
});

export default allReducers
