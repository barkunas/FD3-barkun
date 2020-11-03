"use strict";

import { mount } from 'enzyme';
import React from 'react';

import MobileCompany from '../components/MobileCompany';



test('test remove client MobileCompany', () => {
    const MOBILE_COMPANY_CONFIG = {
        companies: ['МТС', 'Velcom'],
        clients: [
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
        ]
    }

    const wrapper = mount(
        <MobileCompany  {...MOBILE_COMPANY_CONFIG} />
    );

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find('[className="MobileClient"]')).toHaveLength(MOBILE_COMPANY_CONFIG.clients.length)

    wrapper.find('[className="removeBtn"]').last().simulate('click')
    
    expect(wrapper.find('[className="MobileClient"]')).toHaveLength(MOBILE_COMPANY_CONFIG.clients.length-1)

    expect(wrapper).toMatchSnapshot();

});
