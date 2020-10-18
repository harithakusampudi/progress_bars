import styled from "styled-components";

const AppWrapper = styled.div`
  max-width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProgressBarWrapper = styled.div`
  min-width: 30%;
  margin: 2%;
`;

const Title = styled.div`
  font-size: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 500;
`;

const ContentWrapper = styled.div`
  margin-top: 5%;
`;

export default {
  ContentWrapper,
  Title,
  ProgressBarWrapper,
  AppWrapper,
};
