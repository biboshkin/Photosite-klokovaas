import { createStore } from 'redux'
import { mainReducer } from './reducers'
import { INITIAL_STATE } from './constants'

const isChrome = !!window.chrome && !!window.chrome.webstore;

export default function configureStore() {
    const store = createStore(
        mainReducer,
        INITIAL_STATE
    )

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers')
            store.replaceReducer(nextRootReducer);
        })
    }

    return store;
}