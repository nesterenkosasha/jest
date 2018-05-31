import { Table } from '../Table';

import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Table />', () => {

  it('renders a table', () => {
    const props = {users: []};
    const wrapper = shallow( <Table users={props.users} />);
    expect(wrapper.find('table').length).toBe(1);
    expect(wrapper.find('td').length).toBe(0)
  });

  it('renders a table with user', () => {
    const props = {users:
        [{"id": 0,
        "firstName": "suit",
        "lastName": "meeting",
        "age": 25,
        "visits": 71,
        "progress": 28,
        "status": "complicated"}]
    };
    const wrapper = shallow(<Table users={props.users} />);
    expect(wrapper.find('td').length).toBeGreaterThanOrEqual(4);
  });
});