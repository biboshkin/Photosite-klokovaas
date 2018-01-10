import { createStore } from 'redux'
import { mainReducer } from './reducers'

export default function configureStore(initialState) {
    const store = createStore(mainReducer, initialState); 

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers')
            store.replaceReducer(nextRootReducer);
        })
    }

    return store;
}