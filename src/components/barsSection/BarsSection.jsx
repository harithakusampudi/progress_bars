import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import Styles from "./styles";

const { EachBarWrapper, Limit } = Styles;

const BarsSection = (props) => {
  const [barsData, setBarsData] = useState(props?.barsData);

  useEffect(() => {
    setBarsData(props.barsData);
  }, [props.barsData]);

  return (
    <>
      <Limit>Limit : {barsData?.limit}</Limit>
      {barsData?.bars.map((eachBar, index) => {
        return (
          <EachBarWrapper key={index}>
            <ProgressBar barValue={eachBar} limit={barsData?.limit} />
          </EachBarWrapper>
        );
      })}
    </>
  );
};

export default BarsSection;
