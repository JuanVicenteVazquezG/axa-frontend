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

  useEffect(() => {
    if (word === '') {
      setBrastlewark(Brastlewark);
      console.log('sb', showBrastlewark);
    }
  });

  useEffect(() => {
    searchingByName();
  }, [word]);

  return (
    <div className="w-full flex-row flex-wrap">
      {showBrastlewark
        && showBrastlewark.map((person) => (
          <div key={`${person.id}`} className="sm:w-1/2 md:w-2/5 lg:w-1/3 xl:w-1/4 m" style={{ display: 'inline-block' }}>
            <Link to={`/person/${person.id}`}>
              <h3 className="text-center">{person.name}</h3>
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
        ))}
    </div>
  );
}
