import React from 'react';
import ProductTableHead from '../productTableHead/productTableHead.jsx';
import ProductTableRow from '../productTableRow/productTableRow.jsx';
import Table from 'react-bootstrap/Table';

class ProductTable extends React.Component {
	
	render() {

		const rows = this.props.products.map( product => <ProductTableRow productTableRowClickHandler={this.props.productTableRowClickHandler} product={product} key={product.id}></ProductTableRow> )

		return(
			<Table striped bordered>
				<thead>
					<tr>
						<ProductTableHead column="Name"></ProductTableHead>
						<ProductTableHead column="Price"></ProductTableHead>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</Table>
		)
	}
}

export default ProductTable;