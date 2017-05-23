import React from "react";

//import StyleRevBtn from "../components/StyleChangeButton/StyleChangeBtn/Button";
import StyleRevBtnSchleife from "../components/StyleChangeButton_mit_Schleife/StyleChangeBtn/Button";

export default class IndexPage extends React.Component {
  render() {

    return (
      <div>
        <h2>Informatikprojekt Sommersemester 2017</h2>
        <h3>Betreut von Prof. Dr.-Ing Thorsten Weiss</h3>
        <h3>Vorgelegt von Achim Strohm</h3>
        <br /><br /><br />
        <h2>Settings</h2>
		<StyleRevBtnSchleife htmlElement="body" btnName="body color" maxItems="6" values={['#EF9A9A', '#E91E63', '#4527A0', '#006064', '#03A9F4', '#00C853']} />
		<br /><br /><br /><br />
		<StyleRevBtnSchleife htmlElement="h1" btnName="h1 color" maxItems="6" values={['#EF9A9A', '#E91E63', '#4527A0', '#006064', '#03A9F4', '#00C853']} />
		<br /><br /><br /><br />
		<StyleRevBtnSchleife htmlElement="nav" btnName="nav color" maxItems="6" values={['#EF9A9A', '#E91E63', '#4527A0', '#006064', '#03A9F4', '#00C853']} />
      </div>
    );
  }
}