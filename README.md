### 실행방법
npm run dev

## Key Questions

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
SEO란 검색 엔진 최적화를 의미하고 이 SEO를 위해 SSR을 사용합니다.
SSR을 사용하게 되면 

### 3. 전반적인 협업 과정



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
