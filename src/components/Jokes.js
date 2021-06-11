import React, { Component } from 'react';

class Jokes extends Component{
    state = { joke: {}, jokes: [] };

    componentDidMount(){
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response =>  response.json())
        .then(json => this.setState({ joke: json}))
        .catch(error => alert(error.message));
    }
    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
        .then(response =>  response.json())
        .then(json => this.setState({ jokes: json}))
        .catch(error => alert(error.message));
    }
    render(){
        const { setup, punchline} = this.state.joke;
        return(
            
            <div>
                
                <h2>Jokes Section</h2>
                <p>{setup}<em>{punchline}</em></p>
                <hr />
                <h2>want ten new jokes?</h2>
                <button onClick={this.fetchJokes}>Click Me!</button>
                <noscript>This is commented lines these all line for information only,
                          when ever the above button is clicked it going to call the "fetchJokes" fuction.
                </noscript>

                {
                    this.state.jokes.map(ABCD => {
                        const {id, setup, punchline} = ABCD;
                        return(
                            <p key={id}>{setup}<em>{punchline}</em></p>
                        )
                    })
                    // In above block of code, we use "map" function only when there are objects more than one and "id" is to identify them. 
                    // here we are fetching objects from API and converting the response to json format, then json data is assigned to our "jokes" array.
                }
            </div>
        )
    }
}

export default Jokes;