import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import stores from './stores/todoList';
import {Provider} from 'mobx-react';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider {...stores}>
        <App stores={stores}/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
