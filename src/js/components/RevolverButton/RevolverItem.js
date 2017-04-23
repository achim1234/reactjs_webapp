import React from "react";

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
		
		return (
			<button style={this.props.styleProp} onClick={this.onClickHandler}>{this.props.value}</button>
		);
	}
}