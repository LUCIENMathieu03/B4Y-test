import React from "react";
import { Component } from "react";
import '../styles/Idea.css';


class Idea extends Component{

    constructor(props){
        super(props)
        this.state = {
            Impact: 10,
            Ease:10,
            Confidance:10,
            average: 10
        }
        this.handleChange = this.handleChange.bind(this)
    }

    computeAverage(){
        let Impact= parseInt(this.state.Impact)
        let Ease= parseInt(this.state.Ease)
        let Confidance= parseInt(this.state.Confidance)
        let avg = ((Impact + Ease + Confidance ) / 3)
 
       return avg.toFixed(2)
    }

    handleChange(e){
        if( e.target.name == "Impact"){
            this.setState({
                Impact : e.target.value 
            }, ()=>{
                this.setState({
                    average: this.computeAverage() 
                })})
        }else if(e.target.name == "Ease"){
            this.setState({
                Ease : e.target.value 
            }, ()=>{
                this.setState({
                    average: this.computeAverage() 
                })})
        }else if(e.target.name == "Confidance"){
            this.setState({
                Confidance : e.target.value,    
            },()=>{
                this.setState({
                    average: this.computeAverage() 
                })}
            )
        }
        
    }


    render(){
        return <div className="theNewIdea" >
                    <input type="text" name="newIdea" id="newIdea" className="newIdea"/>
                    <div className="scores">
                        <div className="score">
                            <label htmlFor="impact">Impact</label>
                                <select value={this.state.Impact} name="Impact" onChange={this.handleChange}>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                    <option value={9}>9</option>
                                    <option value={10} >10</option>
                                </select>
                        </div>
                        <div className="score">
                            <label htmlFor="ease">Ease</label>
                                <select value={this.state.Ease} name="Ease" onChange={this.handleChange}>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                    <option value={9}>9</option>
                                    <option value={10} >10</option>
                                </select>
                        </div> 
                        <div className="score">
                            <label htmlFor="confidence">Confidence</label>
                                <select value={this.state.Confidance} name="Confidance" onChange={this.handleChange}>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                    <option value={9}>9</option>
                                    <option value={10} >10</option>
                                </select>
                        </div>
                    </div>
                    <div className="score">
                            <label htmlFor="average">Avg.</label>
                            <p>{this.state.average}</p>

                    </div>
                    <div className="buttons">
                        <button className="okButton">OK</button>
                        <button className="xButton">X</button>
                    </div>
                   
            </div>
    }
}

export default Idea