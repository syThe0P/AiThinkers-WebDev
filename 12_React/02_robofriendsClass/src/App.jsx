import React, { Component } from "react";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
import CardList from "./CardList";
import Scroll from './Scroll'

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfields: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfields: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfields.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <h1>Loading....</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f2">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }

    // Move this line here if you want to log the filtered robots whenever the search changes
  }
}

export default App;
