import { Select } from "antd";
import styled from "styled-components";

const SelectedBar = styled(Select)`
  width: 10%;
`;
const ButtonValue = styled.span`
  font-size: 12px;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  width: 100%;
`;
const SelectionWrapper = styled.div`
  margin: 10px;
`;
const ButtonWrapper = styled.div`
  margin: 10px;
  width: 35px;
  height: 10px;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const ButtonComponent = styled.div``;
export default {
  SelectedBar,
  ButtonsWrapper,
  ButtonWrapper,
  SelectionWrapper,
  ButtonValue,
  ButtonComponent,
  Wrapper,
};
