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
  margin-bottom: 100px;
`;

const CardDetailOrganization = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap: wrap;
  justify-content: space-around;
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
`;

const BigImage = styled(Img)`
  width: 100%;
  border-radius:25px;
  border: 2px solid grey;
  margin:20px auto;
`;

const DetailsInfoBig = styled.div`
  width: 300px;
  padding-top: 30px;
`;

const CharacterInfo = styled.p`
  margin:10px 0;
`;

const TextInfo = styled.p`
  text-align: center;
  font-size: 16px;
  margin: 5px 0;
  font-weight: bolder;
`;

const InfoFriends = styled.div`
  width: 300px;
`;

const ImagePosition = styled.div`
  width: 50px;
  height: 50px;
  margin: 0 auto 30px auto;
`;

const RoundImage = styled(Img)`
  width: 100%;
  height:100%;
  border-radius:125px;
  border: 2px solid grey;
  overflow: hidden;
  margin:20px auto;
`;

const LinkItem = styled(Link)`
  color: black;
  text-decoration: none;
`;

const Name = styled.p`
  margin:0 auto;
`;

const LittleCard = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row; 
  justify-content: center; 
  border: 1px solid grey;
  margin: 0 auto 10px auto;
  border-radius: 10px;
  -webkit-box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.6);
  -moz-box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.6);
  box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.6);
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
      {/* <Link to="/">{'<<Back'}</Link> */}
      {Person && (
        <CardDetail>
          <CharacterName>{Person.name}</CharacterName>
          <CardDetailOrganization>
            <ImagePositionBig>
              <BigImage src={Person.thumbnail} alt="Personal icon" />
            </ImagePositionBig>
            <DetailsInfoBig>
              <TextInfo>Info</TextInfo>
              <CharacterInfo>
                {`Age: ${Person.age}`}
              </CharacterInfo>
              <CharacterInfo>
                {`Weight: ${Person.weight} lb`}
              </CharacterInfo>
              <CharacterInfo>
                {`Height: ${Person.height}`}
              </CharacterInfo>
              <CharacterInfo>
                {`Hair Color: ${Person.hair_color}`}
              </CharacterInfo>
              <TextInfo>Professions: </TextInfo>
              {Person.professions && (
                <div>
                  {Person.professions.map((profession, index) => (
                    <div key={`professions-${index + 100}`}><CharacterInfo>{profession}</CharacterInfo></div>
                  ))}
                </div>
              )}
              {!Person.professions && <div>No professions known</div>}
            </DetailsInfoBig>
            <InfoFriends>
              <TextInfo>Friends: </TextInfo>
              {Person.friends && (
                <div>
                  {Person.friends.length > 0 && Person.friends.map((friend, index) => (
                    <LittleCard key={`friends-${index + 100}`}>
                      <LinkItem to={`/person/${handleLookingForAFriend(friend)}`} params={Brastlewark}>
                        <div>
                          <Name>{friend}</Name>
                          <ImagePosition>
                            <RoundImage
                              src={Brastlewark[handleLookingForAFriend(friend)].thumbnail}
                              alt="a friend"
                            />
                          </ImagePosition>
                        </div>
                      </LinkItem>
                    </LittleCard>
                  ))}
                  {!Person.friends && <div>No friend known</div>}
                </div>
              )}
            </InfoFriends>
          </CardDetailOrganization>
        </CardDetail>
      )}
    </ContainerCardDetail>
  );
}

Card.propTypes = {
  Brastlewark: propTypes.arrayOf(propTypes.object).isRequired,
};
