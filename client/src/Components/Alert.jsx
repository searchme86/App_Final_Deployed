import React from 'react';
import styled from 'styled-components';

const AlertBox = styled.div`
  text-align: center;
  padding: 10px 0 10px 0;
`;

const AlertText = styled.p`
  display: inline-block;
  font-size: 18px;
  line-height: 1;
  padding: 0 0 5px 0;
  font-weight: bold;
  border-bottom: 1px solid #333;
`;

function Alert({ children }) {
  return (
    <AlertBox>
      <AlertText>{children}</AlertText>
    </AlertBox>
  );
}

export default Alert;
