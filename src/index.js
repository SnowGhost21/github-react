import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore, { history } from './store/ConfigureStore'
import { AppContainer } from 'react-hot-loader';
import Root from './components/Root'
const store = configureStore();

console.log(history)
ReactDOM.render(
    <AppContainer>
        <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
);
registerServiceWorker()