/**
 * @file SelectedBeast.js
 * @author Jack Stubblefield
 * @description creates a modal with the image and description when the user clicks the picture of a horned beast.
 */

import { Modal } from 'bootstrap';
import React, { Component } from 'react';

/**
 * creates and renders a modal when an image is clicked on.
 */
class SelectedBeast extends Component {

    render() { 
        return ( 
            <>
                <Modal show={this.props.show} onHide={this.props.onClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>{this.props.description}</p>
                    </Modal.Body>

                    <Modal.Footer></Modal.Footer>

                </Modal>
            
            </>
         );
    }
}
 
export default SelectedBeast;

