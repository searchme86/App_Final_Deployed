import React from 'react';
import {
  HeaderCenter,
  HeaderLink,
  HeaderLogo,
  HeaderOnNav,
  HeaderOffNav,
  HeaderNavLi,
  HeaderNavList,
  HeaderSection,
  HeaderFunction,
  HeaderText,
  HeaderTextHome,
  HeaderTextLogin,
  HeaderTextSignup,
} from './Header.style';
import { ImageHolder, Image } from '../../Assets/Styles/Image.style';

import { useSelector, useDispatch } from 'react-redux';
import { AuthSelector, setLogout } from '../../Store/AuthStore/AuthSlice';
import { ProductSelector } from '../../Store/ProductStore/ProductSlice';
import { CategorySelector } from '../../Store/CategoryStore/CategorySlice';

import decode from 'jwt-decode';
import { v4 as uuidv4 } from 'uuid';

import Alert from '../Alert';
import SearchBar from '../SearchBar/SearchBar';

function Header() {
  const {
    auth: { user },
  } = useSelector(AuthSelector);

  const {
    product: { products },
  } = useSelector(ProductSelector);

  const {
    category: { categories },
  } = useSelector(CategorySelector);

  const dispatch = useDispatch();

  if (user?.token) {
    const decodedToken = decode(user?.token);
    if (decodedToken.exp * 1000 < new Date().getTime()) {
      dispatch(setLogout());
    }
  }

  const handleLogout = () => {
    dispatch(setLogout());
  };

  const routerWithNoUser = [
    {
      styledComponents: HeaderTextHome,
      path: '/',
      ContentText: 'Home',
    },
    {
      styledComponents: HeaderTextLogin,
      path: '/login',
      ContentText: 'Login',
    },
    {
      styledComponents: HeaderTextSignup,
      path: '/register',
      ContentText: 'SignUp',
    },
  ];

  return (
    <HeaderSection>
      {products?.length === 0 && categories?.length === 0 && (
        <Alert>
          현재, 페이지는 서버 연결이 되어 있지 않습니다, 관리자에게 문의해주세요
        </Alert>
      )}
      <HeaderCenter>
        <HeaderLogo>
          <HeaderLink to={'/'}>
            <HeaderText>Agora</HeaderText>
          </HeaderLink>
        </HeaderLogo>
        <HeaderFunction>
          {user?.newUser?._id ? (
            <HeaderOnNav role="navigation">
              <HeaderNavList>
                <HeaderNavLi>
                  <HeaderLink to={'/'}>
                    <HeaderTextHome>Home</HeaderTextHome>
                  </HeaderLink>
                </HeaderNavLi>
                <HeaderNavLi>
                  <HeaderLink to={'/create'}>
                    <HeaderTextLogin>Upload</HeaderTextLogin>
                  </HeaderLink>
                </HeaderNavLi>
                <HeaderNavLi>
                  <HeaderTextSignup onClick={() => handleLogout()}>
                    LogOut
                  </HeaderTextSignup>
                </HeaderNavLi>
                <HeaderNavLi>
                  <HeaderLink to={`/profile/${user?.newUser?.nickname}`}>
                    <ImageHolder
                      width="50px"
                      height="50px"
                      mt="10px"
                      mb="10px"
                      br="100%"
                    >
                      <Image
                        src={user?.newUser?.imageFile}
                        alt={`${user?.newUser?.nickname}님 프로필 이미지 `}
                      />
                    </ImageHolder>
                  </HeaderLink>
                </HeaderNavLi>
              </HeaderNavList>
            </HeaderOnNav>
          ) : (
            <HeaderOffNav role="navigation">
              <HeaderNavList>
                {routerWithNoUser.map((item) => {
                  const Components = item?.styledComponents;
                  return (
                    <HeaderNavLi key={uuidv4()}>
                      <HeaderLink to={item?.path}>
                        <Components>{item?.ContentText}</Components>
                      </HeaderLink>
                    </HeaderNavLi>
                  );
                })}
              </HeaderNavList>
            </HeaderOffNav>
          )}
          <SearchBar />
        </HeaderFunction>
      </HeaderCenter>
    </HeaderSection>
  );
}

export default Header;
