# fleamarketagora (fleamarket + agora)
### 개인프로젝트 (https://fleamarketagora.herokuapp.com/)
![portfolio_메인_fleamarketagora](https://user-images.githubusercontent.com/47154709/190112827-b5e661af-f032-405c-aef8-1c23bf0b133e.png)


### 프로젝트 미리보기
#### 1.로그인
https://user-images.githubusercontent.com/47154709/190125160-43b96020-953b-406a-97eb-3d1f2d5a7f18.MP4

#### 2.애플리케이션 
https://www.youtube.com/watch?v=lENCElKoD9g

### 애플리케이션 소개
중고거래 플랫폼을 컨셉으로, 상품을 등록하고 확인할 수 있는 페이지

### 프로젝트 일정
+ 작업기간 : 06/02,2022 ~ 08/01,2022
+ 1차 배포 : 07/22, 2022
+ 2차 배포 : 08/11, 2022
+ 리펙토링 : 08/11 ~ 현재

### 사용기술
+ view
  + React
  + styled-components
+ server
  + Node
+ DB
  + MongoDB
  
### 주요기능
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

### 애플리케이션 구조
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



### 애플리케이션 기능 미리보기

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






### Package








---
개인프로젝트
---


#### [#배포] App, Agora 어플리케이션( https://fleamarketagora.herokuapp.com/ )

#### 1. 레포지토리 소개
#### App, Agora 어플리케이션 배포 코드
---

#### 2. 진행 완료된 일정
#### - 1차 배포 : 07/22, 2022
#### - 2차 배포 : 08/11, 2022
---

#### 3. 관련 레포지토리
#### (작업) : https://github.com/searchme86/Deprecated-App-Market
#### (리팩터링) : https://github.com/searchme86/Refactoring-App-agora-Market

