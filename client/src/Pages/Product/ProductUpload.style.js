import styled, { css } from 'styled-components';

export const FlexAlignDiv = styled.div`
  width: calc((100% - 170px) / 2);
  ${({ fixed }) =>
    fixed &&
    css`
      position: sticky;
      top: 20px;
      height: 100%;
    `}
`;

export const TagWrapper = styled.div``;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border: 1px solid rgb(226, 232, 240);
  padding: 0.5em;
  border-radius: 6px;
`;

export const TagItemList = styled.ul``;

export const TagItem = styled.li`
  display: inline-block;
  padding: 0.5em 0.75em;
  margin: 5px 5px 0 0;
  border-radius: 20px;
  border: 1px solid rgb(218, 216, 216);
  &:last-child {
    margin-right: 0;
  }
`;

export const TagItemDelete = styled.span`
  height: 20px;
  width: 20px;
  background-color: #767676;
  color: #fff;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.5em;
  font-size: 18px;
  cursor: pointer;
`;

export const TagInput = styled.input`
  width: 100%;
  padding: 0.5em 0;
  border: none;
  outline: none;
  margin: 5px 0 0 0;
`;
