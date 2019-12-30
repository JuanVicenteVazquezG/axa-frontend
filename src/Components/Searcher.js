import React, { useState } from 'react';

export default function Searcher(props) {
  const [wordSearch, setWordSearch] = useState('');

  const handleChange = (e) => {
    const { handleSeachController } = props;
    setWordSearch(e.target.value);
    handleSeachController(wordSearch);
  };

  return (
    <div className="w-full flex-row">
      <span className="mx-2 text-gray-300">Search</span>
      <input
        className="w-9/12 rounded-full "
        type="text"
        defaultValue=""
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </div>
  );
}
