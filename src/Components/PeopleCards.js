import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import propTypes from 'prop-types';

export default function PeopleCards(props) {
  const {
    Brastlewark: { Brastlewark },
  } = props;
  // // const { Brastlewark } = props;
  const { word } = props;
  const [showBrastlewark, setBrastlewark] = useState([]);

  const searchingByName = () => {
    setBrastlewark(
      Brastlewark.filter(
        (person) => person.name.toLowerCase().indexOf(word.toLowerCase()) !== -1,
      ),
    );
  };

  // useEffect(() => {
  //   if (word === '') {
  //     setBrastlewark(Brastlewark);
  //   }
  // });

  // useEffect(() => {
  //   searchingByName();
  // }, [word]);

  return (
    <div>
      {/* {showBrastlewark
        && showBrastlewark.map((person) => (
          <div key={`${person.id}`}>
            <Link to={`/person/${person.id}`}>
              <h3>{person.name}</h3>
              <h3>
                Age
                {person.age}
              </h3>
              <h3>
                Height
                {`${person.height}"`}
              </h3>
              <img
                style={{ width: '25%', border: '1px solid black' }}
                src={person.thumbnail}
                alt="personal icon"
              />
            </Link>
          </div>
        ))} */}
    </div>
  );
}
