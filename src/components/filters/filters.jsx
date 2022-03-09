import React from 'react';
import Form from 'react-bootstrap/Form';

class Filters extends React.Component {

	constructor(props) {
		super(props);

		this.isInStockHandler = this.isInStockHandler.bind(this);
		this.textSearchHandler = this.textSearchHandler.bind(this);
	}

	isInStockHandler (event) {
		this.props.isInStockHandler(event.target.checked);
	}

	textSearchHandler (event) {
		this.props.filterTextHandler(event.target.value);
	}

	render() {
		return(
			<Form className="my-5">
				<Form.Group className="mb-3">
				    <Form.Control 
				    	type="text" 
				    	placeholder="Search..." 
				    	value={this.props.filterText} 
				    	onChange={this.textSearchHandler}/>
				</Form.Group>
				<Form.Group className="mb-3 px-5">
				    <Form.Check 
				    	type="checkbox" 
				    	label="Only show stocked products" 
				    	checked={this.props.isInstock} 
				    	onChange={this.isInStockHandler}/>
				</Form.Group>
			</Form>
		)
	}
}

export default Filters;