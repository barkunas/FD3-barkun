"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';

let companies = ['МТС', 'Velcom'];

let clientsArr = [
  {
    id: 101,
    name0: "Иван",
    name1: "Иванов",
    name2: "Иванович",
    balance: 200,
    status: 1,
    company: 0
  },
  {
    id: 105,
    name0: "Сидор",
    name1: "Сидоров",
    name2: "Сидорович",
    balance: 250,
    status: 1,
    company: 0
  },
  {
    id: 110,
    name0: "Петя",
    name1: "Петров",
    name2: "Петрович",
    balance: 180,
    status: 0,
    company: 0
  },
  {
    id: 120,
    name0: "Жора",
    name1: "Григорьев",
    name2: "Григорьевич",
    balance: 220,
    status: 0,
    company: 1
  },
];

ReactDOM.render(
  <MobileCompany
    companies={companies}
    clients={clientsArr}
  />
  , document.getElementById('container')
);

