import React from "react";

export default class Button extends React.Component {
	constructor(props) {
		super(props);

		this.buttonClicked = this.buttonClicked.bind(this);
		
	}

	buttonClicked(event) {
		//alert("Button clicked");
		var revBtn = document.getElementById("revolverButtonBox");
		//var numberOfItems = document.getElementById("btnRev").getAttribute("numberOfItems");
		//alert(numberOfItems);

		const stylesTrabant = {
			position: 'absolute',
			top: 20,
			left: 20,
		}

		var top = 0;
		var left = 0;

		for(var i = 0; i < 10; i++) {
			var btn = document.createElement('button');
			btn.setAttribute("id", "revTrabantBtn" + i);
			//btn.setAttribute("style", "position: absolute;top: 20px;left: "left );
		  	var myText = document.createTextNode('Welt');
	      	btn.appendChild(myText);
	      	revBtn.appendChild(btn);
	    }  			    
	}

	mouseLeaved (){
		//alert("mouse leaved");
	}

	
	render() {
		const styles = {
		    color: 'red',
		    position: 'absolute',
		    top: 300,
		    left: 200,
		};

		return (
			<div id="revolverButtonBox" className="revBtnTwo">
				<button id="btnRev" style={styles} onMouseOver={this.buttonClicked} onMouseLeave={this.mouseLeaved}>Hallo</button>
			</div>
		);
	}
}