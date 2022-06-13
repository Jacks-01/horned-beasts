import React from 'react';
import { Component } from 'react';

class Header extends Component {
	render() {
		const headerStyles = {
			display: 'flex',
			justifyContent: 'center',
		};
		return (
			<header>
				<h1 style={headerStyles}>Horned Beasts</h1>
			</header>
		);
	}
}

export default Header;
