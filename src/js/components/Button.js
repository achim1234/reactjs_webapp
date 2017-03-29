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
		const styles = {
		    color: 'red',
		    position: 'absolute',
		    top: 300,
		    left: 200,
		};

		return (
			<div>
				
				<div id="revolverButtonBox" className="revBtnTwo">

				{this.state.showComponent ? 
					<RevolverItem /> : 
					null
				}
				{this.state.showComponent ? 
					<RevolverItem /> : 
					null
				}
				{this.state.showComponent ? 
					<RevolverItem /> : 
					null
				}
					
			
				</div>
				<button id="btnRev" style={styles} onTouchStart={this.buttonPressed} onTouchCancel={this.touchEnded} onTouchEnd={this.touchEnded}>Hallo</button>
			</div>
		);
	}
}