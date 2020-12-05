import React from "react";
import { shallow, configure, mount } from "enzyme";
import Profile from "../components/pages/Profile";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  shallow(<Profile />);
});

it("renders Account header", () => {
  const wrapper = shallow(<Profile />);
  const welcome = <div className="key">SleepStart:</div>;
  expect(wrapper.contains(welcome)).toEqual(true);
});

it("renders Account header", () => {
  const wrapper = shallow(<Profile />);
  const welcome = <div className="key">SleepEnd:</div>;
  expect(wrapper.contains(welcome)).toEqual(true);
});

it("renders Account header", () => {
  const wrapper = shallow(<Profile />);
  const welcome = <div className="key">BudgetLow:</div>;
  expect(wrapper.contains(welcome)).toEqual(true);
});

it("renders Account header", () => {
  const wrapper = shallow(<Profile />);
  const welcome = <div className="key">BudgetHigh:</div>;
  expect(wrapper.contains(welcome)).toEqual(true);
});

it("renders Account header", () => {
  const wrapper = shallow(<Profile />);
  const welcome = <div className="key">Gender:</div>;
  expect(wrapper.contains(welcome)).toEqual(true);
});

it("renders Account header", () => {
  const wrapper = shallow(<Profile />);
  const welcome = <div className="key">Parking:</div>;
  expect(wrapper.contains(welcome)).toEqual(true);
});

it("renders Account header", () => {
  const wrapper = shallow(<Profile />);
  const welcome = <div className="key">Pet:</div>;
  expect(wrapper.contains(welcome)).toEqual(true);
});
