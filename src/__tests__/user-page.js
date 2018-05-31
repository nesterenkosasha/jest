import { UserId } from '../UserId';

import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<UserId />', () => {
  const props = {users:
    [{"id": 0,
    "firstName": "suit",
    "lastName": "meeting",
    "age": 25,
    "visits": 71,
    "progress": 28,
    "status": "complicated"}],
    match: {
      params: {
        id: 0
      }
    }
};
  it('renders a table', () => {
    const props = {users: []};
    const wrapper = shallow( <UserId reducerUsers={props.users} />);
    expect(wrapper.find('.full-description').length).toBe(1);
  });

  it('renders each property', () => {
    const wrapper = shallow(<UserId reducerUsers={props.users} match={props.match} />);
    expect(wrapper.find('input').length).toBe(6);
  });

  it('calls handle on edit', () => {
    const mockFn = jest.fn();
    UserId.prototype.handelUpdate = mockFn; 
    const wrapper = shallow(<UserId reducerUsers={props.users} match={props.match} />);

    wrapper.find('form').simulate('submit');
    expect(mockFn).toHaveBeenCalled();
  });

  it('calls handle on remove', () => {    
    const mockFn = jest.fn();
    UserId.prototype.handelDeleteClick = mockFn; 
    const wrapper = shallow(<UserId reducerUsers={props.users} match={props.match} />);

    wrapper.find('.btnRm').simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });

});


