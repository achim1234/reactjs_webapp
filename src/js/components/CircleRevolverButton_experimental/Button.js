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
			border: 'none',
			margin: 5,
			marginTop: 0,
			width: 50,
			height: 50,
			borderRadius: 25
		};

		const revItemVonRevolverItem = {			
			backgroundColor: ButtonStyles.colorButton,
			color: ButtonStyles.colorWhite,
			border: 'none',
			margin: 5,
			marginTop: 0,
			width: 24,
			height: 24,
			borderRadius: 12,
			zIndex: 10000,
			position: 'fixed',
			top: 200,
			left: 550,			
		};

		const revItemVonRevolverItem2 = {			
			backgroundColor: ButtonStyles.colorButton,
			color: ButtonStyles.colorWhite,
			border: 'none',
			margin: 5,
			marginTop: 0,
			width: 24,
			height: 24,
			borderRadius: 12,
			zIndex: 10000,
			position: 'fixed',
			top: 200,
			left: 350,			
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
						<button id="btnRev" style={mainButton} onClick={this.toggleShowHide} onTouchMove={this.toggleShowHide}>Num</button>
					</div>

					{this.state.showComponent ? 
						<RevolverItem value="1" styleProp={revItemVonRevolverItem} /> : 
						null
					}
					{this.state.showComponent ? 
						<RevolverItem value="2" styleProp={revItemVonRevolverItem2} /> : 
						null
					}
					{this.state.showComponent ? 
						<RevolverItem value="3" styleProp={revItemVonRevolverItem} /> : 
						null
					}

					{this.state.showComponent ? 
						<RevolverItem value="4" styleProp={revItemVonRevolverItem} /> : 
						null
					}
					{this.state.showComponent ? 
						<RevolverItem value="5" styleProp={revItemVonRevolverItem} /> : 
						null
					}
					{this.state.showComponent ? 
						<RevolverItem value="6" styleProp={revItemVonRevolverItem} /> : 
						null
					}

				</div>

				


			</div>
		);
	}
}