import React from 'react';
import { Component } from 'react';
import HornedBeasts from './HornedBeasts';
import beastData from './data.json';
import { Container, Row } from 'react-bootstrap';

class Main extends Component {
	render() {
		console.log({ beastData });
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
                                // horns={beast.horns}
                            />
                        ))}
                    </Row>
				</Container>
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
