import React from "react";

export class Footer extends React.Component {
    render() {
        var text = "Inside Footer!";

        console.log("Footer | this is console log.");
        return (
            <div className="container">
                <br/>
                <h2>Footer Text: {text}</h2>
            </div>
        );
    }
}
