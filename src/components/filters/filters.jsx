import React from 'react';
import Form from 'react-bootstrap/Form';

class Filters extends React.Component {

	render() {
		return(
			<Form className="my-5">
				<Form.Group className="mb-3">
				    <Form.Control type="text" placeholder="Search..." />
				</Form.Group>
				<Form.Group className="mb-3 px-5">
				    <Form.Check type="checkbox" label="Only show stocked products" />
				</Form.Group>
			</Form>
		)
	}
}

export default Filters;