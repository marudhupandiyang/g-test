/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

import STUB_PRODUCTS from './../stub/products';

export default function (state = null, action) {
    switch (action.type) {
        default:
        case 'GET_PRODUCTS':
            // return action.payload;
            return STUB_PRODUCTS;
            break;
    }
    return state;
}
