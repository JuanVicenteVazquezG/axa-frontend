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
      <div>Search</div>
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
