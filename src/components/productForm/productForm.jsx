import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


class ProductForm extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			name: '',
			category: '',
			price: '',
			stocked: false
			
		}

		this.updateForm = this.updateForm.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	updateForm (event) {
		this.setState(
			(prevState, props) => {
				let temp = { ...prevState };
				temp[event.target.id] = event.target.value;
				return temp;
			}
		)
	}

	handleSubmit (event) {
		this.props.productFormClickHandler(this.state)
		event.preventDefault();

	}

	render() {
		return(
			<Card>
				<Card.Body>
					<Card.Title>Add new product !</Card.Title>

					<Form className="my-5" onSubmit={this.handleSubmit}>
						<Form.Group className="mb-3" controlId="name">
							<Form.Label>Name</Form.Label>
							<Form.Control type="text" minLength={3} required onChange={this.updateForm}/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="category">
							<Form.Label>Category</Form.Label>
							<Form.Control type="text" minLength={3} required onChange={this.updateForm}/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="price">
							<Form.Label>Price</Form.Label>
							<Form.Control type="number" min="1" required onChange={this.updateForm}/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="stocked">
							<Form.Check type="checkbox" label="in Stock ?" value={true} onChange={this.updateForm}></Form.Check>
						</Form.Group>
						<Button type="submit">Save</Button>
					</Form>
				</Card.Body>
			</Card>
		)
	}
}

export default ProductForm;

