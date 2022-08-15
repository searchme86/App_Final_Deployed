import React from 'react';

import {
  SearchContent,
  LoadingWrapper,
  WarningMessage,
  TvShowContainer,
} from '../SearchConfig/SearchBar.style';

import MoonLoader from 'react-spinners/MoonLoader';

import SearchBarLayout from './SearchBarLayout';

function SearchResultArea({ resultData }) {
  const { Loading, dataEmpty, searched, products } = resultData;
  return (
    <SearchContent>
      {Loading && (
        <LoadingWrapper>
          <MoonLoader loading color="#000" size={20} />
        </LoadingWrapper>
      )}
      {!Loading && dataEmpty && !searched && (
        <LoadingWrapper>
          <WarningMessage>검색하려는 상품명을 입력해주세요</WarningMessage>
        </LoadingWrapper>
      )}
      {!Loading && searched && (
        <LoadingWrapper>
          <WarningMessage>해당 상품이 존재하지 않습니다.</WarningMessage>
        </LoadingWrapper>
      )}
      {!Loading && !dataEmpty && (
        <>
          <TvShowContainer>
            {products.map(({ show }) => (
              <SearchBarLayout
                key={show.id}
                thumbanilSrc={show.image && show.image.medium}
                name={show.name}
                rating={show.rating && show.rating.average}
              />
            ))}
          </TvShowContainer>
        </>
      )}
    </SearchContent>
  );
}

export default SearchResultArea;
