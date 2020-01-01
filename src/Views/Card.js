import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Img from 'react-image';
import propTypes from 'prop-types';

const ContainerCardDetail = styled.div`
  width: 100%;
`;

const moveInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(10rem); }
  80% {
    transform: translateX(-1rem); }
  100% {
    opacity: 1;
    transform: translate(0rem); }
`;

const MoveRight = styled.div` 
  display: block;
  font-size: 2rem;
  letter-spacing: 0.3rem;
  animation: ${moveInRight} 1s ease-out;
`;

const CharacterDetail = styled.h2`
  text-align: center;
`;

const CardDetail = styled.div`
  width: 100%;
  border: 1px solid grey;
  border-radius: 25px;
`;

const CardDetailOrganization = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap: wrap;
  justify-content:center;
`;

const Separation = styled.div`
margin:20px auto;
  border-top: 1px solid  #806836;
  width:90%;
`;

const CharacterName = styled.h3`
  color: #CFB53B;
  text-align: center;
  font-size: 1.7rem;
  margin-top:30px;
`;

const ImagePositionBig = styled.div`
  display: inline-block;
  width:300px;
  height: 300px;
  margin: 0 auto 30px auto;
`;

const BigImage = styled(Img)`
  width: 100%;
  height: 100%;
  border-radius:25px;
  border: 2px solid grey;
  overflow: hidden;
  margin:20px auto;
`;

const DetailsInfoBig = styled.div`
  width: 300px;
`;

export default function Card({ Brastlewark }) {
  const [Person, setPerson] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setPerson(Brastlewark[id]);
  }, [id]);

  const handleLookingForAFriend = (friend) => Brastlewark.findIndex((person) => (
    person.name === friend));

  /* This is a view */
  return (
    <ContainerCardDetail>
      <MoveRight><CharacterDetail>DETAIL INFO</CharacterDetail></MoveRight>
      <Separation />
      <Link to="/" style={{ marginBottom: '330px' }}>{'<<Back'}</Link>
      {Person && (
        <CardDetail>
          <CharacterName>{Person.name}</CharacterName>
          <CardDetailOrganization>
            <ImagePositionBig>
              <BigImage src={Person.thumbnail} alt="Personal icon" />
            </ImagePositionBig>
            <DetailsInfoBig>
              <p>
                Age:
                {Person.age}
              </p>
              <p>
                Weight:
                {Person.weight}
                lb
              </p>
              <p>
                Height:
                {Person.height}
              </p>
              <p>
                Hair Color:
                {Person.hair_color}
              </p>

              <h3>Professions: </h3>

              {Person.professions && (
                <div>
                  {Person.professions.map((profession, index) => (
                    <div key={`professions-${index + 100}`}>{profession}</div>
                  ))}
                </div>
              )}
              {!Person.professions && <div>No professions known</div>}
              <h3>Friends: </h3>
              {Person.friends && (
                <div>
                  {Person.friends.map((friend, index) => (
                    <div key={`friends-${index + 100}`}>
                      <Link to={`/person/${handleLookingForAFriend(friend)}`} params={Brastlewark}>
                        <div>
                          {friend}
                          <img
                            style={{ width: '50px' }}
                            src={Brastlewark[handleLookingForAFriend(friend)].thumbnail}
                            alt="a friend"
                          />
                        </div>
                      </Link>
                    </div>
                  ))}
                  {!Person.friends && <div>No friend known</div>}
                </div>
              )}
            </DetailsInfoBig>
          </CardDetailOrganization>
        </CardDetail>
      )}
    </ContainerCardDetail>
  );
}

Card.propTypes = {
  Brastlewark: propTypes.arrayOf(propTypes.object).isRequired,
};
