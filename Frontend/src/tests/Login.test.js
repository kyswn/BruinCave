import React from "react";
import { shallow, configure,mount } from "enzyme";
import Login from "../components/pages/Login.js";
import toText from "enzyme-to-json";
import { Route, Router } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })

it("renders without crashing", () => {
  shallow(<Login />);
});

// it("renders email input", () => {
//   const wrapper = mount(<Router><Route path='/login' component={Login} /></Router>);
//   const welcome = <label className='form-label'>Email</label>;
//   expect(wrapper.contains(welcome)).toEqual(true);
// });
