'use strict'

var React = require('react');
var ReactDOM = require('react-dom');
var Shop = require('./shop')

var data = require('./data.json')

require('./main.css')


ReactDOM.render(
    React.createElement(Shop, { data: data }),
    document.getElementById('container')
);

