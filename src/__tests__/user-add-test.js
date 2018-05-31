import { AddNewUser } from '../AddNewUser';

import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<AddNewUser />', () => {
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
    const wrapper = shallow( <AddNewUser />);
    expect(wrapper.find('.popUp').length).toBe(1);
  });

  it('renders each property', () => {
    const wrapper = shallow(<AddNewUser/>);
    expect(wrapper.find('input').length).toBe(6);
  });

  it('calls handle change', () => {
    const mockFn = jest.fn();
    AddNewUser.prototype.handelChange = mockFn; 
    const wrapper = shallow(<AddNewUser />);
    wrapper.find('form').simulate('change');
    expect(mockFn).toHaveBeenCalled();
  });

  it('calls handle close popUp', () => {    
    const mockFn = jest.fn();
    AddNewUser.prototype.handelCloseClick = mockFn; 
    const wrapper = shallow(<AddNewUser reducerUsers={props.users} match={props.match} />);
    wrapper.find('.btnDel').simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });

  it('calls handle edit', () => {
    const mockFn = jest.fn();
    AddNewUser.prototype.handelSubmit = mockFn; 
    const wrapper = shallow(<AddNewUser />);
    wrapper.find('form').simulate('submit');
    expect(mockFn).toHaveBeenCalled();
  });


});


