### 실행방법
npm run dev

## 6주차 Key Questions

### 1. Static Routing / Dynamic Routing

#### (1) Static Routing (정적 라우팅)
Router(라우터)에게 필요한 정보들을 수동으로 사전 입력해야 한다. 
고정된 페이지로 라우팅되기 때문에 누가 언제 접속하더라도 같은 페이지로 라우팅된다.

#### (2) Dynamic Routing (동적 라우팅)
Routing Table(라우팅 테이블)에서 현재 상태에 따라 경로를 자동 조정하는 것이다. 
가변적인 페이지로 라우팅되기 때문에 실제 소스코드는 한 페이지지만 글 번호나 글의 id에 따라서 주소가 변경된다.
Next.js에서 동적 라우팅 시, 대괄호 안에 들어있는 문구는 변수의 기능을 한다.
라우터 객체를 이용해 이 변수의 값을 지정해줄 수 있으며, 이 변수는 문서 내에서 자유롭게 활용이 가능하다.

### 2. 성능최적화를 위해 사용한 방법

1. 내부 스타일시트 사용 : styled-component 를 이용한 내부 스타일링 
2. 중복 코드 제거 : 중복되는 값은 props를 이용 & 외부 컴포넌트로 분리하여 재사용
3. 필요한 함수만 가져오기 : 실행하지 않는 함수 정리
4. ssr 렌더링 : 사용자가 js이 렌더링 하기 전 볼 수 있게함


## 5주차 Key Questions

### 1. Server Side Rendering과 Client Side Rendering의 차이

#### Server Side Rendering
SSR은 클라이언트가 웹 페이지를 렌더링하는 것이 아니라 서버에서 웹 페이지를 생성해서 클라이언트는 이를 가져와서 띄우는 방법이다.
서버에서 웹 페이지 정보를 모두 가지고 있기 떄문에 서버가 무거워지고 서버 비용이 증가한다는 단점이 있으나
서버가 가지고 있는 웹 페이지 정보를 검색엔진이 인식할 수 있기 때문에 SEO를 통해 네이버, 구글 등에 웹 페이지가 쉽게 노출될 수 있다는 장점이 있다.

#### Client Side Rendering
서버는 클라이언트에게 HTML, JS 정보만 보내주고 클라이언트가 이를 받아 브라우저에서 직접 페이지를 렌더링하는 방법이다.
서버가 가벼워지고 서버의 성능에 신경쓰지 않고 페이지를 개발할 수 있다는 장점이 있으나
클라이언트가 직접 페이지를 렌더링하기 때문에 페이지의 초기 로딩 시간이 길고 SEO가 잘 되지 않는다는 단점이 있다.

### 2. SEO란
SEO란 검색 엔진 최적화를 
이 SEO를 위해 개발자는 구글, 네이버 등에 자신의 페이지가 상위에 노출되기 위해
태그, 링크 구조를 개선하여 검색 엔진이 자신의 페이지를 잘 검색할 수 있도록 해야한다.

#### SEO를 위한 작업들
1. <title> 태그 안에 너무 긴 텍스트를 넣지 않고 모든 웹페이지의 title에 단일한 제목을 사용하지 않아야 한다.
2. <description> 태그 안의 요소는 자신의 웹페이지가 노출되었을 때 제목 바로 밑에 뜨는 한 두줄 정도의 요약 문장을 의미한다.
  가독성을 고려해서 작성하자.
3. Open Graph 태그 안의 요소는 웹 페이지가 공유될 때 어떻게 노출될지를 알려준다. 
  이 요소를 잘 정의해놓아야 트래픽이 증가하고 이런 트래픽 증가는 검색 상위 노출을 위한 평가에 영향을 준다.

### 3. 전반적인 협업 과정
이번 협업에서는 깃허브에서 organization을 생성한 후 레포 안에서 각자 브랜치를 생성해 각자 맡은 부분을 개발한 후 주기적으로 머지하는 방식으로 진행하였다. 


# 5주차 미션: Next-Netflix

## 서론

안녕하세요, 프론트 파트장 주효정입니다🙌

이번주부터는 새 프로젝트인 **Netflix 클론코딩**을 진행합니다. 이번 미션은 Next.js를 사용해 보며 SSR을 학습하고 figma로 주어지는 디자인을 활용해 스타일링 하는 방법을 이해하는 것을 목표로 합니다.

또한 이번주부터는 프론트 페어와 함께하는 과제인 만큼 각 팀별로 미리 호흡을 맞춰 보는 좋은 기회가 될 것 같습니다. 모두 화이팅입니다🔥

## 미션

### 미션 목표

- Next.js 사용법을 공부해봅니다.
- Figma로 주어지는 디자인으로 스타일링 하는 방식에 익숙해집니다.
- Git을 이용한 협업 방식에 익숙해집니다.

### 기한

- 2022년 11월 11일 (기한 엄수)

### 필수 요건

- [결과화면](https://next-netflix-16th.vercel.app/)의 렌딩 페이지(로고 애니메이션)와 메인 페이지를 구현합니다.
- [Figma](https://www.figma.com/file/UqdXDovIczt1Gl0IjknHQf/Netflix?node-id=0%3A1)의 디자인을 그대로 구현합니다.
- SSR(Server Side Rendering)을 적용해서 구현합니다.
- Open api를 사용해서 데이터 패칭을 진행합니다. (ex. [themoviedb API](https://developers.themoviedb.org/3/getting-started/introduction))

### 선택 사항

- 웹 폰트를 사용합니다.
- 반응형을 고려합니다.

## Key Questions

- Server Side Rendering과 Client Side Rendering의 차이
- SEO란
- 전반적인 협업 과정

## 링크 및 참고자료

- [Next.js Docs](https://beta.nextjs.org/docs)
- [Next.js 13에서 변한 것들](https://velog.io/@hang_kem_0531/Next.js-13%EC%9D%B4-%EB%82%98%EC%99%80%EB%B2%84%EB%A0%B8%EB%8B%A4)
- [Git 협업 가이드](https://velog.io/@jinuku/Git-%ED%98%91%EC%97%85-%EA%B0%80%EC%9D%B4%EB%93%9C)
- [디자이너와 개발자가 협업하기 위한 피그마 기본 기능](https://chingguhl.tistory.com/entry/%EA%B0%9C%EB%B0%9C%EC%9E%90%EA%B0%80-%EA%BC%AD-%EC%95%8C%EC%95%84%EC%95%BC-%ED%95%A0-%ED%94%BC%EA%B7%B8%EB%A7%88-10%EA%B0%80%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88%EC%99%80-%EA%B0%9C%EB%B0%9C%EC%9E%90%EA%B0%80-%ED%98%91%EC%97%85%ED%95%98%EA%B8%B0-%EC%9C%84%ED%95%9C-%ED%94%BC%EA%B7%B8%EB%A7%88-%EA%B8%B0%EB%B3%B8-%EA%B8%B0%EB%8A%A5)
