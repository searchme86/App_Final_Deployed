import React from 'react';
import {
  SearchItem,
  SearchItemLink,
  SearchItemInfo,
  Name,
  Rating,
} from '../SearchConfig/SearchBar.style';
import { ImageHolder, Image } from '../../../Assets/Styles/Image.style';

function SearchBarLayout({ thumbanilSrc, name, rating }) {
  return (
    <SearchItem>
      <SearchItemLink to={'/'}>
        <ImageHolder width="100px" height="100px" mr="10px">
          <Image src={thumbanilSrc} alt={'썸네일'} />
        </ImageHolder>
        <SearchItemInfo>
          <Name>{name}</Name>
          <Rating>{rating || 'N/A'}</Rating>
        </SearchItemInfo>
      </SearchItemLink>
    </SearchItem>
  );
}

export default SearchBarLayout;
