import React from "react";
import { shallow, configure,mount } from "enzyme";
import Recommend from "./Recommend.js";
import toJson from "enzyme-to-json";
import Adapter from 'enzyme-adapter-react-16';
import RecommendationCard from "./RecommendationCard";

configure({ adapter: new Adapter() })

it("renders without crashing", () => {
  shallow(<Recommend />);
});

it("renders card", () => {
  const wrapper = shallow(<Recommend />);
  const value = wrapper.find("RecommendationCard");
  expect(value).toEqual({});
});