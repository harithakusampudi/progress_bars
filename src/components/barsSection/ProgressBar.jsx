import React from "react";
import getBarColorAndProgress from "../../utils";
import Styles from "./styles";

const { BarWrapper, Bar, InnerBar, BarNumber } = Styles;

const ProgressBar = (props) => {
  const percentage = Math.trunc((props?.barValue / props?.limit) * 100);
  return (
    <BarWrapper>
      <Bar>
        <InnerBar
          color={getBarColorAndProgress(percentage)?.color}
          widthPercentage={getBarColorAndProgress(percentage)?.widthPercentage}
        />
      </Bar>
      <BarNumber>{props?.barValue}</BarNumber>
    </BarWrapper>
  );
};

export default ProgressBar;
