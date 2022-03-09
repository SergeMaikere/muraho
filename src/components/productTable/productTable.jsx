import React from 'react';
import ProductTableHead from '../productTableHead/productTableHead.jsx';
import ProductTableRow from '../productTableRow/productTableRow.jsx';
import Table from 'react-bootstrap/Table';
import { pipe } from 'ramda';

class ProductTable extends React.Component {
	

	constructor(props) {
		super(props);
		this.sortProducts = this.sortProducts.bind(this);
		this.filterProductsByIsInStock = this.filterProductsByIsInStock.bind(this);
		this.filterProductsByFilterText = this.filterProductsByFilterText.bind(this);
		this.createRows = this.createRows.bind(this);
	}

	filterProductsByIsInStock (products) {
		if (!this.props.isInStock) return products;
		return products.filter( product => product.stocked === true );
	}

	filterProductsByFilterText (products) {
		if (this.props.filterText === '') return products;
		const str = this.props.filterText.toLowerCase().trim();
		return products.filter( product => product.name.toLowerCase().includes(str) );
	}

	sortProducts (products) {
		const direction = this.props.sort.direction;
		const by = this.props.sort.by;
		if (direction === 'ascending' && by === 'price') products.sort( (a, b) => Number(a.price) - Number(b.price) );
		if (direction === 'descending' && by === 'price') products.sort( (a, b) => Number(b.price) - Number(a.price) );
		if (direction === 'ascending' && by === 'name') products.sort( (a, b) => a.name > b.name ? 1 : (a.name < b.name ? -1 : 0) );
		if (direction === 'descending' && by === 'name') products.sort( (a, b) => a.name < b.name ? 1 : (a.name > b.name ? -1 : 0) );
		return products;
	}

	createRows (products) {
		return products.map( 
			product => <ProductTableRow 
							productTableRowClickHandler={this.props.productTableRowClickHandler} 
							product={product} key={product.id}>
						</ProductTableRow>
		) 
	}

	render() {

		const functionsPipeline = pipe(
			this.filterProductsByIsInStock, 
			this.filterProductsByFilterText, 
			this.sortProducts, 
			this.createRows
		);
		
		const rows = functionsPipeline(this.props.products);

		return(
			<Table striped bordered>
				<thead>
					<tr>
						<ProductTableHead sortProductsHandler={this.props.sortProductsHandler} sort={this.props.sort} column="Name"></ProductTableHead>
						<ProductTableHead sortProductsHandler={this.props.sortProductsHandler} sort={this.props.sort} column="Price"></ProductTableHead>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</Table>
		)
	}
}

export default ProductTable;