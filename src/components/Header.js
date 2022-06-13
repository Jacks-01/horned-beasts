import React from "react";
import { Component } from "react";
import { Form } from "react-bootstrap";



class Header extends Component {

        
    render() {
        const headerStyles = {
            display: 'flex',
            justifyContent: 'center'
        }; 
        return (
            <header>
                <h1 style={headerStyles}>Horned Beasts</h1>
                <Form>
                    <Form.Group>
                        <Form.Label></Form.Label>
                        
                    </Form.Group>
                </Form>
            </header>
        );
    }
}
 
export default Header;