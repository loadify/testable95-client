# **Testy 95**

<img src="https://github.com/user-attachments/assets/50369f68-445d-4d74-97e0-696ced3bfa0b">


> Playwright 프레임워크 기반 테스트 코드를 생성할 수 있는 서비스입니다.

## 📌 배포 링크

### Client
### Server

<br>

## 📌 프로젝트 구조

### Client

- `components`: 프로젝트에서 사용되는 컴포넌트
- `pages`: 프로젝트에서 사용되는 페이지
- `services`: 데이터를 받아오는 api 관련 로직
- `style`: 스타일 코드 파일
- `App.jsx`: 해당 프로젝트 루트 파일

```
🗂️testy95-client
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂common
 ┃ ┃ ┃ ┣ Button.jsx
 ┃ ┃ ┃ ┣ CodeBox.jsx
 ┃ ┃ ┃ ┣ InputBlock.jsx
 ┃ ┃ ┃ ┣ LineBlock.jsx
 ┃ ┃ ┃ ┣ MethodBlock.jsx
 ┃ ┃ ┃ ┣ Modal.jsx
 ┃ ┃ ┃ ┗ TextBox.jsx
 ┃ ┃ ┣ BoardContainer.jsx
 ┃ ┃ ┣ BoardDashboard.jsx
 ┃ ┃ ┣ Loading.jsx
 ┃ ┃ ┗ TestCodeDashboard.jsx
 ┃ ┣ 📂pages
 ┃ ┃ ┗ Main.jsx
 ┃ ┣ 📂services
 ┃ ┃ ┣ instance.js
 ┃ ┃ ┗ codes.js
 ┃ ┣ 📂style
 ┃ ┃ ┣ BlockStyle.jsx
 ┃ ┃ ┣ BoardContainerStyle.jsx
 ┃ ┃ ┣ BoardDashboardStyle.jsx
 ┃ ┃ ┣ ButtonStyle.jsx
 ┃ ┃ ┣ CodeBoxStyle.jsx
 ┃ ┃ ┣ GlobalStyle.jsx
 ┃ ┃ ┣ ModalStyle.jsx
 ┃ ┃ ┣ TextBoxStyle.jsx
 ┃ ┃ ┣ Theme.jsx
 ┃ ┃ ┗ TestCodeDashboardStyles.jsx
 ┃ ┣ App.jsx
 ┃ ┗ main.jsx
 ┣ package.json
 ┣ package-lock.json
 ┗ README.md
```

### Server

- `bin`: 서버 실행 파일
- `controllers`: 프로젝트의 요청 로직을 처리하는 함수
- `database`: MongoDB에 연결을 설정하는 파일
- `models`: 컨트롤러와 데이터베이스 사이에서 데이터의 유효성을 검사하는 함수 (스키마 정의)
- `middlewares`: 요청과 응답 사이에 인증 및 초기화를 담당하는 함수
- `public`: 정적인 CSS, JavaScript, 이미지 파일
- `routes`: HTTP 메서드를 사용한 앱 경로 지정 핸들러 파일
- `app.js`: 해당 프로젝트 루트 파일

```
🗂️testy95-server
 ┣ 📂bin
 ┃ ┗ www
 ┣ 📂controller
 ┃ ┗ codesControllers.js
 ┣ 📂database
 ┃ ┗ connection.js
 ┣ 📂middlewares
 ┃ ┗ 
 ┣ 📂models
 ┃ ┣ Blocks.js
 ┃ ┣ Classes.js
 ┃ ┣ Methods.js
 ┃ ┗ TestCodes.js
 ┣ 📂public
 ┃ ┣ 📂stylesheets
 ┃ ┃ ┗ style.css
 ┣ 📂routes
 ┃ ┗ index.js
 ┣ app.js
 ┣ package.json
 ┣ package-lock.json
 ┗ README.md
```


<br>

## 📌 기술적 챌린지

<br>

## 📌 트러블 슈팅

<br>

## 📌 개발 일정

<br>

## 📌 서비스에 대한 팀원들의 이야기
