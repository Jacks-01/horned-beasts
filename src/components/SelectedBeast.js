/**
 * @file SelectedBeast.js
 * @author Jack Stubblefield
 * @description creates a modal with the image and description when the user clicks the picture of a horned beast.
 */

import { Modal } from 'bootstrap';
import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts';


class SelectedBeast extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <>
                <Modal variant="primary" onClick={handleShow}>
                    <HornedBeasts/>
                </Modal>
            
            </>
         );
    }
}
 
export default SelectedBeast;

