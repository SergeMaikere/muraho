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
	'2': {id: 2, category: 'Musical Instruments', price: '5000', stocked: true, name: 'Cello'},
	'3': {id: 3, category: 'Musical Instruments', price: '11000', stocked: false, name: 'Fortepiano'},
	'4': {id: 4, category: 'Furniture', price: '799', stocked: true, name: 'Chaise Lounge'},
	'5': {id: 5, category: 'Furniture', price: '1300', stocked: false, name: 'Dining Table'},
	'6': {id: 6, category: 'Furniture', price: '100', stocked: true, name: 'Bean Bag'}
};


class Products extends React.Component {

	constructor(props) {
		super(props);

		this.state = { 
			products: Object.keys(PRODUCTS).map( pid => PRODUCTS[pid] ),
			sort: { by: 'name', direction: 'ascending'},
			isInStock: false,
			filterText: '',
			formProduct: {
				id: 0,
				name: '',
				category: '',
				price: '',
				stocked: false
				
			}
		};

		this.removeProduct = this.removeProduct.bind(this);
		this.addProduct = this.addProduct.bind(this);
		this.editProduct = this.editProduct.bind(this);
		this.sortProducts = this.sortProducts.bind(this);
		this.setEditProductState = this.setEditProductState.bind(this);
		this.updateFormState = this.updateFormState.bind(this);
		this.emptyFormProduct = this.emptyFormProduct.bind(this);
		this.setIsInStock = this.setIsInStock.bind(this);
		this.setFilterText = this.setFilterText.bind(this);
	}

	removeProduct (id) {
		this.setState(
			(prevState, props) => ( {products: prevState.products.filter(product => product.id !== id)} )
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

	editProduct (product) {
		this.setState(
			(prevState, props) => ( {products: prevState.products.map( prod => prod.id !== product.id ? prod : product )} )
		)
	}

	setEditProductState (product) {
		this.setState( {formProduct: product} );
	}

	updateFormState (event) {
		this.setState(
			(prevState, props) => {
				const temp = prevState;
				temp.formProduct[event.target.id] = event.target.id === 'stocked' ? event.target.checked : event.target.value;
				return temp;
			}
		)
	}

	emptyFormProduct () {
		this.setState(
			{
				formProduct: {
					id: 0,
					name: '',
					category: '',
					price: '',
					stocked: false
					
				}
			}
		)
	}

	sortProducts (sorting, direction) {
		this.setState( (prevState, props) => ({sort: { by: sorting, direction: direction }}) )
	}

	setIsInStock (bool) {
		this.setState( (prevState, props) => ({isInStock: bool}) )
	}

	setFilterText (str) {
		this.setState( (prevState, props) => ({filterText: str}) );
	}

	render() {
		return(
			<Container fluid="md">
				<Row className='my-5'>
					<Col sm={7}>
						<Card border="light">
							<Card.Body>
								<Card.Title>All your products !</Card.Title>

								<Filters 
									filterText={this.state.filterText}
									filterTextHandler={this.setFilterText}
									isInStock={this.state.isInStock} 
									isInStockHandler={this.setIsInStock}>
								</Filters>
								<ProductTable 
									products={this.state.products}
									productTableRowClickHandler={this.removeProduct}
									editProductTableRowHandler={this.setEditProductState}
									sortProductsHandler={this.sortProducts}
									sort={this.state.sort}
									isInStock={this.state.isInStock}
									filterText={this.state.filterText}>
								</ProductTable>
							</Card.Body>
						</Card>
					</Col>
					<Col sm={5}>
						<ProductForm 
							productForm={this.state.formProduct}
							addProductHandler={this.addProduct}
							updateProductState={this.updateFormState}
							editProductHandler={this.editProduct}
							emptyForm={this.emptyFormProduct}>
						</ProductForm>
					</Col>
				</Row>
			</Container>
		)
	}
}

export default Products;

