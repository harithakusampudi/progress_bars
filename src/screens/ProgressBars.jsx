import React, { useEffect, useState } from "react";
import { Spin } from "antd";

import Styles from "./style";

const { AppWrapper, ProgressBarWrapper, ContentWrapper, Title } = Styles;

const ProgressBars = (props) => {
  const [loading, setLoading] = useState(props.loading);

  useEffect(() => {
    setLoading(props.loading);
  }, [props]);

  useEffect(() => {
    props.actions.getProgressBarsData();
  }, []);

  return (
    <Spin spinning={loading}>
      <AppWrapper>
        <ProgressBarWrapper>
          {!loading && (
            <>
              <Title>Progress Bars</Title>
              <ContentWrapper>
                <div />
              </ContentWrapper>
            </>
          )}
        </ProgressBarWrapper>
      </AppWrapper>
    </Spin>
  );
};

export default ProgressBars;
