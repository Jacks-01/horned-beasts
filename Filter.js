import React, { Component } from 'react';
import { Form } from "react-bootstrap";

class Filter extends Component {
    handleSelect = (e) => {
        console.log(e.target.value);
        this.props.handleSelect(e);
    };
    
    render() { 
        return ( 
            <Form>
                <Form.Group className="mb-3" controlid='hornSelector'>
                    <Form.Label>Filter by Horns</Form.Label>
                    <Form.Select onChange={this.handleSelect}>
                        <option>1</option>
                        <option>2</option>
                    </Form.Select>                   
                </Form.Group>
        </Form>
         );
    }
}
 
export default Filter;