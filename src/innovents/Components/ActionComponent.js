import React from "react";
import { actionComponentStyle } from "../Style";
import { plusIcon, minusIcon } from "../Images";

const ActionComponent = props => {
  let { icon, text, value, onMinusClick, onPlusClick } = props;
  let { containerStyle, textStyle, valueTextStyle } = actionComponentStyle;
  return (
    <div
      style={{
        ...containerStyle
      }}
    >
      <img src={icon} />
      <span style={{ ...textStyle }}>{text}</span>
      <img src={plusIcon} onClick={onPlusClick} />
      <span style={{ ...valueTextStyle }}>{value}</span>
      <img src={minusIcon} onClick={onMinusClick} />
    </div>
  );
};

export default ActionComponent;
