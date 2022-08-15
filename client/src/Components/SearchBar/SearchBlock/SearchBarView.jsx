import React from 'react';
import { SearchInput, SearchIcon } from '../SearchConfig/SearchBar.style';

import { IoSearch } from 'react-icons/io5';

function SearchBarView({ viewData }) {
  const { placeholder, ref, onchange } = viewData;
  return (
    <>
      <SearchIcon>
        <IoSearch />
      </SearchIcon>
      <SearchInput
        placeholder={placeholder}
        ref={ref.current}
        onChange={onchange}
      />
    </>
  );
}

export default SearchBarView;
