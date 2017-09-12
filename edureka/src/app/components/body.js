import React from "react";

export class Body extends React.Component {

    constructor() {
		super();
		this.state = {
			authorNames: []
		};
    }
    
    fetchAuthors() {
        
        const { authorNames } = this.state
        var name = '';

        const url = "https://randomuser.me/api/?results=10";
        fetch(url).then((response) => response.json())
                  .then(function(data){
                      let authors = data.results;
                      authors.map(function(author ) {
                        name = author.name.first + " " + author.name.last;
                        console.log("Author Name: " + name);
                        
                      })
                  })
    }

    render() {
        const { authorName } = this.state	
        console.log("Author Name: " + authorName);

        var text = "Authors API Call";
        //console.log("Body | this is console log.");
        return (
            <div className="container">
                {text} {' : '}<button onClick={() => this.fetchAuthors()}>Get Authors</button>
            </div>
        );
    }
}
