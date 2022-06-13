import React from 'react';
import { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class HornedBeasts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			favorite: '',
		};
	}

	handleClick = () => {
		console.log('clicking button');
		this.setState({ favorite: this.state.favorite + '🦄' });
		this.props.onClick(this.props.beastRef);
	};

	render() {
		return (
			<>
				<Col>
					<Card
						style={{ width: '18rem' }}
						className="beastCard"
						onClick={this.handleClick}
					>
						<Card.Body>
							<Card.Title>{this.props.title}</Card.Title>
							<Card.Img
								variant="top"
								src={this.props.image_url}
								onClick={this.props.handleClick}
							/>
							<Card.Text>{this.props.description}</Card.Text>
							<Card.Text>Favorites: {this.state.favorite}</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</>
		);
	}
}

export default HornedBeasts;
