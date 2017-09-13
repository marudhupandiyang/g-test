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
            let itemToRemove = _.find(state, {id: action.payload}) || undefined;
            newState = [].concat(state);
            if (itemToRemove) {
              itemToRemove.quantity--;
              if (!itemToRemove.quantity) {
                newState.splice(newState.indexOf(itemToRemove), 1);
              }
              return newState;
            }
            return newState;
            break;

          case ActionTypes.CLEAR_FROM_CART:
            let itemToClear = _.find(state, {id: action.payload}) || undefined;
            newState = [].concat(state);
            if (itemToClear) {
              newState.splice(newState.indexOf(itemToClear), 1);
            }
            return newState;
          break;
    }
    return state;
}
