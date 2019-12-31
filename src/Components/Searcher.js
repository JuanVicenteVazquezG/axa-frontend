import React, { useState } from 'react';

export default function Searcher(props) {
  const [wordSearch, setWordSearch] = useState('');

  const handleChange = (e) => {
    const { handleSeachController } = props;
    setWordSearch(e.target.value);
    handleSeachController(wordSearch);
  };

  return (
    <div>
      <span>Search</span>
      <input
        type="text"
        defaultValue=""
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </div>
  );
}
