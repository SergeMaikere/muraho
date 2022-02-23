import React from 'react';
import './productTableRow.css'
import Button from 'react-bootstrap/Button';


class ProductTableRow extends React.Component {

	constructor(props) {
		super(props);

		this.destroy = this.destroy.bind(this);
	}

	destroy () {
		this.props.productTableRowClickHandler(this.props.product.id) 
	}

	render() {
		return(
			<tr>
				<td>
					<span className={this.props.product.stocked ? '' : 'ProductTableRow-out-of-stock'}>
						{this.props.product.name}
					</span>
				</td>
				<td>
					<span>&#36;{this.props.product.price}</span>
				</td>
				<td>
		           	<Button variant='light' onClick={this.destroy} style={{color: 'red'}}>x</Button>
		        </td>
			</tr>
		)
	}
}

export default ProductTableRow;