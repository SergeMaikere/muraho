import React from 'react';
import './productTableRow.css'
import Button from 'react-bootstrap/Button';
import { XCircleFill } from 'react-bootstrap-icons';
import { PencilSquare } from 'react-bootstrap-icons';


class ProductTableRow extends React.Component {

	constructor(props) {
		super(props);

		this.destroy = this.destroy.bind(this);
		this.edit = this.edit.bind(this);
	}

	destroy () {
		this.props.productTableRowClickHandler(this.props.product.id) 
	}

	edit () {
		this.props.editProductTableRowHandler( {...this.props.product} );
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
					<XCircleFill onClick={this.destroy} style={{cursor: 'pointer'}}/>
					<PencilSquare onClick={this.edit} style={{cursor: 'pointer'}}/>
		        </td>
			</tr>
		)
	}
}

export default ProductTableRow;