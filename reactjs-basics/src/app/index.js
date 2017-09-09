import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home} from "./components/Home";

class MyApp extends React.Component {
    constructor() {
        super();
        this.state = {
            homeLink: "Home"
        };
    }

    onGreet() {
        alert("hello rcb!");
    }

    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName
        });
        //console.log("onChangeLinkName");
    }

    render() {
        var user = {
            name: "Ritesh",
            hobbies: ["Sports", "Coding"]
        };
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <h1>Hello!</h1>
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>
               
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home 
                            name={"Lol"}
                            initialAge={28} 
                            user={user} 
                            greet={this.onGreet}
                            changeLink={this.onChangeLinkName.bind(this)} 
                            initialLink={this.state.homeLink}>
                            <p>This is a children paragraph!</p>
                        </Home>
                    </div>
                </div>
                
            </div>
        );
    }
}

render(<MyApp/>, window.document.getElementById("app"));
