import React from "react";
import { render } from "react-dom";

import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Body } from "./components/body";
import { Bulb } from "./components/bulb";

var edureka_style = {color :'blue'}
class EdurekaApp extends React.Component {
   render() {
        console.log("EdurekaApp | this is console log.");
        return (           
            <div className="container" style={edureka_style}>
                <Header username="Ritesh" />
                <Body />
                {/* <Bulb /> */}
                <Footer />
            </div>
        );
    }
}

render(<EdurekaApp/>, document.getElementById("edureka"));
