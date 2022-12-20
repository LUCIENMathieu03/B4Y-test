import React from "react";
import { Component } from "react";
import '../styles/MyIdea.css';
import Idea from './Idea'
import SavedIdea  from './SavedIdea';

class MyIdea extends Component{

    render(){
        return <div className="main">
                <p className="title">My Ideas <button onClick={this.handleClick}>+</button></p>
                <Idea />
                <SavedIdea/>
            </div>
    }
}

export default MyIdea