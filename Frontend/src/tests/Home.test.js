import React from "react";
import { shallow, configure, mount } from "enzyme";
import Home from "../components/pages/Home.js";
import Adapter from "enzyme-adapter-react-16";
import HeroSection from "../components/HeroSection.js";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  shallow(<Home />);
});

it("check home component", () => {
  const wrapper = shallow(<Home />);
  const welcome = <HeroSection />;
  expect(wrapper.contains(welcome)).toEqual(true);
});
