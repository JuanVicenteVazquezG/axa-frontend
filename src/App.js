import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/app.css';
import gnomeReader from './Service/gnome-reader';
import Home from './Views/Home';
import Card from './Views/Card';

function App() {
  const [Brastlewark, setBrastlewark] = useState('');

  useEffect(() => {
    if (Brastlewark.length <= 0) {
      gnomeReader
        .getAllInfo()
        .then(info => {
          setBrastlewark(info);
        })
        .catch(error => {
          console.log(error);
        });
    }
  });

  return (
    <div>
      {Brastlewark && (
        <Router>
          <div className="App w-full bg-green-700">
            <div className="container w-full">
              <h1 className="text-4xl text-center text-gray-300 font-bold uppercase">Brastlewark</h1>
              <Route exact path="/person/:id" render={() => <Card Brastlewark={Brastlewark} />} />
              <Route exact path="/" render={() => <Home Brastlewark={Brastlewark} />} />
              <Route exact path="/person" component={Home} />
            </div>
          </div>
        </Router>
      )}
      {!Brastlewark && <div>Loading...</div>}
    </div>
  );
}

export default App;
