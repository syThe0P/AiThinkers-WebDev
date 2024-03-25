import React, { Component } from "react";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
import CardList from "./CardList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfields: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfields: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(this.state.searchfields.toLowerCase());
    });

    console.log(filteredRobots); // Move this line here if you want to log the filtered robots whenever the search changes

    return (
      <div className="tc">
        <h1 className="f2" >RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
