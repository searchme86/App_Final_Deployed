import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RelatedInfo = styled.div`
  padding: 17px;
  box-sizing: border-box;
`;

export const ProductLayOut = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 30px 0 0 0;
`;

export const ProductMore = styled(Link)`
  position: absolute;
  bottom: -25px;
  right: 0;
  width: inline-block;
  margin: 5px;
  font-size: 18px;
  color: #333;
  cursor: pointer;
`;
