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
		
		//return this.setState({showComponent: true});

		/*var x, y;
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
		*/
	}
	

	render() {
		const mainButton = {			
			backgroundColor: ButtonStyles.colorButton,
			color: ButtonStyles.colorWhite,
			margin: 0,
			marginTop: 0,
			width: 50,
			height: 50,
			borderRadius: 25,
			border: 'none',
			position: 'absolute',
			top: 85,
			left: 85
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
						<button id="btnRev" style={mainButton} onClick={this.toggleShowHide} onTouchMove={this.toggleShowHide}>Num</button>
						{this.state.showComponent && <RevolverItem value="1" maxItems="8" />}
						{this.state.showComponent && <RevolverItem value="2" maxItems="8" />}
						{this.state.showComponent && <RevolverItem value="3" maxItems="8" />}
						{this.state.showComponent && <RevolverItem value="4" maxItems="8" />}
						{this.state.showComponent && <RevolverItem value="5" maxItems="8" />}
						{this.state.showComponent && <RevolverItem value="6" maxItems="8" />}
						{this.state.showComponent && <RevolverItem value="7" maxItems="8" />}
						{this.state.showComponent && <RevolverItem value="8" maxItems="8" />}
					</div>

				</div>
				<div id="revolvers"></div>
			</div>
		);
	}
}