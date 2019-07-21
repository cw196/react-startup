import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'src/redux/reducers';

let middleware;

if (process.env.NODE_ENV === 'development') {
    const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
    let middlewares = [thunk];
    middleware = composeEnhancers(applyMiddleware(...middlewares));
} else {
    middleware = applyMiddleware(thunk)
}


export const store = createStore(
    rootReducer,
    middleware
);