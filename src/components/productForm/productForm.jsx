import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


class ProductForm extends React.Component {

	constructor(props) {
		super(props);

		this.updateForm = this.updateForm.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	updateForm (event) {
		this.props.updateProductState(event);
	}

	handleSubmit (event) {
		event.preventDefault();
		this.props.productForm.id !== 0 ? this.props.editProductHandler(this.props.productForm) : this.props.productFormClickHandler(this.props.productForm);
		this.props.emptyForm();
	}

	render() {
		return(
			<Card>
				<Card.Body>
					<Card.Title>{this.props.productForm.id === 0 ? 'Add new product !' : 'Edit ' + this.props.productForm.name}</Card.Title>

					<Form className="my-5" onSubmit={this.handleSubmit}>
						<Form.Group className="mb-3" controlId="name">
							<Form.Label>Name</Form.Label>
							<Form.Control 
								type="text" 
								minLength={3} 
								required
								value={this.props.productForm.name} 
								onChange={this.updateForm}/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="category">
							<Form.Label>Category</Form.Label>
							<Form.Control 
								type="text" 
								minLength={3} 
								required
								value={this.props.productForm.category} 
								onChange={this.updateForm}/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="price">
							<Form.Label>Price</Form.Label>
							<Form.Control 
								type="number" 
								step=".01"
								min="1" 
								required
								value={this.props.productForm.price} 
								onChange={this.updateForm}/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="stocked">
							<Form.Check 
								type="checkbox" 
								label="in Stock ?" 
								checked={this.props.productForm.stocked} 
								onChange={this.updateForm}>
							</Form.Check>
						</Form.Group>
						<Button type="submit">Save</Button>
					</Form>
				</Card.Body>
			</Card>
		)
	}
}

export default ProductForm;

