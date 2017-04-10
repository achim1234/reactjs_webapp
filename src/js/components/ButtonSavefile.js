import React from "react";

import RevolverItem from "./RevolverItem";
import ButtonStyles from "./ButtonStyles";

export default class Button extends React.Component {
	constructor(props) {
		super(props);

		
		this.state = {
      		showComponent: false
    	};
		this.buttonPressed = this.buttonPressed.bind(this);
	}

	buttonPressed() {
	    this.setState({
	    	showComponent: true
	    });
	}

	touchEnded(){
		this.setState({
	    	showComponent: false
	    });
	    alert("in touch ended");
	}
	
	render() {
		const revItem = {			
			backgroundColor: ButtonStyles.colorButton,
			color: ButtonStyles.colorWhite,
			border: 'none',
			margin: 5,
			marginTop: 30
		};

		const mainCentered = {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		};

		return (
			<div id="revolverButtonBox">


				<div id="revolverItems" className="revBtnTwo">

				{this.state.showComponent ? 
					<RevolverItem styleProp={revItem} className="fixed-top" /> : 
					null
				}
				{this.state.showComponent ? 
					<RevolverItem styleProp={revItem} /> : 
					null
				}
				{this.state.showComponent ? 
					<RevolverItem styleProp={revItem} className="fixed-bottom" /> : 
					null
				}
				</div>

				
				<div style={mainCentered}>
					<button id="btnRev" style={revItem} onTouchStart={this.buttonPressed} onTouchCancel={this.touchEnded} onTouchEnd={this.touchEnded}>Hallo</button>
				</div>

				<div id="revolverItems2" className="revBtnTwo">

				{this.state.showComponent ? 
					<RevolverItem styleProp={revItem} className="fixed-top" /> : 
					null
				}
				{this.state.showComponent ? 
					<RevolverItem styleProp={revItem} /> : 
					null
				}
				{this.state.showComponent ? 
					<RevolverItem styleProp={revItem} className="fixed-bottom" /> : 
					null
				}
				</div>

			</div>
		);
	}
}