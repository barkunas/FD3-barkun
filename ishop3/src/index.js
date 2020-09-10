"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Shop from './components/Shop'

import './main.css'

var data = require('./data.json')



ReactDOM.render(
    <Shop data={data}></Shop>,
    document.getElementById('container')
);

