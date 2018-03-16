import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import stores from './stores';
import {Provider} from 'mobx-react';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider {...stores}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
