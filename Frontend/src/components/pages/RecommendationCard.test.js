import React from "react";
import { shallow, configure,mount } from "enzyme";
import RecommendationCard from "./RecommendationCard.js";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })

it("renders without crashing", () => {
  shallow(<RecommendationCard />);
});
it("renders Account header", () => {
  const wrapper = shallow(<RecommendationCard />);
  const welcome = <h5 class="card-title title" style={{ fontFamily: "Syne Mono" }}></h5>
  expect(wrapper.contains(welcome)).toEqual(true);
});

