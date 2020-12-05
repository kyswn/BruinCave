import React from "react";
import { shallow, configure, mount } from "enzyme";
import About from "../components/pages/About.js";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  mount(<About />);
});

it("renders header", () => {
  const wrapper = shallow(<About />);
  const welcome = <b>We bring services that are:</b>;
  expect(wrapper.contains(welcome)).toEqual(true);
});

it("renders header", () => {
  const wrapper = shallow(<About />);
  const welcome = (
    <h5 class="card-title title" style={{ fontFamily: "Syne Mono" }}>
      Private
    </h5>
  );
  expect(wrapper.contains(welcome)).toEqual(true);
});

it("renders header", () => {
  const wrapper = shallow(<About />);
  const welcome = (
    <h5 class="card-title title" style={{ fontFamily: "Syne Mono" }}>
      Centralized
    </h5>
  );
  expect(wrapper.contains(welcome)).toEqual(true);
});
