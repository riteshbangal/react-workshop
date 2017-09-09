import React from "react";

export class Body extends React.Component {

    render() {
        var text = "Inside Body!";
        console.log("Body | this is console log.");
        return (
            <div className="container">
                <p>Body Text: {text}</p>
            </div>
        );
    }
}
