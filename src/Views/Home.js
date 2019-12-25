import React, { useState } from 'react';
import Searcher from '../Components/Searcher';
import PeopleCards from '../Components/PeopleCards';

export default function Home(Brastlewark) {
  const [word, setWord] = useState('');


  const handleSeachController = (aWord) => {
    setWord(aWord);
  };

  return (
    <div>
      <h1>List of people</h1>
      <div>
        <Searcher handleSeachController={handleSeachController} />
        <PeopleCards Brastlewark={Brastlewark} word={word} />
      </div>
    </div>
  );
}
