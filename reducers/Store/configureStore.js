import { createStore } from 'redux';
import calculateReducer from '../Reducers/calculateReducer';

const defaultInitialState = {
}; 

export const configureStore = (initialState) => {
    if (!initialState) {
        initialState = defaultInitialState;
    }
    let store = createStore(calculateReducer, initialState);

    if (module.hot) {
        module.hot.accept('../Reducers/calculateReducer', () => {
            const nextRootReducer = require('../Reducers/calculateReducer')
            store.replaceReducer(nextRootReducer)
        });
    }

    return store;
};