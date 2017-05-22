import React from "react";

import RevolverItem from "./RevolverItem";
import ButtonStyles from "./ButtonStyles";

export default class Button extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
      		showComponent: false
    	};

		this.toggleShowHide = this.toggleShowHide.bind(this);
	}


	toggleShowHide(){
		var newState = this.state.showComponent == false ? true : false;
		this.setState({showComponent: newState});
	}

	render() {
		const mainButton = {			
			backgroundColor: ButtonStyles.colorButton,
			color: ButtonStyles.colorWhite,
			margin: 0,
			marginTop: 0,
			width: 60,
			height: 60,
			borderRadius: 30,
			border: 'none',
			position: 'absolute',
			top: 85,
			left: 100
		};

		const mainCentered = {
			display: 'flex',
			position: 'relative',
			alignItems: 'center',
			justifyContent: 'center',
			marginTop: 0
		};

		return (
			<div id="revolverButtonBox" >

				<div id="revolverItems" >
					<div style={mainCentered}>
						<button id="btnRev" style={mainButton} onClick={this.toggleShowHide} onTouchMove={this.toggleShowHide}>Gender</button>
						{this.state.showComponent && <RevolverItem value="m" currentItem="1" maxItems="2" />}
						{this.state.showComponent && <RevolverItem value="f" currentItem="2" maxItems="2" />}
					</div>

				</div>
				<div id="revolvers"></div>
			</div>
		);
	}
}