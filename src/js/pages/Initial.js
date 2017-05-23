import React from "react";

/*
import Button from "../components/RevolverButton/Button";
import CircleButton from "../components/CircleRevolverButton/Button";
import ExperimentalCircleButton from "../components/CircleRevolverButton_experimental/Button";
import ExperimentalCircleButton2 from "../components/CircleRevolverButton_experimental_new/Button";
*/


import TextRevBtnSchleife from "../components/TextSelectButton_mit_Schleife/StyleChangeBtn/Button";

//vorher war <ExperimentalCircleButton2 /> eingesetzt

export default class Initial extends React.Component {
  render() {

    return (
      <div>
        <p>jddijdiajdiasjdjasidjasijdiasjdijasidj</p>
        <TextRevBtnSchleife btnName="num" maxItems="8" values={['1', '2', '3', '4', '5', '6', '7', '8']} />
        <p>jddijdiajdiasjdjasidjasijdiasjdijasidj</p>
        <br /><br /><br /><br /><br /><br />
        <TextRevBtnSchleife btnName="num" maxItems="5" values={['1', '2', '3', '4', '5']} />
      </div>
    );
  }
}