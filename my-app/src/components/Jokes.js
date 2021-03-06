import React, { Component } from "react";

class Jokes extends Component {
    state = { joke: {}};
    componentDidMount(){
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(json => this.setState({ joke: json }));
    }
    render(){
        const { setup, punchline } = this.state.joke;
        return(
            <div>{setup} <em>{punchline}</em></div>
        )
    }
}

export default Jokes;