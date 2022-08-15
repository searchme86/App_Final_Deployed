import styled from 'styled-components';

export const DeleteModalItem = styled.div`
  position: relative;
`;

export const DeleteModalContent = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #ddd;
  padding: 15px;
  box-sizing: border-box;
`;

export const DeleteModalCategory = styled.strong`
  position: absolute;
  top: 11px;
  left: 11px;
  display: inline-block;
  background: #fff;
  font-size: 20px;
  font-style: italic;
  padding: 0 5px 0 5px;
`;

export const DeleteModalTitle = styled.strong`
  font-size: 18px;
  line-height: 1;
  width: 150px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const DeleteModalPrice = styled.span`
  margin: 15px 0 0 0;
`;

export const DeleteModalText = styled.strong`
  font-size: 17px;
`;
