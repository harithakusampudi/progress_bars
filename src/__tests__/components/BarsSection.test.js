import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import BarsSection from "../../components/BarsSection/BarsSection";

configure({ adapter: new Adapter() });

const props = {
  barsData: {
    bars: [54],
    buttons: [10],
  },
};

it("BarsSection Component Render", () => {
  mount(<BarsSection />);
});

it("Check props data", () => {
  const wrapper = mount(<BarsSection {...props} />);
  expect(wrapper.props().barsData).toEqual(props.barsData);
});

it("Render bars based on prop data", () => {
  const wrapper = mount(<BarsSection {...props} />);
  const bars = wrapper.find("ProgressBar").length;
  expect(bars).toEqual(1);
});

it("Render Three bars", () => {
  const props = {
    barsData: {
      bars: [30, 30, 20],
      buttons: ["10"],
    },
  };
  const wrapper = mount(<BarsSection {...props} />);
  const bars = wrapper.find("ProgressBar").length;
  expect(bars).toEqual(3);
});

it("Empty bars", () => {
  const props = {
    barsData: {
      bars: [],
      buttons: ["10"],
    },
  };
  const wrapper = mount(<BarsSection {...props} />);
  const bars = wrapper.find("ProgressBar").length;
  expect(bars).toEqual(0);
});
