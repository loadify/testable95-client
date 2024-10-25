<br>
<br>
<div align="center">

**Testable95**는 Playwright 기반 E2E **테스트 코드 생성기**입니다.

<img src="https://github.com/user-attachments/assets/08d424bc-c80b-4e9d-98f9-b0838e88902a">

<br>
<br>

테스트 코드는 프로젝트의 품질을 보장하는 데 필요하지만<br>
작성하기 번거롭고 시간이 많이 소요됩니다.<br>
이를 해결하고자 누구나 쉽게 **테스트 코드**를 **생성**할 수 있는 도구를 개발하였습니다.

</div>
<br>
<span id="top"></span>
<br>

## 목차

<!-- toc -->

- [1️. 테스트 코드 생성하기](#1%EF%B8%8F-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BD%94%EB%93%9C-%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0)
- [2️. 기술 스택](#2%EF%B8%8F-%EA%B8%B0%EC%88%A0-%EC%8A%A4%ED%83%9D)
- [3. 기획](#3-%EA%B8%B0%ED%9A%8D)
  - [3-1. 왜 E2E 테스트인가?](#3-1-%EC%99%9C-e2e-%ED%85%8C%EC%8A%A4%ED%8A%B8%EC%9D%B8%EA%B0%80)
  - [3-2. 왜 Playwright 기반 테스트인가?](#3-2-%EC%99%9C-playwright-%EA%B8%B0%EB%B0%98-%ED%85%8C%EC%8A%A4%ED%8A%B8%EC%9D%B8%EA%B0%80)
  - [3-3. 누구나 쉽게 코드를 생성할 수 있는 방식](#3-3-%EB%88%84%EA%B5%AC%EB%82%98-%EC%89%BD%EA%B2%8C-%EC%BD%94%EB%93%9C%EB%A5%BC-%EC%83%9D%EC%84%B1%ED%95%A0-%EC%88%98-%EC%9E%88%EB%8A%94-%EB%B0%A9%EC%8B%9D)
- [4. 기능 구현](#4-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84)
  - [4-1. 블록 코딩 직접 구현하기](#4-1-%EB%B8%94%EB%A1%9D-%EC%BD%94%EB%94%A9-%EC%A7%81%EC%A0%91-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0)
  - [4-2. 자연어 처리하기](#4-2-%EC%9E%90%EC%97%B0%EC%96%B4-%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0)
  - [4-3. 블록의 순서가 바뀐다면?](#4-3-%EB%B8%94%EB%A1%9D%EC%9D%98-%EC%88%9C%EC%84%9C%EA%B0%80-%EB%B0%94%EB%80%90%EB%8B%A4%EB%A9%B4)
- [5. 협업 방식](#5-%ED%98%91%EC%97%85-%EB%B0%A9%EC%8B%9D)
  - [5-1. 회의록 기록](#5-1-%ED%9A%8C%EC%9D%98%EB%A1%9D-%EA%B8%B0%EB%A1%9D)
  - [5-2. 로직 시각화 공유](#5-2-%EB%A1%9C%EC%A7%81-%EC%8B%9C%EA%B0%81%ED%99%94-%EA%B3%B5%EC%9C%A0)
  - [5-3. PR 리뷰](#5-3-pr-%EB%A6%AC%EB%B7%B0)

<!-- tocstop -->

<br>
<br>

## 1️. 테스트 코드 생성하기

<img src="https://github.com/user-attachments/assets/256465f0-3b73-4cb5-866a-db98754370a0">

<br>

## 2️. 기술 스택

<img width="1015" alt="기술스택" src="https://github.com/user-attachments/assets/192c4881-d32c-4eb5-bfab-18925b72e5d8">

#### Client

![React](https://img.shields.io/badge/react-%23404d59.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23404d59.svg?style=for-the-badge&logo=vite&logoColor=w)
![Axios](https://img.shields.io/badge/axios-%23404d59.svg?style=for-the-badge&logo=axios&logoColor=w)
![Zustand](https://img.shields.io/badge/zustand-%23404d59.svg?style=for-the-badge&logo=react&logoColor=black)
![Styled-components](https://img.shields.io/badge/styled_component-404d59.svg?style=for-the-badge&logo=styledcomponents&logoColor=DB7093)

#### Server

![NodeJS](https://img.shields.io/badge/node.js-404d59?style=for-the-badge&logo=node.js&logoColor=6DA55F)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB & Mongoose](https://img.shields.io/badge/MongoDB%20&%20Mongoose-%23404d59.svg?style=for-the-badge&logo=mongodb&logoColor=w)
![WitAi](https://img.shields.io/badge/wit%20ai-404d59?style=for-the-badge&logo=facebook&logoColor=w)

#### Deploy

![Firebase](https://img.shields.io/badge/firebase-%23404d59.svg?style=for-the-badge&logo=firebase&logoColor=red)
![Amazon Web Service](https://img.shields.io/badge/amazon%20web%20service-%23404d59.svg?style=for-the-badge&logo=amazon&logoColor=b)

<br>
<br>

## 3. 기획

### 3-1. 왜 E2E 테스트인가?

테스트에는 세 가지 종류가 있습니다.

- 단위 테스트
- 통합 테스트
- E2E 테스트

이 프로젝트에서는 ~한 이유로 E2E 테스트를 선택하였습니다.

<br>

### 3-2. 왜 Playwright 기반 테스트인가?

E2E 테스트 코드를 자동화하는 프레임워크마다 사용하는 문법이 상이합니다.
팀원들은 이 프로젝트에 맞는 프레임워크를 선택하기 위해 비교하였습니다.

E2E 테스트 프레임워크 종류에 대해서 조사

|           | Playwright           | Selenium             | Cypress                   |
| --------- | -------------------- | -------------------- | ------------------------- |
| 지원 언어 | **다양한** 언어 지원 | **다양한** 언어 지원 | 자바스크립트              |
| 실행 속도 | 비교적 **빠름**      | 비교적 느림          | 비교적 **빠름**           |
| 병렬 처리 | **내장 지원**        | **내장 지원**        | 추가 라이브러리 설치 필요 |

<img src="https://github.com/user-attachments/assets/5b5f9536-77e1-403d-9efb-b435a166201b">

1. 접근성
2. 사용성

~ 한 이유로 **Playwright**를 선택하였습니다.

<br>

### 3-3. 누구나 쉽게 코드를 생성할 수 있는 방식

누구나 쉽게 코드를 생성하기 위해서는 사용자가
반대로 코드를 생성하기 어려운 이유는 코드 작성 문법이 어렵기 때문이라고 생각합니다.
비교적 작성이 쉬운 자연어를 활용하면 어떨까 고민

사용자가 자연어를 사용 -> 코드로 생성

**자연어로 코드를 작성**하는 방식에는 어떤 것들이 있을까?

**스크래치** 서비스를 참고하였습니다.

<div align="center">
  <img src="https://github.com/user-attachments/assets/e6b38dd0-2083-4e54-bae4-c4bfe7f7e23b">

수백만의 사람들이 사용하는 스크래치 서비스

</div>

**스크래치**에서 착안한 **블록 코딩** 방식을 사용하기로 결정하였습니다.

<br>
<br>

## 4. 기능 구현

### 4-1. 블록 코딩 직접 구현하기

블록 코딩을 구현하기 위해 3가지 포인트가 필요했습니다.

(블록 코딩을 구현한 전체 흐름을 보여주는 시각 자료)

1. 블록의 종류 (세 가지)

   - 코드 한 문장 - 라인 블록
   - 메서드 - 메서드 블록
   - 매개변수 - 인풋 블록

2. 라인 블록이 완성되는 경우 (세 가지)<br>

   - 라인에 하나의 메서드 블록이 오는 경우
   - 라인에 하나의 메서드 블록에 하나의 인풋 블록이 오는 경우
   - 라인에 하나의 메서드 블록에 여러가지 인풋 블록이 오는 경우

3. 블록의 위치 추적하기<br>
   - 블록의 앞으로 이동
   - 블록의 뒤로 이동
   - 다른 라인 블록으로의 이동
   - 위치를 파악하기 위해 id 값을 활용 (uuid)

<br>

### 4-2. 자연어 처리하기

블록으로 조합한 자연어를 코드로 변환하는데 고민을 했습니다.

자연어를 코드로 변환하기 위해 자연어 처리를 해주는 AI를 찾아봤습니다.

팀원들은 프로젝트에 맞는 자연어를 처리하는 AI를 선택하기 위해 비교했습니다.

|      | Wit AI | Google NLA | Open AI | Hugging Face |
| ---- | ------ | ---------- | ------- | ------------ |
| 장점 |        |            |         |              |
| 단점 |        |            |         |              |

이러한 단점은 프로젝트와 안 맞고 이러한 장점이 프로젝트와 잘 맞아서 Wit AI를 선택했습니다.

<br>

### 4-3. 블록의 순서가 바뀐다면?

Wit AI가 자연어를 처리하는 방식은 한 문장을 학습한 부분으로 구분하여 각 부분의 키워드를 추출합니다.

<div align="center">
  <img width="600" src="https://github.com/user-attachments/assets/2a33b51c-ec6e-43a3-a30c-b12c437f61b4">

Wit AI는 intent와 entity로 구분하여 학습한 키워드로 각 부분을 추출합니다.

</div>

블록을 순서대로 배치하지 않는 상황 (사용자)

이러한 처리 방식으로 구분하게 되면 순서가 바뀌어도 원하는대로 코드로 변환할 수 있습니다. (해결)

<br>
<br>

## 5. 협업 방식

### 5-1. 회의록 기록

회의 스케줄

- Daily Scrum: 오전 10시
- Wrap-up Meeting: 오후 9시

회의에 중요한 것은 **기록**이라고 생각합니다.

회의를 주관하는 이유는 우리의 사고 과정을 **기록**하여 프로젝트 개발과 개선에 기여하기 위함이라 생각합니다.

<div align="center">
  (노션 회의록 시각 자료)

개발 기간 20일 동안 57개의 회의록을 작성하였습니다.

</div>

이를 통해 기록을 통해 기억을 보존할 수 있었습니다.

<br>
<br>

### 5-2. 로직 시각화 공유

- 로직 시각화 자료

  각자 맡은 부분을 제외하고 다른 사람의 코드에 대해 이해하는 시간이 필요할 수 있습니다.

  이 시간을 단축시키기 위해서 이해를 도울 필요가 있습니다.

  쉽게 설명하면 이해를 도울 수 있습니다.

  쉽게 설명하는 방식은 말을 쉽게 설명할 수 있지만 이는 한계가 있습니다.

  시각적 자료를 활용하여 쉽게 설명하도록 하였습니다.

  <br>

  <div align="center">
    (드래그 앤 드롭 로직의 이해를 돕는 시각 자료)
  </div>

  <br>

  이를 통해 어려운 로직을 팀원들이 함께 **이해**하는 시간을 **효율적**으로 관리할 수 있었습니다.

  <br>

### 5-3. PR 리뷰

PR 코드의 품질을 향상시키는데 매우 도움이 된다.

하지만 아무런 근거 없이 리뷰를 본 팀원의 입장에서 근거를 찾고 로직을 다시 살펴봐야 하는 불편함이 다소 생길 수 있다고 생각했습니다.

아래 리뷰 양식을 지정했습니다.

1. 코드 수정이 필요하다고 생각하는 부분은 근거를 남기기<br>

   근거 없이 수정이 필요하다는 코멘트만 남기게 되면 팀원이 어떤 것이 옳은 지 한 번 더 생각해야 하는 시간을 소비해야 합니다.

2. 근거는 링크와 시각 자료를 첨부하기<br>

   링크만 남기게 되면 팀원들이 링크에 들어가서 확인해야 하는 시간을 소비해야 합니다.

   링크와 시각자료를 첨부하면 한 눈에 확인할 수 있어 리뷰 시간을 단축시킬 수 있습니다.

  <br>

  <div align="center">
    (리뷰 양식 자료)
  </div>

  <br>

이를 통해 팀원의 리뷰를 **이해**하고 리뷰를 통해 **개선**하는 시간을 **효율적**으로 관리할 수 있었습니다.

  <br>
