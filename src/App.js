import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import gnomeReader from './Service/gnome-reader';
import Home from './Views/Home';
import Card from './Views/Card';

function App() {
  const [Brastlewark, gnomeReadInfo] = useState(gnomeReader.getAllInfo().then((info) => (info)));

  // useEffect(() => {
  //   console.log('Entro 1 vez')
  //   gnomeReader.getAllInfo().then(info => {
  //     gnomeReadInfo(info);
  //   });
  // }, [Brastlewark]);

  return (
    <Router>
      {console.log(Brastlewark)}
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
