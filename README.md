# fleamarketagora (fleamarket + agora)
### 개인프로젝트 (https://fleamarketagora.herokuapp.com/)
![portfolio_메인_fleamarketagora](https://user-images.githubusercontent.com/47154709/190112827-b5e661af-f032-405c-aef8-1c23bf0b133e.png)


### 👋🏻 1. 프로젝트 미리보기
#### 1.로그인
https://user-images.githubusercontent.com/47154709/190125160-43b96020-953b-406a-97eb-3d1f2d5a7f18.MP4

#### 2.애플리케이션 
https://www.youtube.com/watch?v=lENCElKoD9g

### 💁🏻 2. 애플리케이션 소개
중고거래 플랫폼을 컨셉으로, 상품을 등록하고 확인할 수 있는 페이지

### 🌞 3. 프로젝트 일정
+ 작업기간 : 06/02,2022 ~ 08/01,2022
+ 1차 배포 : 07/22, 2022
+ 2차 배포 : 08/11, 2022
+ 리펙토링 : 08/11 ~ 현재


### 📒 4. 프로젝트 주안점
+ 웹접근성을 준수하는 컴포넌트
  + 시맨틱 태그(main,header)로 마크업
+ 리액트 학습 내용을 프로젝트로 구현
  + 컴포넌트 설계 & 구성
+ 로그인 구현
+ 클라이언트와 서버/DB 적용된 프로젝트 구성
  + MERN Stack 


### 📝 5. 컨벤션
+ 컴포넌트 파일의 확장자는 .jsx로 작성, styled-componets, redux, 데이터 파일, config 설정파일 확장자는 .js로 작성 
  + 파일 용도를 구분	
+ 컴포넌트는 function(){…} 형태로 통일
+ if-else구조 보다는 삼항연산자와 nullish병합 연산자(??)를 사용
  ```javascript
  //  삼항 연산자
  {pdCategory ? (
    <PCardCategory>{pdCategory}</PCardCategory>
	     ) : (
    <PCardCategory>상품 타이틀</PCardCategory>
	)}

  //null 연산자
  alt={pdTitle ?? '기본 이미지'}
  const listViewData = dbSizeData ?? data;
  ```
+ 구조분해할당(Destructuring)을 사용하고 값이 확실한 경우에는 점(.)연산자를 사용(ex:?.)

### 🔨6. 사용기술
+ Client
  + React(18.2.0)
  + styled-components
  + chakra-ui/react(2.2.4)
    + 컴포넌트의 WAI-ARIA 속성을 자동으로 설정됨
    + 레퍼런스의 가독성이 좋음
    + react-hook-form 지원
    + 핵심적인 기능의 컴포넌트 종류만 제공
    + 다른 UI FrameWork을 사용하며 겪은 어려움
      + Material UI
        + 참고 할 컴포넌트가 많고 사용법(props 종류)이 복잡함
      + Semantic UI React
        + 에러를 경험함
          + https://velog.io/@rohkorea86/semantic-UI-semantic-ui-css-importCreate-React-App-with-TypeScript-failing-to-compile-after-importing-Semantic-UI 
      + React Bootstrap
        + 리액트 학습강좌에서 사용하던 중, 버전 업그레이드 되면서 기존 컴포넌트를 사용하지 못한 경험
          + 리액트 학습강좌 (https://www.inflearn.com/course/리액트-파이어베이스-채팅-앱)
          + 관련 경험을 기록(‣)   
    
  + reduxjs/toolkit(1.8.3)
+ Server
  + NodeJs
+ DB
  + MongoDB


### 💡 7. 공통 컴포넌트()
+ 페이지의 마크업과 데이터 유형에 따라 컴포넌트 분리
  + SectionPage: 제목과 컨텐츠가 있는 페이지 
  ```javascript
  return (
    <SectionUnit>
      <SectionLayout>
        <SectionTitle>{pageTitle}</SectionTitle>
        <SectionContent>{children}</SectionContent>
      </SectionLayout>
    </SectionUnit>
  );
  ```
  + SectionColorPageWithOffTitle : 컬러와 제목이 없고 컨텐츠만 있는 페이지
  ```javascript
  return (
    <SectionUnit color={backgroundColor}>
      <SectionLayout>
        <OffScreenTitle>{offTitle}</OffScreenTitle>
        <SectionContent>{children}</SectionContent>
      </SectionLayout>
    </SectionUnit>
  );
  ```
  + SectionPageWithOffTitle : 제목이 없고 컨텐츠만 있는 페이지
  ```javascript
  return (
    <SectionUnit>
      <SectionLayout>
        <OffScreenTitle>{offTitle}</OffScreenTitle>
        <SectionContent>{children}</SectionContent>
      </SectionLayout>
    </SectionUnit>
  );
  ```
  + SectionPage : 제목과 컨텐츠가 있는 페이지
  ```javascript
  return (
    <SectionUnit>
      <SectionLayout>
        <SectionTitle>{pageTitle}</SectionTitle>
        <SectionContent>{children}</SectionContent>
      </SectionLayout>
    </SectionUnit>
  );
  ```
  + SectionPageWithDes : 제목, 제목의 설명, 컨텐츠가 있는 페이지
  ```javascript
    <SectionUnit>
      <SectionLayout>
        <SectionTitle>{pageTitle}</SectionTitle>
        <SectionTitleDes>{pageDes}</SectionTitleDes>
        <SectionContent>{children}</SectionContent>
      </SectionLayout>
    </SectionUnit>
  ```
  
### ⚙️ 8. 주요기능
+ 로그인
  + 새로운 유저 생성
  + 이메일주소/비밀번호 DB 일치여부 확인
+ 상품 CRUD
  + 상품 생성
    + 메뉴상단, upload 버튼 클릭 시, 입력폼 페이지에 정보 입력 후, 상품 등록함
  + 상품 읽기
    + 상품 카드 클릭 시, 상품 상세 페이지 이동
  + 상품 업데이트
    + 상품 상세 페이지에서 메모 아이콘 버튼을 눌러 변경 페이지로 이동 
  + 상품 삭제
    + 메뉴 상단, 프로필 이미지 클릭 시, 유저 등록한 상품 카드 우측 하단 빨간 휴지동 아이콘 클릭시, 삭제 모달 확인
 + 카테고리
    + 카테고리 생성
    + 카테고리 데이터 변경
    + 카테고리 삭제
 ### + 웹접근성   
 ![스크린샷 2022-09-14 오후 10 55 30](https://user-images.githubusercontent.com/47154709/190175849-90d4307e-30e9-49f5-8eeb-cca9a77aa268.png)


### 🔦 9. 애플리케이션 구조
#### client
![스크린샷 2022-09-14 오후 6 43 25](https://user-images.githubusercontent.com/47154709/190121151-1a363df8-eeeb-4b71-a48b-ab5297fbd35f.png)

폴더명 | 폴더내용
---| --------|
Assets | 프로젝트 에셋(이미지,폰트)
Components | 컴포넌트 폴더
Config | Api, Layout, Router
Pages | 프로젝트 페이지(Category, Product, Supports, User etc)
Store | 리덕스 & Axios 설정파일

#### api
![스크린샷 2022-09-14 오후 7 00 05](https://user-images.githubusercontent.com/47154709/190124540-d02e85a4-a6d6-4a7c-9e63-3d29d83601f0.png)

폴더명 | 폴더내용
---| --------|
controllers | 라우터 경로에 따라 컨트롤러(Category, Product, User)
middleware | 로그인(auth)(토큰) 처리
models | MongoDB Schema (Category, Product, User)
router | 라우터 (Category, Product, User)


### 🔑 10. package.json
    "@bakunya/react-masonry": "^0.0.5",
    "@chakra-ui/react": "^2.2.4",
    "@emotion/react": "^11.9.3",
    "@emotion/styled": "^11.9.3",
    "@fortawesome/fontawesome-svg-core": "^6.1.2",
    "@fortawesome/free-brands-svg-icons": "^6.1.2",
    "@fortawesome/free-regular-svg-icons": "^6.1.2",
    "@fortawesome/free-solid-svg-icons": "^6.1.2",
    "@fortawesome/react-fontawesome": "^0.2.0",
    "@mui/icons-material": "^5.8.4",
    "@react-icons/all-files": "^4.1.0",
    "@reduxjs/toolkit": "^1.8.3",
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^0.27.2",
    "framer-motion": "^6.5.1",
    "jwt-decode": "^3.1.2",
    "mdb-react-ui-kit": "^4.1.0",
    "moment": "^2.29.4",
    "react": "^18.2.0",
    "react-daum-postcode": "^3.1.1",
    "react-dom": "^18.2.0",
    "react-file-base64": "^1.0.3",
    "react-hook-form": "^7.33.1",
    "react-icons": "^4.4.0",
    "react-masonry-css": "^1.0.16",
    "react-redux": "^8.0.2",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
    "react-spinners": "^0.13.3",
    "react-toastify": "^9.0.7",
    "styled-components": "^5.3.5",
    "web-vitals": "^2.1.4"

### 🧸 11. 애플리케이션 기능 미리보기

#### 상세페이지(관련상품)
![portfolio_관련상품뷰_fleamarketagora](https://user-images.githubusercontent.com/47154709/190132573-57cb7613-2307-46a8-8402-0bb1cf271ce0.png)

#### 유저페이지
![portfolio_유저정보(비밀번호와프로필이미지)_fleamarketagora](https://user-images.githubusercontent.com/47154709/190133429-20c31531-6cfa-4703-9c79-76e217f3cdef.png)

#### 유저등록상품
![portfolio_유저등록한상품_fleamarketagora](https://user-images.githubusercontent.com/47154709/190132964-c46f84dd-575c-43ab-9d4b-649d2fb298bd.png)

#### 유저등록상품 삭제모달
![portfolio_유저등록상품삭제모달_fleamarketagora](https://user-images.githubusercontent.com/47154709/190133058-542b72d5-5b9c-4c2b-8c46-6be275830d3b.png)

#### 카테고리(로그인 시)
![portfolio_카테고리뷰_fleamarketagora](https://user-images.githubusercontent.com/47154709/190133591-8c7568f4-8fa7-453d-a3c6-6119daadad5d.png)

#### 카테고리 생성모달
![portfolio_카테고리생성모달_fleamarketagora](https://user-images.githubusercontent.com/47154709/190133683-f58516d8-ed8b-4738-9e3f-5c5e806b4d27.png)

#### 카테고리 상세페이지
![portfolio_카테고리클릭후_fleamarketagora](https://user-images.githubusercontent.com/47154709/190133759-d1718f4f-7bd6-4b30-9a15-c30150d9f0e9.png)

#### 📄 12. 관련 레포지토리
#### (작업) : https://github.com/searchme86/Deprecated-App-Market
#### (리팩터링) : https://github.com/searchme86/Refactoring-App-agora-Market
