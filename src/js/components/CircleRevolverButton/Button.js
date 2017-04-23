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
		const revItem = {			
			backgroundColor: ButtonStyles.colorButton,
			color: ButtonStyles.colorWhite,
			border: 'none',
			margin: 5,
			marginTop: 0,
			width: 50,
			height: 50,
			borderRadius: 25,
			zIndex: 10000
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
			zIndex: 10000,
			
		};

		const overlayMain = {
			zIndex: 10000
		}

		return (
			<div id="revolverButtonBox" style={overlayMain}>


				<div id="revolverItems" className="revBtnTwo" style={overlayMainCentered}>

				{this.state.showComponent ? 
					<RevolverItem value="1" styleProp={revItem} className="fixed-top" /> : 
					null
				}
				{this.state.showComponent ? 
					<RevolverItem value="2" styleProp={revItem} /> : 
					null
				}
				{this.state.showComponent ? 
					<RevolverItem value="3" styleProp={revItem} className="fixed-bottom" /> : 
					null
				}
				</div>

				
				<div style={mainCentered}>
					<button id="btnRev" style={revItem} onClick={this.toggleShowHide} onTouchMove={this.toggleShowHide}>Num</button>
				</div>

				<div id="revolverItems2" className="revBtnTwo" style={overlayMainCentered}>

				{this.state.showComponent ? 
					<RevolverItem value="4" styleProp={revItem} className="fixed-top" /> : 
					null
				}
				{this.state.showComponent ? 
					<RevolverItem value="5" styleProp={revItem} /> : 
					null
				}
				{this.state.showComponent ? 
					<RevolverItem value="6" styleProp={revItem} className="fixed-bottom" /> : 
					null
				}
				</div>

			</div>
		);
	}
}