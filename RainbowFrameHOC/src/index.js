"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Main  from './components/Main'

import './main.css'

var data = require('./data.json')

ReactDOM.render(
    <Main  colors={data}></Main>,
    document.getElementById('container')
);
