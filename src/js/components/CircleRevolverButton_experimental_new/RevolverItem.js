import React from "react";
import ButtonStyles from "./ButtonStyles";

export default class RevolverItem extends React.Component {
	constructor(props) {
		super(props);

		this.onClickHandler = this.onClickHandler.bind(this);
	}

	onClickHandler(){
		var value = this.props.value;
		alert(value + " clicked!");
		console.log(value + " clicked!");

		var x, y;
		var num = 6;
		var radius = 100;
		var offsetX = 100;
		var offsetY = 100;

		for (var n = 0; n < num; n++) {
     		x = radius * Math.cos(n / num * 2 * Math.PI);
		     y = radius * Math.sin(n / num * 2 * Math.PI);
		     var div = document.createElement("button");
		     div.className = className;
		     div.style.left = (x + offsetX) + "px";
		     div.style.top = (y + offsetY) + "px";
		     document.body.appendChild(div);
		}
		
	}

	render() {




		
		return (
				<button style={this.props.styleProp} onClick={this.onClickHandler} onTouchEnd={this.onClickHandler}>{this.props.value}</button>
		
		);
	}
}