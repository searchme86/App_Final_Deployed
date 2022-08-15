import React from 'react';
import { Room, MailOutline, Phone } from '@mui/icons-material';
import {
  FootUnit,
  FootLayout,
  FooterContent,
  FooterLeft,
  FooterCenter,
  FooterRight,
  FooterLogo,
  FooterDesc,
  FooterSubTitle,
  FooterList,
  FooterListItem,
  FooterItemhref,
  FooterLogohref,
} from './Footer.style';

function Footer() {
  return (
    <FootUnit>
      <FootLayout>
        <FooterLeft>
          <FooterLogo>
            <FooterLogohref to={'/'}>Agora</FooterLogohref>
          </FooterLogo>
          <FooterContent>
            <FooterDesc>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit,
              consequatur, est sunt voluptates reprehenderit odit, modi id
              soluta consectetur nisi doloribus? Dicta quasi vero doloribus
              repellat doloremque ducimus deserunt dolor?
            </FooterDesc>
          </FooterContent>
        </FooterLeft>
        <FooterCenter>
          <FooterSubTitle>Menu</FooterSubTitle>
          <FooterList display="flex">
            <FooterListItem width="50%">
              <FooterItemhref to={'/'}>Home</FooterItemhref>
            </FooterListItem>
            <FooterListItem width="50%">
              <FooterItemhref to={'/register'}>SignUp</FooterItemhref>
            </FooterListItem>
            <FooterListItem width="50%">
              <FooterItemhref to={'/login'}>Login</FooterItemhref>
            </FooterListItem>
            <FooterListItem width="50%">
              <FooterItemhref to={'/productList'}>Product</FooterItemhref>
            </FooterListItem>
          </FooterList>
        </FooterCenter>
        <FooterRight>
          <FooterSubTitle>Contact</FooterSubTitle>
          <FooterContent>
            <FooterList>
              <FooterListItem>
                <p style={{ width: '100%' }}>
                  <span style={{ marginRight: '10px' }}>
                    <Room />
                  </span>
                  Home
                </p>
              </FooterListItem>
              <FooterListItem>
                <p>
                  <span style={{ marginRight: '10px' }}>
                    <Phone />
                  </span>
                  010-123-4567
                </p>
              </FooterListItem>
              <FooterListItem>
                <p>
                  <span style={{ marginRight: '10px' }}>
                    <MailOutline />
                  </span>
                  manager@gmail.com
                </p>
              </FooterListItem>
            </FooterList>
          </FooterContent>
        </FooterRight>
      </FootLayout>
    </FootUnit>
  );
}

export default Footer;
