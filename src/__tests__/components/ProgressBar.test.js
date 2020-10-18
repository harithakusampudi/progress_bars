import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ProgressBar from "../../components/BarsSection/ProgressBar";

configure({ adapter: new Adapter() });

const props = {
  barValue: 60,
  limit: 100,
};

it("ProgressBar Component Render", () => {
  mount(<ProgressBar />);
});

it("Check props data", () => {
  const wrapper = mount(<ProgressBar {...props} />);
  expect(wrapper.props().limit).toEqual(100);
});
