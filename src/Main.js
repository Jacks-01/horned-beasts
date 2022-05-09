import React from "react";
import { Component } from "react";
import HornedBeasts from "./Horned-Beasts";
import beastList from "./StretchGoals";


class Main extends Component {
    render() { 
        return (
            <main>
                <HornedBeasts title="Title1" src="https://target.scene7.com/is/image/Target/GUEST_237ef223-59c8-4d67-ae87-f587d7ed292f" alt="Horned Beast 1" desc="This is the infamous Horned Beasts. This is its description."/>
                <HornedBeasts title="Title2" src="https://i.ytimg.com/vi/uqYfyza4e-c/maxresdefault.jpg" alt="Horned Beast 2" desc="This is the other infamous (but much more mischevious) Horned Beast. This is its description."/>
            </main>
        );
    }
}


 
export default Main;