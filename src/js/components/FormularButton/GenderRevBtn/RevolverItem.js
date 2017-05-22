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
	}

	render() {
		var x, y;
		var currentItem = this.props.currentItem -1;
		var num = this.props.maxItems;
		var radius = 100;
		var offsetX = 110;
		var offsetY = 110;

		
     	x = (radius * Math.cos(currentItem / num * 2 * Math.PI)) + offsetX;
		y = (radius * Math.sin(currentItem / num * 2 * Math.PI)) + offsetY;
		     
		     
		console.log("x: " + x);
		console.log("y: " + y);

		const style = {
			backgroundColor: ButtonStyles.colorButton,
			color: ButtonStyles.colorWhite,
			position: 'absolute',
			left: x,
			top: y,
			width: 40,
			height: 40,
			borderRadius: 20,
			border: 'none'
		};

		return (
				<button style={style} onClick={this.onClickHandler} onTouchEnd={this.onClickHandler}>{this.props.value}</button>
		
		);
	}
}