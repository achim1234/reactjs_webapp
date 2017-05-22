import React from "react";

import StyleRevBtn from "../components/StyleChangeButton/StyleChangeBtn/Button";

export default class IndexPage extends React.Component {
  render() {

    return (
      <div>
        <h2>Informatikprojekt Sommersemester 2017</h2>
        <h3>Betreut von Prof. Dr.-Ing Thorsten Weiss</h3>
        <h3>Vorgelegt von Achim Strohm</h3>
		<br /><br /><br />
		<StyleRevBtn />

      </div>
    );
  }
}