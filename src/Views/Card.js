import React, { Component } from "react";
import { AppContext } from "../App";

class Home extends Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <div>
        <AppContext.consumer>
          {Brastlewark => { 
              console.log(id);
          }}
        </AppContext.consumer>
      </div>
    );
  }
}

export default Home;
