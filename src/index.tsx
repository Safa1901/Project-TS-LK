import React from 'react';
// import 'antd/dist/antd.css'
// import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { AppRoot } from 'AppRoot';
import { Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import {store} from './store'

import './index.css'
import 'normalize.css'

import { createRoot } from "react-dom/client";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppRoot />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
