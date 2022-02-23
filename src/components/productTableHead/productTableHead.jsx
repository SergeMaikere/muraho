import React from 'react';
import './productTableHead.css'
import Button from 'react-bootstrap/Button';

class ProductTableHead extends React.Component {


	render() {
		return(
			<th>
				{this.props.column}
				<Button variant='light' className='ProductTableHead-current mx-1'>&#x25BC;</Button>
				<Button variant='light'>&#x25B2;</Button>
			</th>
		)
	}
}

export default ProductTableHead;