/*
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
*/

import { createRoot } from "react-dom/client";
import App from "./App";

const rootEl = document.getElementById("root");
const root = createRoot(rootEl);

root.render( <App/> );

