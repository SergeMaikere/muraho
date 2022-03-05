import React from 'react';
import ProductTableHead from '../productTableHead/productTableHead.jsx';
import ProductTableRow from '../productTableRow/productTableRow.jsx';
import Table from 'react-bootstrap/Table';

class ProductTable extends React.Component {
	

	constructor(props) {
		super(props);
		this.sortProducts = this.sortProducts.bind(this);
		this.filterProductsByIsInStock = this.filterProductsByIsInStock.bind(this);
		this.createRows = this.createRows.bind(this);
	}

	sortProducts (products) {
		const direction = this.props.sort.direction;
		const by = this.props.sort.by;
		if (direction == 'ascending' && by == 'price') products.sort( (a, b) => Number(a.price) - Number(b.price) );
		if (direction == 'descending' && by == 'price') products.sort( (a, b) => Number(b.price) - Number(a.price) );
		if (direction == 'ascending' && by == 'name') products.sort( (a, b) => a.name > b.name ? 1 : (a.name < b.name ? -1 : 0) );
		if (direction == 'descending' && by == 'name') products.sort( (a, b) => a.name < b.name ? 1 : (a.name > b.name ? -1 : 0) );
		return products;
	}

	filterProductsByIsInStock (products) {
		if (!this.props.isInStock) return products;
		return products.filter( product => product.stocked == true );
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
		const rows = this.createRows(this.sortProducts(this.filterProductsByIsInStock(this.props.products)));

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