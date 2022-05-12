import React from 'react';
import { Component } from 'react';
import HornedBeasts from './HornedBeasts';
import beastData from './data.json';
import { Container, Row } from 'react-bootstrap';
import SelectedBeast from './SelectedBeast';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            selectedbeast: beastData[0]
        }
    }
        selectedBeast = (beast) => {
            this.setState({
                show: true,
                selectedbeast: beast
            })
        
        
    }
     onClose = () => {
         this.setState({
             show: false,
         })
        
    }
	render() {
		return (
			<>
				<Container>
                    <Row>
                        {beastData.map((beast) => (
                            <HornedBeasts
                                key={beast._id}
                                image_url={beast.image_url}
                                title={beast.title}
                                description={beast.description}
                                keyword={beast.keyword}
                                onClick={this.selectedBeast}
                                beastRef={beast}
                                // horns={beast.horns}
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

// {beastData.map((value, index) => {
//     return <li key={index}><HornedBeasts
//     title={value.title}
//     src={value.image_url}
//     alt={value.keyword}
//     desc={value.description}
//     />
// </li>
// })}
