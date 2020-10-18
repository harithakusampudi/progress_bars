import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ButtonsSection from "../../components/ButtonsSection/ButtonsSection";

configure({ adapter: new Adapter() });

const props = {
  barsData: {
    bars: [54],
    buttons: [10],
    limit: 200,
  },
  actions: {
    updateBarData: jest.fn(),
  },
};

it("ProgressBar Component Render", () => {
  mount(<ButtonsSection />);
});

it("Check props data", () => {
  const wrapper = mount(<ButtonsSection {...props} />);
  expect(wrapper.props().barsData.limit).toEqual(200);
});
