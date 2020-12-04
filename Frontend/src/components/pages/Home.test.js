import React from "react";
import { shallow, configure,mount } from "enzyme";
import Home from "./Home.js";
//import toJson from "enzyme-to-json";
import Adapter from 'enzyme-adapter-react-16';
import HeroSection from "../HeroSection.js";

configure({ adapter: new Adapter() })

it("renders without crashing", () => {
  shallow(<Home />);
});

it("renders Account header", () => {
    const wrapper = shallow(<Home />);
    const welcome = <HeroSection/>;
    expect(wrapper.contains(welcome)).toEqual(true);
  });
