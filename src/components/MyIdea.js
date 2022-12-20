import React from "react";
import { Component } from "react";
import '../styles/MyIdea.css';
import Idea from './Idea'

class MyIdea extends Component{

    render(){
        return <div className="main">
                <p className="title">My Ideas <button>+</button></p>
                <Idea />
            </div>
    }
}

export default MyIdea