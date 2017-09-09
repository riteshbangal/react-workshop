import React from "react";
import { render } from "react-dom";

import { Home } from "./components/Home";

class HelloWorldApp extends React.Component {
   render() {
        console.log("this is console log.");
        return (
            <div className="container">
                <h1>This is my Hello World App!!</h1>
                <Home name={"RCB"} />
            </div>
        );
    }
}

render(<HelloWorldApp/>, document.getElementById("helloworld"));
