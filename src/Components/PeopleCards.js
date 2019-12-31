import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import propTypes from 'prop-types';

const CardShower = styled.div`
  width:100%;
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content:flex-start;
`;

const CharacterCard = styled.div`
  width:300px;
  height:300px;
  border: 1px solid black;
  border-radius: 25px;
  display:inline-block;
  flex-wrap: wrap;
  margin:10px auto;
  -webkit-box-shadow: 10px 14px 21px 0px rgba(0,0,0,0.33);
  -moz-box-shadow: 10px 14px 21px 0px rgba(0,0,0,0.33);
  box-shadow: 10px 14px 21px 0px rgba(0,0,0,0.33);
  background-color: #FFE8B8;
`;

const RoundImage = styled.div`
  width: 125px;
  height: 125px;
  border-radius:125px;
  background-image: url(${(props) => props.nameImage});
  background-size: 100px 100px;
  background-position: center;
  background-repeat: no-repeat;
  margin:20px auto;
`;

const CharacterName = styled.h3`
  color: #CFB53B;
  text-align: center;
  font-size: 1.7rem;
  margin-top:30px;
`;

const LinkItem = styled(Link)`
  color: black;
  text-decoration: none;
`;

const TextInfo = styled.p`
  text-align: center;
  font-size: 16px;
  margin: 5px 0;
`;

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
            <LinkItem to={`/person/${person.id}`}>
              <CharacterName>{person.name}</CharacterName>
              <RoundImage nameImage={person.thumbnail} />
              <TextInfo>
                {`Age: ${person.age} years`}
              </TextInfo>
              <TextInfo>
                {`Height: ${person.height}"`}
              </TextInfo>
            </LinkItem>
          </CharacterCard>
        ))}
    </CardShower>
  );
}
