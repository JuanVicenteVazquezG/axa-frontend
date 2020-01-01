import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Reset } from 'styled-reset';
import { Normalize } from 'styled-normalize';
import styled, { keyframes } from 'styled-components';
import gnomeReader from './Service/gnome-reader';
import Home from './Views/Home';
import Card from './Views/Card';

const AppDiv = styled.div`
 width: 100%;`;

const Container = styled.div`
   width:95%;
   margin:0 auto;
 `;

const moveInLeft = keyframes`
0% {
  opacity: 0;
  transform: translateX(-10rem); }
80% {
  transform: translateX(1rem); }
100% {
  opacity: 1;
  transform: translate(0); }
`;

const MoveLeft = styled.div` 
  display: block;
  font-size: 6rem;
  font-weight: 400;
  text-transform: uppercase;
  animation-name: ${moveInLeft};
  animation-duration: 1s;
  animation-timing-function: ease-out;
`;

const H1Title = styled.h1`
  font-size: 3rem; 
  text-align:center; 
  color: #806836; 
  padding-top:10px;
`;

function App() {
  const [Brastlewark, setBrastlewark] = useState('');

  useEffect(() => {
    if (Brastlewark.length <= 0) {
      gnomeReader
        .getAllInfo()
        .then((info) => {
          setBrastlewark(info);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });

  return (
    <div>
      <Reset />
      <Normalize />
      {Brastlewark && (
        <Router>
          <AppDiv>
            <Container>
              <MoveLeft><H1Title>Brastlewark</H1Title></MoveLeft>
              <Route exact path="/person/:id" render={() => <Card Brastlewark={Brastlewark} />} />
              <Route exact path="/" render={() => <Home Brastlewark={Brastlewark} />} />
              <Route exact path="/person" render={() => <Home Brastlewark={Brastlewark} />} />
            </Container>
          </AppDiv>
        </Router>
      )}
      {!Brastlewark && <div>Loading...</div>}
    </div>
  );
}

export default App;
