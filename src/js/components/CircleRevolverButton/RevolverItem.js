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
		const revItem = {			
			backgroundColor: ButtonStyles.colorButton,
			color: ButtonStyles.colorWhite,
			border: 'none',
			margin: 5,
			marginTop: 0,
			width: 24,
			height: 24,
			borderRadius: 12,
			zIndex: 10000,
			
		};
		
		return (
			<button style={revItem} onClick={this.onClickHandler} onTouchEnd={this.onClickHandler}>{this.props.value}</button>
		);
	}
}