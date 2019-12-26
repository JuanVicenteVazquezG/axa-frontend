import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import gnomeReader from './Service/gnome-reader';
import Home from './Views/Home';
import Card from './Views/Card';

function App() {
  const [Brastlewark, gnomeReadInfo] = useState(
    gnomeReader.getAllInfo().then((info) => info),
  );

  useEffect(() => {
    if (!Brastlewark.length > 0) {
      gnomeReader.getAllInfo().then((info) => {
        gnomeReadInfo(info);
      });
    }
  });

  return (
    <Router>
      {Brastlewark && (
        <div className="App">
          <div className="container">
            <Route exact path="/">
              <Home Brastlewark={Brastlewark} />
            </Route>
            <Route exact path="/person/:id">
              <Card Brastlewark={Brastlewark} />
            </Route>
          </div>
        </div>
      )}
      {!Brastlewark && <div>Loading...</div>}
    </Router>
  );
}

export default App;
