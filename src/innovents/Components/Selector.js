import React from "react";
import ActionComponent from "./ActionComponent";
import { selectorStyle, dividorStyle } from "../Style";
import { childIcon, adultIcon, bedIcon } from "../Images";

const Divider = () => {
  return <div style={{ ...dividorStyle }} />;
};

export default class Selector extends React.Component {
  state = {
    rooms: 1,
    adults: 1,
    children: 0
  };
  onPlusRoom = () => {
    let { rooms, adults, children } = this.state;
    rooms += 1;
    if (rooms > 5) {
      return;
    }
    let totalPerson = adults + children;
    if (rooms > totalPerson) {
      adults = adults += 1;
    }
    this.setState({
      rooms,
      adults,
      children
    });
  };
  onMinusRoom = () => {
    let { rooms, adults, children } = this.state;
    rooms -= 1;
    if (!rooms) {
      return;
    }
    let totalPerson = adults + children;
    if (totalPerson > rooms * 4) {
      let exceded = totalPerson - rooms * 4;
      for (let i = 1; i <= exceded; i++) {
        if (children) {
          children -= 1;
        } else {
          adults -= 1;
        }
      }
    }
    this.setState({
      rooms,
      adults,
      children
    });
  };

  onPlusAdult = () => {
    let { rooms, adults, children } = this.state;
    adults += 1;
    let totalPerson = adults + children;
    if (totalPerson > rooms * 4) {
      rooms = Math.floor(totalPerson / 4 + (totalPerson % 4 ? 1 : 0));
    }
    if (rooms > 5) {
      return;
    }
    this.setState({
      rooms,
      adults,
      children
    });
  };

  onMimusAdult = () => {
    let { rooms, adults, children } = this.state;
    adults -= 1;
    if (!adults) {
      return;
    }
    let totalPerson = adults + children;
    if (totalPerson < rooms) {
      let diff = rooms - totalPerson;
      rooms -= diff;
    }
    this.setState({
      rooms,
      adults,
      children
    });
  };

  onPlusChildren = () => {
    let { rooms, adults, children } = this.state;
    children += 1;
    let totalPerson = adults + children;
    if (totalPerson > rooms * 4) {
      rooms = Math.floor(totalPerson / 4 + (totalPerson % 4 ? 1 : 0));
    }
    if (rooms > 5) {
      return;
    }
    this.setState({
      rooms,
      adults,
      children
    });
  };

  onMinusChildren = () => {
    let { rooms, adults, children } = this.state;
    children -= 1;
    if (children == -1) {
      return;
    }
    let totalPerson = adults + children;
    if (totalPerson < rooms) {
      let diff = rooms - totalPerson;
      rooms -= diff;
    }
    this.setState({
      rooms,
      adults,
      children
    });
  };

  render() {
    let {
      state: { rooms, adults, children },
      onPlusRoom,
      onMinusRoom,
      onPlusAdult,
      onMimusAdult,
      onPlusChildren,
      onMinusChildren
    } = this;
    return (
      <div style={{ ...selectorStyle.containerStyle }}>
        <ActionComponent
          icon={bedIcon}
          text="ROOMS"
          value={rooms}
          onPlusClick={onPlusRoom}
          onMinusClick={onMinusRoom}
        />
        <Divider />
        <ActionComponent
          icon={adultIcon}
          text="ADULTS"
          value={adults}
          onPlusClick={onPlusAdult}
          onMinusClick={onMimusAdult}
        />
        <Divider />
        <ActionComponent
          icon={childIcon}
          text="CHILDREN"
          value={children}
          onPlusClick={onPlusChildren}
          onMinusClick={onMinusChildren}
        />
      </div>
    );
  }
}
