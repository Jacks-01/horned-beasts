import React from "react";
import { Component } from "react";

class HornedBeasts extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <h2>Horned Beast #1</h2>
                <img src="https://target.scene7.com/is/image/Target/GUEST_237ef223-59c8-4d67-ae87-f587d7ed292f" alt="Stegosaurus" title="Title"></img>
                <p>This is the infamous Horned Beasts. This is its description.</p>

                <h2>Horned Beast #2</h2>
                <img src="https://i.ytimg.com/vi/uqYfyza4e-c/maxresdefault.jpg" alt="Horned Beast 2" title="Title2"></img>
                <p>This is the other infamous (but much more mischevious) Horned Beast. This is its description.</p>
            </>
        );
    }
}
 
export default HornedBeasts;