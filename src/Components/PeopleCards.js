import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import propTypes from 'prop-types';

const CardShower = styled.div`
  width:100%;
  display:flex;
  flex-direction: row;
  justify-content:flex-start;
`;
const CharacterCard = styled.div`
  width:300px;
  border: 1px solid black;
  display:inline-block;
  flex-wrap: wrap;
`;

const RoundImage = styled.div`
  width: 100px;
  border-radius:75px;
  background-image: url( ${(props) => (props.nameImage)});`;

export default function PeopleCards(props) {
  const {
    Brastlewark: { Brastlewark },
  } = props;
  // // const { Brastlewark } = props;
  const { word } = props;
  const [showBrastlewark, setBrastlewark] = useState([]);

  const searchingByName = () => {
    setBrastlewark(Brastlewark.filter((person) => (person.name.toLowerCase().indexOf(
      word.toLowerCase(),
    ) !== -1)));
  };

  useEffect(() => {
    if (word === '') {
      setBrastlewark(Brastlewark);
    }
  });

  useEffect(() => {
    searchingByName();
  }, [word]);

  return (
    <CardShower>
      {showBrastlewark
        && showBrastlewark.map((person) => (
          <CharacterCard
            key={`${person.id}`}
          >
            <Link to={`/person/${person.id}`}>
              <h3>{person.name}</h3>
              <h3>
                Age
                {person.age}
              </h3>
              <h3>
                Height:
                {' '}
                {`${person.height} "`}
              </h3>
              <RoundImage nameImage={person.thumbnail} />
            </Link>
          </CharacterCard>
        ))}
    </CardShower>
  );
}
