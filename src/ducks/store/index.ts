import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'src/ducks/reducers';

import { rootSaga } from '../sagas';

let middleware;

const sagaMiddleware = createSagaMiddleware();

if (process.env.NODE_ENV === 'development') {
    const composeEnhancers =
        window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
    let middlewares = [sagaMiddleware];
    middleware = composeEnhancers(applyMiddleware(...middlewares));
} else {
    middleware = applyMiddleware(sagaMiddleware);
}

export const store = createStore(rootReducer, middleware);

sagaMiddleware.run(rootSaga);
