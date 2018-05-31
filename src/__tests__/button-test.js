import { Admins } from '../Admins';

import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Admins />', () => {

  it('renders a button', () => {
    const mockFn = jest.fn();
    Admins.prototype.handelSubmit = mockFn; 
    const wrapper = shallow( <Admins />);
    expect(wrapper.find('button').length).toBe(1);

    wrapper.find('form').simulate('submit');
    expect(mockFn).toHaveBeenCalled();
  });

});
