import React from "react";
import { shallow, configure, mount } from "enzyme";
import Signup from "../components/pages/Signup.js";
//import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  shallow(<Signup />);
});
