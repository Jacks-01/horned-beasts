import React from 'react';
import { Component } from 'react';
import HornedBeasts from './HornedBeasts';
import beastData from './data.json';
import { Container, Row } from 'react-bootstrap';
import SelectedBeast from './SelectedBeast';
import Filter from './Filter';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			selectedbeast: beastData,
			filteredBeasts: false,
		};
	}
	selectedBeast = (beast) => {
        console.log('this is beast', beast);
		this.setState({
			show: true,
			selectedbeast: [beast]
		});
	};
	onClose = () => {
		this.setState({
			show: false,
		});
	};

	handleSelect = (e) => {
		console.log(e.target.value);
        if (e.target.value === 'all') {
            this.setState({ selectedbeast: beastData})
        } else {
            let horns = parseInt(e.target.value);
            let filtered = beastData.filter((beast) => beast.horns === horns);
            this.setState({ selectedbeast: filtered });
            // console.log(this.state.selectedbeast);
        }
	};

	render() {
		return (
			<>
				<Filter handleSelect={this.handleSelect} />
				<Container>
					<Row>
						{this.state.selectedbeast.map((beast) => (
							<HornedBeasts
								key={beast._id}
								image_url={beast.image_url}
								title={beast.title}
								description={beast.description}
								keyword={beast.keyword}
								onClick={this.selectedBeast}
								beastRef={beast}
								horns={beast.horns}
							/>
						))}
					</Row>
				</Container>
				<SelectedBeast
					show={this.state.show}
					beast={this.state.selectedbeast}
					onClose={this.onClose}
				/>
			</>
		);
	}
}

export default Main;
