import ActionTypes from './actionTypes';
import _ from 'lodash';


const saveToLocalStorage = (state) => {
  const str = JSON.stringify(state);
  localStorage.setItem('cart', str);
}


export default function (state = undefined, action) {
    // debugger;
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:
            const itemToAdd = _.find(state, {id: action.payload});
            let newState = [].concat(state);
            if (itemToAdd) {
              itemToAdd.quantity++;
              saveToLocalStorage(newState);
              return newState;
            } else {
              newState.push({
                id: action.payload,
                quantity: 1,
              });
            }
            saveToLocalStorage(newState);
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
              saveToLocalStorage(newState);
              return newState;
            }
            saveToLocalStorage(newState);
            return newState;
            break;

          case ActionTypes.CLEAR_FROM_CART:
            let itemToClear = _.find(state, {id: action.payload}) || undefined;
            newState = [].concat(state);
            if (itemToClear) {
              newState.splice(newState.indexOf(itemToClear), 1);
            }
            saveToLocalStorage(newState);
            return newState;
          break;
    }

    if (state === undefined) {
      const items = JSON.parse(localStorage.getItem('cart')) || [];
      state = items;
    }
    return state;
}
