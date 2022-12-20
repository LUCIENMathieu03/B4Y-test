import React from "react";
import { Component } from "react";
import '../styles/Idea.css';


class Idea extends Component{

    render(){
        return <div className="theNewIdea" >
                    <input type="text" name="newIdea" id="newIdea" className="newIdea"/>
                    <div className="scores">
                        <div className="score">
                            <label htmlFor="impact">Impact</label>
                                <select>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                    <option value={9}>9</option>
                                    <option value={10} selected>10</option>
                                </select>
                        </div>
                        <div className="score">
                            <label htmlFor="ease">Ease</label>
                                <select>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                    <option value={9}>9</option>
                                    <option value={10} selected>10</option>
                                </select>
                        </div> 
                        <div className="score">
                            <label htmlFor="confidence">Confidence</label>
                                <select>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                    <option value={9}>9</option>
                                    <option value={10} selected>10</option>
                                </select>
                        </div>
                    </div>
                    <div className="score">
                            <label htmlFor="average">Avg.</label>
                            <p>number</p>

                    </div>
                    <div className="buttons">
                        <button className="okButton">OK</button>
                        <button className="xButton">X</button>
                    </div>
                   
            </div>
    }
}

export default Idea