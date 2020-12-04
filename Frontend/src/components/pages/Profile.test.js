import React from "react";
import { shallow, configure,mount } from "enzyme";
import Profile from "./Profile";
import toJson from "enzyme-to-json";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })

it("renders without crashing", () => {
  shallow(<Profile />);
});

it("renders Account header", () => {
  const wrapper = shallow(<Profile />);
  const welcome = <div className='key'>SleepStart:</div>;
  expect(wrapper.contains(welcome)).toEqual(true);
});
