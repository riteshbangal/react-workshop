import React from "react";
import { Button, Divider } from 'semantic-ui-react';

import { Author } from "./Author";

export class Body extends React.Component {

    constructor() {
		super();
		this.state = {
			authors: []
		};
    }
    
    fetchAuthors() {
        
        const { authors } = this.state
        var name = '';

        const url = "https://randomuser.me/api/?results=10&gender=female";
        fetch(url)
            .then((response) => response.json()) // Transform the data into json
            .then( jsonResponse => this.setState({
                    authors: jsonResponse.results
                }
            ));
    }

    render() {
        const { authors } = this.state	
        console.log("Authors: " + authors);
        
        var text = "Authors API Call";
        return (
            <div className="container">
                {text} {' : '}<Button primary color='teal' fluid size='large' onClick={() => this.fetchAuthors()}>Get Authors</Button>
                <Divider/>
                <Author authors={authors}/>
                <Divider/>
            </div>
        );
    }
}
