import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const FootUnit = styled.footer`
  position: relative;
  width: 100%;
  padding: 30px 0 30px 0;
  background: #2c2a29;
`;

export const FootLayout = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 1280px;
  color: #fff;
  margin: 0 auto;
`;

export const FooterLogo = styled.h1`
  font-size: 32px;
  line-height: 1;
`;

export const FooterLogohref = styled(Link)`
  font-size: 32px;
`;

export const FooterDesc = styled.p`
  margin: 20px 0px;
`;

export const FooterContent = styled.div``;

export const FooterLeft = styled.div`
  width: 500px;
  padding: 20px;
`;

export const FooterCenter = styled.div`
  width: 350px;
  padding: 20px;
`;

export const FooterRight = styled.div`
  width: 250px;
  padding: 20px;
`;

export const FooterSubTitle = styled.h3`
  margin-bottom: 30px;
  font-size: 20px;
`;

export const FooterList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: ${({ display }) => display};
  flex-wrap: wrap;
`;

export const FooterListItem = styled.li`
  width: ${({ width }) => (width ? width : '100%')};
  margin-bottom: 10px;
`;

export const FooterItemhref = styled(Link)``;

export const FooterContactItem = styled.div`
  margin-bottom: 20px;
`;
