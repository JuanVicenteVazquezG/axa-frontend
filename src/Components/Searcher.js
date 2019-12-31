import React, { useState } from 'react';
import styled from 'styled-components';

const SearcherBar = styled.div` 
  width:100%;
  margin:30px 0 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
`;

const SearchTitle = styled.h2`
  margin:0 20px; 
  display: inline-block;
  font-weight: 900;
 `;

const SerarchInput = styled.input`
  width:100%;
  margin-right: 20px;
  border: 1px solid black;
  border-radius:5px;
  height:30px;
`;


export default function Searcher(props) {
  const [wordSearch, setWordSearch] = useState('');

  const handleChange = (e) => {
    const { handleSeachController } = props;
    setWordSearch(e.target.value);
    handleSeachController(wordSearch);
  };

  return (
    <SearcherBar>
      <SearchTitle>Search</SearchTitle>
      <SerarchInput
        type="text"
        defaultValue=""
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </SearcherBar>
  );
}
