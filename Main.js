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
            selectedbeast: beastData[0]
        }
    }
        selectedBeast = (beast) => {
            this.setState({
                show: true,
                selectedbeast: beast,
                filteredBeast: []
            })
        
        
    }
     onClose = () => {
         this.setState({
             show: false,
         })
        
    }
    
     handleSelect = (e) => {
        console.log(e.target.value);
        let horns = e.target.value;
        let filteredBeast = beastData.filter((beast)=>{
            return (horns === beast);
        });
        
        this.setState({ selectedBeast: filteredBeast });
        console.log(this.state.selectedbeast);
     }
     

	render() {
		return (
			<>
              <Filter handleSelect={this.handleSelect}/>
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
