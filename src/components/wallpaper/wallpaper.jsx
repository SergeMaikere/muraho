import React from 'react';
import ButtonUp from '../buttonUp/buttonUp.jsx';
import './wallpaper.css';

class Wallpaper extends React.Component {

	constructor(props) {
		super(props);

		this.state = { 
			color: 'red',
			buttonMessage : "I don't like red"
		}

		this.changeColor = this.changeColor.bind(this);
	}

	changeColor () {
		console.log("clicked");
		this.setState(
			(prevState, props) => ( {color: prevState.color === 'red' ? 'blue' : 'red'} )
		)
	}

	render() {
		return <div id="wallpaper" style={ {backgroundColor: this.state.color} }>
			<ButtonUp clickHandler={this.changeColor} currentColor={this.state.color}></ButtonUp>
		</div>
	}
}

export default Wallpaper;