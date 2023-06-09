import React from "react";
import "./App.css";
import axios from "axios";
class App extends React.Component {
  state = {
    advise: "",
  };
  componentDidMount() {
    this.fetchJoke();
  }
  fetchJoke = () => {
    axios
      .get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      })
      .then((response) => {
        this.setState({ joke: response.data.joke });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { joke } = this.state;
    return (
      <div className="app">
        <div className="card">
          <h1>It's enough dad..</h1>
          <p className="heading">{joke}</p>
          <button className='bn5' onClick={this.fetchJoke}>Get Joke</button>
        </div>
      </div>
    );
  }
}

export default App;
