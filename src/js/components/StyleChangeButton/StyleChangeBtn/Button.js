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
		this.toggleShowHideParent = this.toggleShowHideParent.bind(this);
	}

	//wird aufgerufen, wenn RevolverItem angecklickt wurde. Werte werden an die Funktion übergeben.
	toggleShowHide(value, htmlElement){
		alert(value);
		var newState = this.state.showComponent == false ? true : false;
		this.setState({showComponent: newState});

		var background = document.getElementsByTagName(this.props.htmlElement)[0];
		background.style.backgroundColor = value;

	}

	//wird nur aufgerufen, wenn großer Button in der Mitte geklickt wird
	toggleShowHideParent(){
		var newState = this.state.showComponent == false ? true : false;
		this.setState({showComponent: newState});
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

						
						<button id="btnRev" style={mainButton} onClick={this.toggleShowHideParent} onTouchCancel={this.toggleShowHideParent}>{this.props.btnName}</button>


						{this.state.showComponent && <RevolverItem htmlElement={this.props.htmlElement} toggleShowHide={this.toggleShowHide} value="#AB47BC" currentItem="1" maxItems="6" />}
						{this.state.showComponent && <RevolverItem htmlElement={this.props.htmlElement} toggleShowHide={this.toggleShowHide} value="#64B5F6" currentItem="2" maxItems="6" />}
						{this.state.showComponent && <RevolverItem htmlElement={this.props.htmlElement} toggleShowHide={this.toggleShowHide} value="#64B5F6" currentItem="2" maxItems="6" />}
						{this.state.showComponent && <RevolverItem htmlElement={this.props.htmlElement} toggleShowHide={this.toggleShowHide} value="#4CAF50" currentItem="3" maxItems="6" />}
						{this.state.showComponent && <RevolverItem htmlElement={this.props.htmlElement} toggleShowHide={this.toggleShowHide} value="#EEFF41" currentItem="4" maxItems="6" />}
						{this.state.showComponent && <RevolverItem htmlElement={this.props.htmlElement} toggleShowHide={this.toggleShowHide} value="#E64A19" currentItem="5" maxItems="6" />}
						{this.state.showComponent && <RevolverItem htmlElement={this.props.htmlElement} toggleShowHide={this.toggleShowHide} value="#607D8B" currentItem="6" maxItems="6" />}
					</div>

				</div>
				<div id="revolvers"></div>
			</div>
		);
	}
}