import React, { useEffect, useState } from "react";
import { Spin } from "antd";

import Components from "../components";
import Styles from "./styles";

const { AppWrapper, ProgressBarWrapper, ContentWrapper, Title } = Styles;
const { BarsSection, ButtonsSection } = Components;

const ProgressBars = (props) => {
  const [loading, setLoading] = useState(props.loading);
  const { getProgressBarsData } = props.actions;

  useEffect(() => {
    setLoading(props.loading);
  }, [props]);

  useEffect(() => {
    getProgressBarsData();
  }, [getProgressBarsData]);

  return (
    <Spin spinning={loading}>
      <AppWrapper>
        <ProgressBarWrapper>
          {!loading && (
            <>
              <Title>Progress Bars</Title>
              <ContentWrapper>
                <BarsSection />
                <ButtonsSection />
              </ContentWrapper>
            </>
          )}
        </ProgressBarWrapper>
      </AppWrapper>
    </Spin>
  );
};

export default ProgressBars;
