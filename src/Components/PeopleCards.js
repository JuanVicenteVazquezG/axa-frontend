import React, { Component } from "react";
import {Link} from 'react-router-dom';
import { AppContext } from "../App";

class PeopleCards extends Component {
  render() {
    return (
      <div>
        <AppContext.Consumer>
          {Brastlewark => {
            return Brastlewark.map((person, index) => {
              return (
                <div key={`index-${index}`}>
                  <Link to={`/person/${person.id}`}>
                    <h3>{person.name}</h3>
                    <h3>Age {person.age}</h3>
                    <h3>Height {person.height + '"'}</h3>
                    <img
                      style={{ width: "25%", border: "1px solid black" }}
                      src={person.thumbnail}
                      alt="personal icon"
                    />
                  </Link>
                </div>
              );
            });
          }}
        </AppContext.Consumer>
      </div>
    );
  }
}

export default PeopleCards;

