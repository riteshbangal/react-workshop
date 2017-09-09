import React from "react";

export class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            welcomeMessage : 'Welcome to Edureka App!'
        };

        setTimeout(() => {
            this.setState({
                welcomeMessage: 'Keep staying at Edureka App!'
            });
        }, 5000);
        console.log("Component constructor.");
    }
   
    render() {
        var text = "Inside Header!";

        console.log("Header | this is console log.");
        return (
            <div className="container">
                <div>Hi {this.props.username}! {this.state.welcomeMessage}</div>
                <h2>Header Text: {text}</h2>
                <br/>
            </div>
        );
    }
}
