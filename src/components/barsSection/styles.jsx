import styled from "styled-components";

const BarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Bar = styled.div`
  height: 15px;
  background-color: #f5f5f5;
  width: 90%;
  display: flex;
  border-radius: 10px;
`;
const InnerBar = styled.div`
  height: 15px;
  background-color: ${(props) => props.color};
  border-radius: 10px;
  animation-name: animateBar;
  animation-iteration-count: 1;
  animation-timing-function: ease-out;
  animation-duration: 1s;
  width: ${(props) => props.widthPercentage}%;
  transition-property: width;
  transisiton: ${(props) => props.widthPercentage}% 4s;
  @keyframes animateBar {
    from {
      width: 0%;
      transform: translateX(0%);
    }
  }
`;

const EachBarWrapper = styled.div`
  margin-bottom: 10%;
`;

const Limit = styled.div`
  font-size: 14px;
  float: right;
  margin-bottom: 10px;
  color: #787878;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`;

const BarNumber = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  margin-left: 0.5vw;
  font-size: 14px;
  width: 10%;
  color: #787878;
`;
export default {
  BarWrapper,
  InnerBar,
  Bar,
  Limit,
  BarNumber,
  EachBarWrapper,
};
