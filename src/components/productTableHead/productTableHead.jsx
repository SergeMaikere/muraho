import React from 'react';
import './productTableHead.css'
import Button from 'react-bootstrap/Button';

class ProductTableHead extends React.Component {

	constructor(props) {
		super(props);

		this.sortProducts = this.sortProducts.bind(this);
		this.highlightCurrentSort = this.highlightCurrentSort.bind(this);
	}

	sortProducts (event) {
		this.props.sortProductsHandler(this.props.column.toLowerCase(), event.target.id)
	}

	highlightCurrentSort (direction) {
		if (this.props.column.toLowerCase() !== this.props.sort.by) return '';
		return this.props.sort.direction === direction ? 'ProductTableHead-current' : '';
	}

	render() {
		return(
			<th>
				{this.props.column}
				<Button 
					id="ascending" 
					variant='outline-dark' 
					className={this.highlightCurrentSort('ascending')}
					onClick={this.sortProducts}>&#x25B2;</Button>
				<Button 
					id="descending" 
					variant='outline-dark'
					className={this.highlightCurrentSort('descending')}
					onClick={this.sortProducts}>&#x25BC;</Button>
			</th>
		)
	}
}

export default ProductTableHead;