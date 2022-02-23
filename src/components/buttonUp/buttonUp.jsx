import React from 'react';

class ButtonUp extends React.Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick (props) { this.props.clickHandler() }

	render () {
		return <button onClick={this.handleClick}>I don't like { this.props.currentColor }</button>
	}
}

export default ButtonUp;