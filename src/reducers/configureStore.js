import { createStore } from 'redux'
import { mainReducer } from './reducers'

export default function configureStore(initialState) {
    const store = createStore(
        mainReducer,
        initialState        
        +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ); 

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers')
            store.replaceReducer(nextRootReducer);
        })
    }

    return store;
}