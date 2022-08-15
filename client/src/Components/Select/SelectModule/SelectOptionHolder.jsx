import React, { useCallback, useRef } from 'react';

import {
  SelectBox,
  SelectTitle,
  SelectTitleContent,
  SelectTitleSubject,
  SelectUl,
} from '../SelectBox.style.js';

import UseOnClickOutside from '../../UseOnClickOutside';

function SelectOptionHolder({
  selectedOption,
  showDropdown,
  setShowDropdown,
  showDropdownHandler,
  selectPlaceholder,
  children,
}) {
  const selectContainerRef = useRef(null);

  const clickOutsideHandler = useCallback(
    () => setShowDropdown(false),
    [setShowDropdown]
  );

  UseOnClickOutside(selectContainerRef, clickOutsideHandler);

  const { cntValue, cntShow } = selectedOption;

  return (
    <SelectBox ref={selectContainerRef}>
      <SelectTitle onClick={showDropdownHandler}>
        {selectedOption ? (
          <>
            <SelectTitleSubject>{cntShow}</SelectTitleSubject>
            <SelectTitleContent>
              {Number(cntValue).toLocaleString('ko-KR')} 원
            </SelectTitleContent>
          </>
        ) : (
          selectPlaceholder
        )}
      </SelectTitle>
      <SelectUl showDropdown={showDropdown}>{children}</SelectUl>
    </SelectBox>
  );
}

export default SelectOptionHolder;
