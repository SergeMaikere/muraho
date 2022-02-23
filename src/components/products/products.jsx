import React from 'react';
import Filters from '../filters/filters.jsx';
import ProductTable from '../productTable/productTable.jsx';
import ProductForm from '../productForm/productForm.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const PRODUCTS = {
	'1': {id: 1, category: 'Musical Instruments', price: '459.99', stocked: true, name: 'Clarinet'},
	'2': {id: 2, category: 'Musical Instruments', price: '5,000', stocked: true, name: 'Cello'},
	'3': {id: 3, category: 'Musical Instruments', price: '11,000', stocked: false, name: 'Fortepiano'},
	'4': {id: 4, category: 'Furniture', price: '799', stocked: true, name: 'Chaise Lounge'},
	'5': {id: 5, category: 'Furniture', price: '1,300', stocked: false, name: 'Dining Table'},
	'6': {id: 6, category: 'Furniture', price: '100', stocked: true, name: 'Bean Bag'}
};


class Products extends React.Component {

	constructor(props) {
		super(props);
		this.state = { products: Object.keys(PRODUCTS).map( pid => PRODUCTS[pid] ) };
		this.removeProduct = this.removeProduct.bind(this);
		this.addProduct = this.addProduct.bind(this);
	}

	removeProduct (id) {
		this.setState(
			(prevState, props) => ( {products: prevState.products.filter(product => product.id != id)} )
		)
	}

	addProduct (product) {
		this.setState(
			(prevState, props) => {
				let temp = [ ...prevState.products ];
				const highestIdProduct = prevState.products.sort( (a, b) => a.id - b.id ).pop();
				temp.push( {...product, id: highestIdProduct.id + 1} )
				return { products: temp }
			}
		)
	}

	render() {
		return(
			<Container fluid="md">
				<Row className='my-5'>
					<Col sm={5}>
						<Card border="light">
							<Card.Body>
								<Card.Title>All your products !</Card.Title>

								<Filters></Filters>
								<ProductTable productTableRowClickHandler={this.removeProduct} products={ this.state.products }></ProductTable>
							</Card.Body>
						</Card>
					</Col>
					<Col sm={4}><ProductForm productFormClickHandler={this.addProduct}></ProductForm></Col>
					<Col sm={3}></Col>
				</Row>
			</Container>
		)
	}
}

export default Products;

