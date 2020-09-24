"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Color from './components/Color'

import './main.css'

var data = require('./data.json')

ReactDOM.render(
    <Color colors={data}></Color>,
    document.getElementById('container')
);
