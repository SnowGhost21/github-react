import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import asyncAwait from 'redux-async-await';
import logger from 'redux-logger';
import {repositoryReducer} from '../reducers/RepositoryReducer';

export const history = createHistory();

function configureStore(initialState) {
    const reactRouterMiddleware = routerMiddleware(history);
    const middlewares = [
        reduxImmutableStateInvariant(),
        asyncAwait,
        logger,
        thunk,
        reactRouterMiddleware,
    ];

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(repositoryReducer, initialState, composeEnhancers(
        applyMiddleware(...middlewares)
    )
    );

    return store;

}

export default configureStore
