import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from "./router";
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import './styles/general-components/buttons.css';
import './styles/general-components/tables.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Router />
        </React.StrictMode>
    </BrowserRouter>
);

