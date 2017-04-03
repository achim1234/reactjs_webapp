import React from "react";

export default class RevolverItem extends React.Component {
	constructor(props) {
		super(props);
	}

	onClickHandler(){
		alert("RevolverItem clicked");
	}

	render() {
		
		return (
			<button style={this.props.styleProp} onClick={this.onClickHandler}>Revolver Item</button>
		);
	}
}