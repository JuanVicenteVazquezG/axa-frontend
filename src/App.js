import React, { Component, createContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import gnomeReader from "./Service/gnome-reader";

import Home from "./Views/Home";
import Card from "./Views/Card";

export const AppContext = createContext();

class App extends Component {
  state = {
    Brastlewark: []
  };

  componentDidMount() {
    gnomeReader.getAllInfo().then(Brastlewark => {
      this.setState({ Brastlewark });
    });
  }

  render() {
    const { Brastlewark } = this.state;
    return (
      <Router>
        <div className="App">
          <div className="container">
            <AppContext.Provider value={Brastlewark}>
              <Route exact path="/" component={Home} />
              <Route exact path="/person/:id" component={Card} />
            </AppContext.Provider>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
