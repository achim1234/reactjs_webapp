import React from "react";

import Button from "../components/RevolverButton/Button"
import CircleButton from "../components/CircleRevolverButton/Button"
import ExperimentalCircleButton from "../components/CircleRevolverButton_experimental/Button"
import ExperimentalCircleButton2 from "../components/CircleRevolverButton_experimental_new/Button"


export default class Initial extends React.Component {
  render() {

    return (
      <div>
        <p>jddijdiajdiasjdjasidjasijdiasjdijasidj</p>
        <ExperimentalCircleButton />
        <p>jddijdiajdiasjdjasidjasijdiasjdijasidj</p>
        <br />
        <ExperimentalCircleButton2 />
      </div>
    );
  }
}