import React from "react";

export class Home extends React.Component {

    constructor(props) {
        super();
        //this.age = props.age;
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: props.initialLink
        };
        setTimeout(() => {
            this.setState({
                status: 1
            });
        }, 3000);
        console.log("Component constructor.");
    }

    componentWillMount() {console.log("Component will mount.");}
    componentDidMount() {console.log("Component did mount.");}
    componentWillReceiveProps(nextProps) {console.log("Component will receive props.", nextProps);}
    shouldComponentUpdate(nextProps, nextState) {
        console.log("Should component update.", nextProps, nextState);
        return true;
    }
    componentWillUpdate(nextProps, nextState) { console.log("Component will update.", nextProps, nextState); }
    componentDidUpdate(prevProps, prevState) { console.log("Component did update.", prevProps, prevState); }
    componentWillUnmount() {console.log("*****Component will unmount.******");}
 
    onMakeOlder() {
        this.setState({
            age: this.state.age + 1
        });
        //this.age += 1;
        console.log(this.state.age);
        
    }

    onMakeYounger() {
        this.setState({
            age: this.state.age - 1
        });
        console.log(this.state.age);
    }

    onChangeLink() {
        this.props.changeLink(this.state.homeLink);
        console.log("onChangeLink");
    }

    onChangeLinkFromText(event) {
        this.setState({
            homeLink: event.target.value
        });
        console.log("onChangeLinkFromText");
    }

    render() {
        var text = "Something!";

        return (
            <div className="container">
                <p>In a new component</p>
                <p>{text}</p>
                <p>Passed name is: {this.props.name}</p>
                <p>User name is: {this.props.user.name}</p>
                <div>
                    <h4>Hobbies:</h4>
                    <ul>
                        {this.props.user.hobbies.map(
                            (hobby, i) => <li key={i}>{hobby}</li>
                        )}
                    </ul>
                </div>
                <hr/>
                {this.props.children}
                <hr/>
                <button onClick={this.props.greet} className="btn btn-primary">Call Greet</button>
                <hr/>

                Enter Link: <input type="text" value={this.state.homeLink} 
                    onChange={
                        (event) => this.onChangeLinkFromText(event)
                    }/> <span/>

                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>
                <hr/>
                <p>Initial Age is: {this.props.initialAge}</p>
                <p>Status: {this.state.status}</p>
                <p>My Age is: {this.state.age}</p>
                <hr/>
                <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me Older!</button>
                <span/>
                <button onClick={this.onMakeYounger.bind(this)} className="btn btn-primary">Make me Younger!</button>
            </div>
        );
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    initialAge: React.PropTypes.number,
    user: React.PropTypes.object,
    children: React.PropTypes.element.isRequired,
    greet: React.PropTypes.func,
    initialLink: React.PropTypes.string
}
