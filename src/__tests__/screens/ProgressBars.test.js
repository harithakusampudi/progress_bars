import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ProgressBars from "../../screens/ProgressBars";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  shallow(<ProgressBars />);
});
