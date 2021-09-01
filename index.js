import ReactDOM from 'react-dom';
import React from 'react';
import App from './src/app';
import { BrowserRouter as Routers } from 'react-router-dom';
import "tailwindcss/tailwind.css";

ReactDOM.render(
    <Routers>
        <App />
    </Routers>
, document.getElementById("app"));