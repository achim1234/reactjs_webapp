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
		this.onClickHandler = this.onClickHandler.bind(this);
	}


	toggleShowHide(){
		var newState = this.state.showComponent == false ? true : false;
		this.setState({showComponent: newState});
	}

	onClickHandler(){
		
		

		var x, y;
		var num = 7;
		var radius = 100;
		var offsetX = 300;
		var offsetY = 300;

		for (var n = 0; n < num; n++) {
			
     		x = radius * Math.cos(n / num * 2 * Math.PI);
		    y = radius * Math.sin(n / num * 2 * Math.PI);
		    var div = document.createElement("div");
		    //var div = document.getElementById("revolvers");
		  	div.style.left = (x + offsetX) + "px";
		    div.style.top = (y + offsetY) + "px";
		    div.style.position = "absolute";
		    div.style.width = "24px";
		    div.style.height = "24px";
		    div.style.borderRadius = "12px";
		    div.style.background = "#EF5350";
		    //div.style.zIndex = "10000";
		    document.body.appendChild(div);
		}
		
	}
	

	render() {
		const mainButton = {			
			backgroundColor: ButtonStyles.colorButton,
			color: ButtonStyles.colorWhite,
			border: 'none',
			margin: 5,
			marginTop: 0,
			width: 50,
			height: 50,
			borderRadius: 25
		};

		const mainCentered = {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			marginTop: 0
		};

		const overlayMainCentered = {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			zIndex: 10000
		};

		const overlayMain = {
			zIndex: 10000
		}



		return (
			<div id="revolverButtonBox" style={overlayMain}>

				<div id="revolverItems" className="overlay" style={overlayMainCentered}>
					<div style={mainCentered}>
						<button id="btnRev" style={mainButton} onClick={this.onClickHandler} onTouchMove={this.toggleShowHide}>Num</button>
						
					</div>
				</div>
				<div id="revolvers"></div>
			</div>
		);
	}
}