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
      <h2 className="text-2xl text-center text-gray-300  uppercase">CHARACTER CENSUS</h2>
      <div className="w-full">
        <Searcher handleSeachController={handleSeachController} />
        <PeopleCards Brastlewark={Brastlewark} word={word} />
      </div>
    </div>
  );
}
