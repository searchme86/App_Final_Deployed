import React, { useState, useEffect, useRef, useCallback } from 'react';

import {
  SearchBarContainer,
  SearchInputContainer,
  CloseIcon,
  LineSeperator,
} from './SearchConfig/SearchBar.style';
import { HeaderSearchBtn } from '../../Assets/Styles/Button.style.js';
import { OffScreenSpan } from '../../Assets/Styles/Common.style';

import { AnimatePresence } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { IoClose } from 'react-icons/io5';

import {
  containerTransition,
  containerVariants,
} from './SearchConfig/FramerAnimation';

import { UseDebounce } from '../UseDebounce';
import useSearchBounce from './SearchHooks/useSearchBounce';
import useSearchLayout from './SearchHooks/useSearchLayout';
import useFetchQuery from './SearchHooks/useFetchQuery';

import SearchBarView from './SearchBlock/SearchBarView';
import SearchResultArea from './SearchBlock/SearchResultArea';

function SearchBar() {
  const searchInputRef = useRef(null);

  const [query, setQuery] = useState('');

  const [barOpen, barHeight, setBarOpen, setBarHeight, showBoxUp, hideBoxDown] =
    useSearchLayout();
  const [
    Loading,
    searched,
    setLoading,
    setSearched,
    products,
    setProducts,
    dataEmpty,
    findItem,
  ] = useFetchQuery(query);

  useEffect(() => {
    if (query.length === 0) {
      setBarHeight(false);
      setQuery('');
      setLoading(false);
      setSearched(false);
      setProducts([]);
      if (searchInputRef.current) searchInputRef.current.value = '';
    } else {
      setBarOpen(true);
      setBarHeight(true);
      return;
    }
  }, [query.length]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const UseInput = useCallback(
    UseDebounce((value) => setQuery(value), 500),
    []
  );

  const changeHandler = (e) => {
    e.preventDefault();
    if (e.target.value.trim() === '') setSearched(false);
    setBarHeight(true);
    UseInput(e.target.value);
  };

  useSearchBounce(query, 500, findItem);

  const viewData = {
    placeholder: '어떤 상품을 검색해볼까요?',
    ref: searchInputRef,
    onchange: changeHandler,
  };

  const resultData = {
    Loading,
    dataEmpty,
    searched,
    products,
  };

  return (
    <>
      <SearchBarContainer
        animate={barOpen ? 'expanded' : 'collapsed'}
        variants={containerVariants}
        transition={containerTransition}
        style={{ position: 'relative' }}
      >
        <SearchInputContainer>
          {barOpen && <SearchBarView viewData={viewData} />}
          <AnimatePresence>
            {barOpen && (
              <CloseIcon
                key="close-icon"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={hideBoxDown}
                transition={{ duration: 0.2 }}
              >
                <IoClose />
              </CloseIcon>
            )}
          </AnimatePresence>
        </SearchInputContainer>
        {barOpen && <LineSeperator />}
        {barOpen ? (
          barHeight ? (
            <SearchResultArea resultData={resultData} />
          ) : (
            ''
          )
        ) : (
          ''
        )}
      </SearchBarContainer>
      <HeaderSearchBtn type="button" onClick={showBoxUp}>
        <OffScreenSpan>상품검색 버튼</OffScreenSpan>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{
            fontSize: 20,
            color: '#000',
          }}
        />
      </HeaderSearchBtn>
    </>
  );
}

export default SearchBar;
