import React from 'react';
import Container from 'react-bootstrap/Container';

class Header extends React.Component {

	render() {
		return(
			<Container fluid className="bg-light p-5 mb-4">
				<h1 className="display-1">Muraho</h1>
				<p className="lead">Woula c'est bien</p>
				<hr className="my-4"></hr>
				<blockquote className="blockquote">
					<p>Une mauvaise herbe est une plante dont on n'a pas encore trouvé les vertus</p>
				</blockquote>
				<figcaption className="blockquote-footer">Snoop Doggy Dog</figcaption>
	  			<button className="btn btn-primary btn-lg" href="#" role="button">En savoir plus</button>
			</Container>
		)
	}
}

export default Header;