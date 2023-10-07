import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux'
import store from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CookiesProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </CookiesProvider>

);
