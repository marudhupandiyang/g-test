import ActionTypes from './../reducers/actionTypes';

export const addToCart = (id) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: id
    }
};


export const removeFromCart = (id) => {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        payload: id
    }
};
