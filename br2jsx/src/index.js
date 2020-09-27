"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App'

import './main.css'

var data = require('./data.json')

ReactDOM.render(
    <App />,
    document.getElementById('container')
);
