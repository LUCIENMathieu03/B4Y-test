import React from "react";
import { Component } from "react";
import "../styles/SavedIdea.css"

 class SavedIdea extends Component {
    constructor(props){
        super(props)

    }

    render(){
        return<div className="idea">
                    <div className="content">
                        <p>The idea will be writed here </p>
                    </div>
                    <div className="si-scores">
                        <div className="si-score">
                            <label htmlFor="impact">Impact</label>
                            <p>10 </p>
                        </div>
                        <div className="si-score">
                            <label htmlFor="ease">Ease</label>
                            <p>10 </p>
                        </div>
                        <div className="si-score">
                            <label htmlFor="confidance">Confidence</label>
                            <p>10 </p>
                        </div>
                        <div className="si-score">
                            <label htmlFor="average">Avg.</label>
                            <p>10 </p>
                        </div>
                    </div>
                   
                </div>
    }
}

export default SavedIdea