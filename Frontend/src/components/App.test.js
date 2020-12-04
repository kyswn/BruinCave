import React from "react";
import { shallow, configure, mount } from "enzyme";
import App from "../App.js";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  shallow(<App />);
});
it("renders card", () => {
  const wrapper = shallow(<App />);
  const value = wrapper.find("Route");
  expect(value).toEqual({});
});
