import React, { Component } from "react";
import PeopleCards from "../Components/PeopleCards";

class Home extends Component {
    render() {
    return (
      <div>
        <h1>List of people</h1>
        <PeopleCards />
      </div>
    );
  }
}

export default Home;
