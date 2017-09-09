import React from "react";

export class Home extends React.Component {
    render() {
        var text = "Something!";
        return (
            <div className="container">
                <p>Hi {this.props.name}..</p>
                <p>Text: {text}</p>
            </div>
        );
        console.log("this is console log.");
    }
}

Home.propTypes = {
    name: React.PropTypes.string
}
