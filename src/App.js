import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Reset } from 'styled-reset';
import styled from 'styled-components';
import gnomeReader from './Service/gnome-reader';
import Home from './Views/Home';
import Card from './Views/Card';

const H1Title = styled.h1`font-size: 2rem; text-align:center; color: red; margin-top:10px;`;
const AppDiv = styled.div`width: 100%; background-image: url('Images/parchment.svg');`;

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
      {Brastlewark && (
        <Router>
          <AppDiv>
            <div className="container">
              <H1Title className="mx-auto text-4xl text-center text-gray-300 font-bold uppercase">Brastlewark</H1Title>
              <Route exact path="/person/:id" render={() => <Card Brastlewark={Brastlewark} />} />
              <Route exact path="/" render={() => <Home Brastlewark={Brastlewark} />} />
              <Route exact path="/person" component={Home} />
            </div>
          </AppDiv>
        </Router>
      )}
      {!Brastlewark && <div>Loading...</div>}
    </div>
  );
}

export default App;
