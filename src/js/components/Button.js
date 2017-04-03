import React from "react";

import RevolverItem from "./RevolverItem";

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
			backgroundColor: '#EF5350',
			color: 'white',
			border: 'none',
			margin: 5,
		}

		return (
			<div id="revolverButtonBox">
				
				<div id="" class="container">
					<button id="btnRev" style={revItem} onTouchStart={this.buttonPressed} onTouchCancel={this.touchEnded} onTouchEnd={this.touchEnded}>Hallo</button>
				</div>

				<div id="revolverItems" className="revBtnTwo">

				{this.state.showComponent ? 
					<RevolverItem styleProp={revItem} /> : 
					null
				}
				{this.state.showComponent ? 
					<RevolverItem styleProp={revItem} /> : 
					null
				}
				{this.state.showComponent ? 
					<RevolverItem styleProp={revItem} /> : 
					null
				}
				</div>

			</div>
		);
	}
}