import ActionTypes from './actionTypes';
import _ from 'lodash';

export default function (state = [], action) {
    // debugger;
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:
            const itemToAdd = _.find(state, {id: action.payload});
            let newState = [].concat(state);
            if (itemToAdd) {
              itemToAdd.quantity++;
              return newState;
            } else {
              newState.push({
                id: action.payload,
                quantity: 1,
              });
            }
            return newState;
            break;

        case ActionTypes.REMOVE_FROM_CART:
            const itemToRemove = _.find(state, {id: action.payload});
            newState = [].concat(state);
            if (itemToRemove) {
              itemToRemove.quantity--;
              if (!itemToRemove.quantity) {
                let newState = _.remove(state, (id) => {
                  return itemToRemove.id === action.payload;
                });
              }
              return newState;
            }
            return newState;
            break;
    }
    return state;
}
