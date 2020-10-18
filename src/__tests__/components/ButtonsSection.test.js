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

it("Render buttons", () => {
  const props = {
    barsData: {
      bars: [20, 30, 40],
      buttons: [10],
    },
    actions: {
      updateBarData: jest.fn(),
    },
  };
  const wrapper = mount(<ButtonsSection {...props} />);
  const bars = wrapper.find("ButtonComponent").length;
  expect(bars).toEqual(1);
});

it("Button on click", () => {
  const props = {
    barsData: {
      bars: [40],
      buttons: [10, 20],
    },
    actions: {
      updateBarData: jest.fn(),
    },
  };
  const updateBarData = {
    barsData: {
      bars: [50],
      buttons: [10, 20],
    },
  };
  const wrapper = mount(<ButtonsSection {...props} />);
  expect(wrapper.find("ButtonComponent").at(0).text()).toEqual("10");
  expect(wrapper.find("ButtonComponent").at(1).text()).toEqual("20");
  wrapper.find("ButtonComponent").at(0).simulate("click");
  wrapper.setProps(updateBarData);
  expect(wrapper.props().barsData.bars).toEqual([50]);
});
