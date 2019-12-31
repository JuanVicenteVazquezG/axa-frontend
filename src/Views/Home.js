import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Searcher from '../Components/Searcher';
import PeopleCards from '../Components/PeopleCards';


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
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.3rem;
  animation: ${moveInRight} 1s ease-out;
`;

const Separation = styled.div`
margin:20px auto;
  border-top: 1px solid  #806836;
  width:90%;
`;


export default function Home(Brastlewark) {
  const [word, setWord] = useState('');


  const handleSeachController = (aWord) => {
    setWord(aWord);
  };

  return (
    <div>
      <MoveRight><h2 style={{ textAlign: 'center' }}>CHARACTER CENSUS</h2></MoveRight>
      <Separation />
      <div>
        <Searcher handleSeachController={handleSeachController} />
        <PeopleCards Brastlewark={Brastlewark} word={word} />
      </div>
    </div>
  );
}
