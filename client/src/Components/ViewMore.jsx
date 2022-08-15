import React from 'react';

import styled from 'styled-components';

import { ProductMore } from '../Pages/Product/SectionProduct.style';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const ViewMoreIcon = styled.span`
  display: inline-block;
  margin: 0 3px 0 0;
`;

function ViewMore({ linkInfo }) {
  const { href, linkText } = linkInfo;
  return (
    <ProductMore to={href}>
      {linkText}
      <ViewMoreIcon>
        <FontAwesomeIcon
          icon={faAngleRight}
          style={{ fontSize: 18, color: '#333' }}
        />
      </ViewMoreIcon>
    </ProductMore>
  );
}

export default ViewMore;
