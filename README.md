# React & TypeScript Study
---

## Description
---
- 새로운 프로젝트 준비를 위한 Frontend Study
- Frontend와 Backend간의 빠른 개발을 위해 GraphQL 도입 연습
- 협업 연습을 위한 코드 스타일 제한 (ESLint airbnb style)


## How to run
---
<pre>npm start</pre>


### Structure
---
App <- index.tsx
┣ AppRouter [Nav구성, Router구성]
┃	┣ Navbar [Nav구성]
┃	┃	┖ NavbarItem [Nav에 사용되는 item을 설정]
┃	┣ Error404 [url예외처리]
┃	┖ Routes(AppRouter) [Router에 사용되는 item을 설정]
┃		┣ Home
┃       ┣ PickUp
┃		┣ Store [page 구성]
┃		┖ Login [login page 구성]
┃			┖ LoginForm [login 기능 설정]
┃
┖ Initializing [isInit?? ]
