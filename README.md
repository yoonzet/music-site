## [칵테일 레시피🍹 바로가기](https://yoonzet.github.io/cocktailRecipe/)

React를 이용해서 만든 다양한 칵테일레시피 정보를 알려주는 웹사이트 입니다.
검색이 가능하며 찜하기 기능으로 레시피 보관을 할 수 있습니다.
반응형 웹사이트로 제작하였습니다.

### 기능구현

##### 홈

- 로그인 기능 구현
  - firebase를 이용하여 로그인및 회원가입 기능 구현했습니다.
  - google계정 연동이 가능합니다.
- 칵테일 search 기능
  - 칵테일 이름 검색시 하단에 출력되며 클릭시 디테일페이지로 이동합니다.
- 메뉴 필터링 기능
  - Alcoholic과 Non Alcoholic 클릭시 필터링이 되는 버튼을 구현했습니다.
- 찜하기 기능
  - 썸네일 우측상단의 하트아이콘을 누르면 보관함으로 저장이 됩니다. (로컬 스토리지에 저장)
  - 토글기능을 이용하여 추가/삭제가 가능합니다.

##### 둘러보기

- 랜덤 칵테일 뽑기
  - 버튼을 누를 시 랜덤으로 칵테일 출력됩니다.

##### 보관함

- 하트아이콘이 눌러진 칵테일들이 리스트로 보관됩니다.
- 이미 저장된 칵테일은 중복으로 저장이 되지 않으며 아이콘을 한번 더 누르면 삭제가 가능합니다.

### 사용한 라이브러리

##### Hooks

##### Router

##### firebase - 로그인 기능 구현

##### Recoil - 리코일 라이브러리를 이용한 상태관리

##### styled-component - Css in JS 스타일링

##### Framer-motion - 리스트, 랜덤버튼의 애니메이션표현
