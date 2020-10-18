import React, { useState, useEffect } from "react";
import { Select, Button } from "antd";
import Styles from "./styles";

const {
  SelectionWrapper,
  ButtonsWrapper,
  ButtonWrapper,
  ButtonValue,
  Wrapper,
} = Styles;

export const ButtonComponent = (props) => {
  return (
    <ButtonWrapper>
      <Button
        style={{ width: "100%" }}
        size="small"
        onClick={props.onButtonClick}
      >
        <ButtonValue>{props.children}</ButtonValue>
      </Button>
    </ButtonWrapper>
  );
};

const ButtonsSection = (props) => {
  const [barsData, setBarsData] = useState(props?.barsData);
  const [selectedBar, setSelectedBar] = useState(0);

  useEffect(() => {
    setBarsData(props.barsData);
  }, [props.barsData]);

  const onButtonClick = (value) => {
    const barValue = barsData?.bars[selectedBar];
    const updatedBarValue = barValue + value;
    if (updatedBarValue > 0) {
      barsData.bars.splice(selectedBar, 1, updatedBarValue);
    } else {
      barsData.bars.splice(selectedBar, 1, 0);
    }
    props.actions.updateBarData(barsData);
  };

  function onBarSelection(value) {
    setSelectedBar(value);
  }
  return (
    <Wrapper>
      <SelectionWrapper>
        <Select
          size="small"
          style={{ width: "100%" }}
          defaultValue={selectedBar}
          onChange={onBarSelection}
        >
          {barsData?.bars?.map((barValue, index) => {
            return (
              <Select.Option value={index} key={index}>
                Progress : {index + 1}
              </Select.Option>
            );
          })}
        </Select>
      </SelectionWrapper>

      <ButtonsWrapper>
        {barsData?.buttons.map((buttonValue, index) => {
          return (
            <ButtonComponent
              onButtonClick={() => onButtonClick(buttonValue)}
              key={index}
            >
              {buttonValue}
            </ButtonComponent>
          );
        })}
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default ButtonsSection;
