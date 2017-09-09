import React from "react";

export class Bulb extends React.Component {
    constructor() {
        super();
        this.state = {
            switchStatus: false
        };
    }

    switchOnOrOff(event) {
        this.setState({
            switchStatus: !this.state.switchStatus
        });       
        console.log("Inside switchOnOrOff() method | switchStatus: " + this.state.switchStatus);
    }

    render() {
        console.log("Bulb | this is console log.");
        var displayBulb = this.state.switchStatus ? 'images/bulb_switched_on.gif' : 'images/bulb_switched_off.gif';
        return (
            <div className="container">
                <div>
                    <img onClick={this.switchOnOrOff.bind(this)} src={displayBulb} width="120" height="200"/>
                </div>
            </div>
        );
    }
}
