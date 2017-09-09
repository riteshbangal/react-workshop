import React from "react";
import { render } from "react-dom";

import './style/calculator.css'

import { Calculator } from "./components/Calculator";

class CalculatorApp extends React.Component {
    
    render() {
        console.log("CalculatoraApp | this is console log.");
        return (           
            <div className="container" id="wrapper">
                <Calculator />
            </div>
        );
    }
}

render(<CalculatorApp/>, document.getElementById("calculator"));
