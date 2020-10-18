import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ProgressBars from "../../screens/ProgressBars";
import Styles from "../../screens/styles";
import Components from "../../components";

const { BarsSection, ButtonsSection } = Components;

const { Title } = Styles;
configure({ adapter: new Adapter() });

const props = {
  loading: false,
  actions: {
    getProgressBarsData: () => {},
  },
};
it("renders without crashing", () => {
  shallow(<ProgressBars />);
});

it("It should have title", () => {
  const wrapper = shallow(<ProgressBars />);
  const title = <Title>Progress Bars</Title>;
  expect(wrapper.contains(title)).toEqual(true);
});

it("It should have Bars section", () => {
  const wrapper = shallow(<ProgressBars {...props} />);
  const barsSection = <BarsSection />;

  expect(wrapper.contains(barsSection)).toEqual(true);
});

it("It should have Buttons Section", () => {
  const wrapper = shallow(<ProgressBars {...props} />);
  const buttonsSection = <ButtonsSection />;

  expect(wrapper.contains(buttonsSection)).toEqual(true);
});
