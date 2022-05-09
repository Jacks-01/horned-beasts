import React from "react";
import { Component } from "react";

class HornedBeasts extends Component {
    state = {  } 
    render() { 
        return (
            <section className="HornedBeastSection">
                <h2>{this.props.title}</h2>
                <img src={this.props.src} alt={this.props.alt}/>
                <p>{this.props.desc}</p>
            </section>
        );
    }
}



export default HornedBeasts;
