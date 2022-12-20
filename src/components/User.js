import React from "react";
import { Component } from "react";
import '../styles/User.css';

class User extends Component{
    constructor(props){
        super(props)
        this.state={
            userToken: null,
        }
        this.handleConnection = this.handleConnection.bind(this)
    }
    
    connection(){}

    async handleConnection(){
        let email = document.querySelector("#email").value
        let password = document.querySelector("#password").value
        let response

        if(email !== '' && password !== '' ) {
             response = fetch("https://my-idea-pool-backend.onrender.com/access-tokens", {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: `{
                    "email": ${email.toString()},
                    "password": ${password.toString()}
                  }`,
                }).then(r => r.json())
                .catch(e => console.log(e))

            await console.log(response);
        } 

    }

    render(){
        return <div>
                <div className="Connection">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" className="email"/> 
                    <label htmlFor="Password">Password</label>
                    <input type="text" name="Password" id="password" className="Password"/>
                    <button onClick={this.handleConnection}>Sign in</button>    
            </div>
            <div className="Connected">
                <p>User Name</p>
                <p>user Picture...</p>
            </div>
        </div>
        
    }
}

export default User