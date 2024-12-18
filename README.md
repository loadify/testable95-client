<br>
<br>
<div align="center">

**Testable95**는 Playwright 기반 E2E **테스트 코드 생성기**입니다.

<br>

<a href="https://testable95.co.kr/">
  <img src="https://github.com/user-attachments/assets/08d424bc-c80b-4e9d-98f9-b0838e88902a">
</a>

<br>
<br>

[<img src="https://github.com/user-attachments/assets/b229a8e9-44d6-439f-b9d4-e63c03cfa6a1">](https://testable95.co.kr/)

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
  - [3-1. 어떤 유형의 테스트 코드를 생성하나요?](#3-1-%EC%96%B4%EB%96%A4-%EC%9C%A0%ED%98%95%EC%9D%98-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BD%94%EB%93%9C%EB%A5%BC-%EC%83%9D%EC%84%B1%ED%95%98%EB%82%98%EC%9A%94)
  - [3-2. 왜 Playwright 기반 테스트인가?](#3-2-%EC%99%9C-playwright-%EA%B8%B0%EB%B0%98-%ED%85%8C%EC%8A%A4%ED%8A%B8%EC%9D%B8%EA%B0%80)
  - [3-3. 누구나 쉽게 코드를 생성할 수 있는 방식](#3-3-%EB%88%84%EA%B5%AC%EB%82%98-%EC%89%BD%EA%B2%8C-%EC%BD%94%EB%93%9C%EB%A5%BC-%EC%83%9D%EC%84%B1%ED%95%A0-%EC%88%98-%EC%9E%88%EB%8A%94-%EB%B0%A9%EC%8B%9D)
- [4. 기능 구현](#4-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84)
  - [4-1. 블록 코딩 구현 과정](#4-1-%EB%B8%94%EB%A1%9D-%EC%BD%94%EB%94%A9-%EA%B5%AC%ED%98%84-%EA%B3%BC%EC%A0%95)
    - [(1) 블록의 종류 및 역할 정의](#1-%EB%B8%94%EB%A1%9D%EC%9D%98-%EC%A2%85%EB%A5%98-%EB%B0%8F-%EC%97%AD%ED%95%A0-%EC%A0%95%EC%9D%98)
    - [(2) 블록의 위치 이동 원리](#2-%EB%B8%94%EB%A1%9D%EC%9D%98-%EC%9C%84%EC%B9%98-%EC%9D%B4%EB%8F%99-%EC%9B%90%EB%A6%AC)
  - [4-2. 자연어 처리하기](#4-2-%EC%9E%90%EC%97%B0%EC%96%B4-%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0)
    - [(1) Wit AI를 선택한 이유](#1-wit-ai%EB%A5%BC-%EC%84%A0%ED%83%9D%ED%95%9C-%EC%9D%B4%EC%9C%A0)
    - [(2) Wit AI의 동작 원리](#2-wit-ai%EC%9D%98-%EB%8F%99%EC%9E%91-%EC%9B%90%EB%A6%AC)
- [5. 협업 방식](#5-%ED%98%91%EC%97%85-%EB%B0%A9%EC%8B%9D)
  - [5-1. 다음 작업에도 활용할 수 있는 회의록 기록](#5-1-%EB%8B%A4%EC%9D%8C-%EC%9E%91%EC%97%85%EC%97%90%EB%8F%84-%ED%99%9C%EC%9A%A9%ED%95%A0-%EC%88%98-%EC%9E%88%EB%8A%94-%ED%9A%8C%EC%9D%98%EB%A1%9D-%EA%B8%B0%EB%A1%9D)
  - [5-2. 작업의 시간을 단축시키는 PR 리뷰 방식](#5-2-%EC%9E%91%EC%97%85%EC%9D%98-%EC%8B%9C%EA%B0%84%EC%9D%84-%EB%8B%A8%EC%B6%95%EC%8B%9C%ED%82%A4%EB%8A%94-pr-%EB%A6%AC%EB%B7%B0-%EB%B0%A9%EC%8B%9D)

<!-- tocstop -->

<br>
<br>

## 1️. 테스트 코드 생성하기

<img src="https://github.com/user-attachments/assets/256465f0-3b73-4cb5-866a-db98754370a0">

<br>

## 2️. 기술 스택

<img width="1015" alt="기술스택" src="https://github.com/user-attachments/assets/192c4881-d32c-4eb5-bfab-18925b72e5d8">

#### Client

![Redux](https://img.shields.io/badge/redux-%23404d59.svg?style=for-the-badge&logo=redux&logoColor=%23DB7093)

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

### 3-1. 어떤 유형의 테스트 코드를 생성하나요?

> 이 프로젝트에서는 서비스의 전체적인 흐름을 파악할 수 있는 **E2E** 유형의 테스트 코드를 생성합니다.

테스트는 QA엔지니어 혹은 기획자 같은 **비개발자**도 애플리케이션의 기능을 이해하고 그 결과가 실제 사용자 경험에 어떤 영향을 미치는지 보다 명확하게 파악할 수 있도록 돕는 도구라고 생각합니다.

그 중 실제 사용 사례에 초점을 맞추어 **비개발자**도 쉽게 이해하고 사용할 수 있는 **테스트 시나리오를 생성**할 수 있게 하는 **E2E 테스트**가 이 프로젝트와 가장 적합하다고 생각했습니다. 또한 사용자의 경험을 전체적으로 점검하고, 실제 사용 환경에서 애플리케이션이 어떻게 작동하는지 평가하는 **E2E 테스트** 생성기는 실제 협업에서 사용하기에 유용할 거라 판단했습니다.

<br>

### 3-2. 왜 Playwright 기반 테스트인가?

> `Playwright`는 **다양한 언어**를 지원하고 **병렬 처리**도 가능합니다.

프로젝트에 적합한 **E2E** 테스트 자동화 도구를 선정하기 위해, 저희 팀은 `Playwright`, `Selenium`, 그리고 `Cypress` 등 주요 프레임워크들을 비교 분석하였습니다.

<br>

|           | Playwright           | Selenium             | Cypress                   |
| --------- | -------------------- | -------------------- | ------------------------- |
| 지원 언어 | **다양한** 언어 지원 | **다양한** 언어 지원 | 자바스크립트              |
| 병렬 처리 | **내장 지원**        | **내장 지원**        | 추가 라이브러리 설치 필요 |

<br>

이 중, `Playwright`는 자바스크립트 뿐만 아니라 **다양한 프로그래밍 언어**를 지원하기 때문에 사용자 각자가 선호하는 언어로 테스트 코드를 작성할 수 있게 하여, 누구나 사용할 수 있도록 **접근성**을 높여준다고 판단했습니다. 또한 **병렬 처리**를 내장 지원하기 때문에 별도 도구를 추가 설치할 필요없이 대규모 테스트 실행 시간을 단축시켜 작업의 **효율성**을 향상시켜준다고 생각했습니다.

<br>

<div align="center">
  <img width="600" src="https://github.com/user-attachments/assets/5b5f9536-77e1-403d-9efb-b435a166201b">

_GitHub Star 수 비교_

</div>

<br>

또한, `Playwright`의 **높은 스타 수**는 널리 사용되고 있다고 생각했습니다. 이는 `Playwright`가 안정적이고 신뢰할 수 있으며, 활발한 커뮤니티 지원을 받으며 **검증된 기술**이라고 판단하였습니다.

이러한 근거들로 비추어 볼 때, 많은 사용자들을 보유하고 성능이 우수한 `Playwright`를 최종적으로 선택하게 되었습니다.

#### <p align="right"><a href="#top">목차👆🏼</a></p>

<br>

### 3-3. 누구나 쉽게 코드를 생성할 수 있는 방식

> 누구나 쉽게 코드를 생성할 수 있게 제작하기 위해 **자연어**를 처리하는 **블록 코딩** 방식을 도입하였습니다.

비개발자들에게 테스트 코드를 작성하는 데에 있어 가장 큰 장벽 중 하나는 **프로그래밍 언어의 문법과 로직**을 이해해야 한다는 점이라고 생각했습니다. 이러한 장벽을 허물기 위한 직관적이고 접근성을 높이는 방법을 모색하였고 **자연어**를 활용하는 방안을 고려하게 되었습니다. **자연어**를 코드로 처리할 수 있는 방안을 모색하던 중, 저희는 **스크래치(Scratch)** 라는 서비스에서 영감을 받아 **블록 코딩** 방식을 도입하기로 결정했습니다.

**스크래치**는 전 세계 수백만 명의 사용자들이 그래픽 인터페이스를 통해 복잡한 코드를 작성할 필요 없이 **블록**을 조합하는 형태로 프로그램을 구성할 수 있는 서비스입니다.

<div align="center">
  <img width="260" height="242" src="https://github.com/user-attachments/assets/e6b38dd0-2083-4e54-bae4-c4bfe7f7e23b"><img width="540" src="https://github.com/user-attachments/assets/2c94efca-cc55-4497-a768-496d78b9f7f9">

_수백만의 사람들이 사용하는 스크래치 서비스_

</div>

이 프로젝트는 이러한 스크래치의 **블록 코딩** 원리를 적용하여, 개발자 뿐만 아니라 **QA 엔지니어나 기획자**도 직관적으로 코드 블록을 선택하고 조합함으로써 원하는 **테스트 코드를 생성**할 수 있도록 하였습니다.

#### <p align="right"><a href="#top">목차👆🏼</a></p>

<br>
<br>

## 4. 기능 구현

### 4-1. 블록 코딩 구현 과정

> 사용자 경험을 위해 커스터마이징하고 팀원들과 블록 코딩의 논리를 명확하게 이해하기 위해 **블록 코딩**을 **직접 구현**하였습니다.

자연어를 처리하여 코드로 변환하기 위해서는 기존의 블록 코딩과 **차별점**이 필요하다고 생각하였습니다. 또한 팀원들이 함께 작업하는 만큼 블록 코딩의 원리를 잘 이해해야 추후 유지보수 및 기능 확장에 도움이 될 거라 판단하였습니다. 그리하여 팀원들과 협의 후, 라이브러리를 사용하지 않고 **직접 구현**하는 방향으로 결정하였습니다.

#### (1) 블록의 종류 및 역할 정의

이 프로젝트에서는 **블록**을 Playwright 테스트 코드 구성 요소로 삼아 크게 **세 가지** 주요 유형으로 분류합니다.

1.  **메서드 블록 (Method Block)**: 특정 기능을 **수행**하는 코드 조각을 의미하며, 하나 또는 여러 인풋 블록과 결합하여 사용되는 블록
2.  **인풋 블록 (Input Block)**: 메서드 블록과 관련이 있는 **세부 정보**가 담긴 **매개변수**를 제공하는 역할로 사용자가 직접 값을 입력할 수 있는 블록

3.  **라인 블록 (Line Block)**: **코드 한 줄**을 나타내며, 하나 이상의 메서드 블록이나 인풋 블록을 포함하는 블록

    | 인풋 블록       | <img width="164" alt="인풋블록" src="https://github.com/user-attachments/assets/4300fac0-3ef9-411f-8c2d-67a75b60e524">  |
    | --------------- | ------------------------------------------------------------------------------------------------------------------------------- |
    | **메서드 블록** | <img width="164" alt="메서드블록" src="https://github.com/user-attachments/assets/720c7859-6a23-481f-8acc-cf53744d9fcf"> |
    | **라인 블록**   | <img src="https://github.com/user-attachments/assets/c17e9b7f-0a43-4571-9800-ff9734adc92b">                                     |

    **라인 블록**이 생성되기 위해서는 아래 조건을 만족해야 코드 한 줄이 **완성**된 것으로 간주되어 다음 **라인 블록**을 **생성**할 수 있도록 구현했습니다. 다음 조건들로 사용자들이 불필요한 테스트 코드 생성을 방지하고 코드 문법이 어색한 비개발자들도 **효율적**으로 코드를 생성할 수 있도록 도와줍니다.

    - **하나의 메서드 블록**만 존재하는 경우

      <details>
      <summary>예시</summary>

      ```jsx
      await page.waitFor();
      ```

        <img width="347" alt="스크린샷 2024-10-26 오후 8 16 22" src="https://github.com/user-attachments/assets/e19712b2-6557-4e0f-908f-98438decf65b">
      </details>

    - 한 쌍의 **메서드 블록과 인풋 블록**이 배치되는 경우

      <details>
      <summary>예시</summary>

      ```jsx
      await page.goto("www.naver.com");
      ```

        <img width="369" alt="라인블록" src="https://github.com/user-attachments/assets/f2cb4139-bb76-48ac-a70d-8117d728cf1f">

      </details>

    - **하나의 메서드 블록과 다수의 인풋 블록**이 배치되는 경우

      <details>
      <summary>예시</summary>

      ```jsx
      await page.locator("#order-sent").waitForTimeout(5000);
      ```

        <img width="533" alt="스크린샷 2024-10-26 오후 8 18 17" src="https://github.com/user-attachments/assets/6ac2ac65-ce4f-4de1-be3f-14bdb8ae04e5">

      </details>

#### <p align="right"><a href="#top">목차👆🏼</a></p>

<br>

#### (2) 블록의 위치 이동 원리

블록의 위치를 조절하기 위해 마우스 이벤트를 통해 블록의 `id`를 **저장**하고 **생성**합니다. 이 후, `id`는 **비교**과정을 통해 위치를 지정하는 데 사용됩니다.

<br>

<div align="center">
  <img width="600" alt="스크린샷 2024-10-27 오후 8 27 36" src="https://github.com/user-attachments/assets/62d675bd-a46b-4a25-b532-34d685ea892d">

</div>

<br>

블록 코딩을 구현하기 위해 사용자의 마우스 움직임을 통해 블록의 위치를 조정해야 했습니다. 이 프로젝트에서는 **드래그 앤 드롭** 방식을 적용하여 사용자의 상호작용을 기반으로 블록의 `id`를 관리합니다. 블록의 **드래그 앤 드롭** 동작은 아래 세 가지 마우스 이벤트로 구성됩니다.

<br>

<div align="center">
  <img width="600" src="https://github.com/user-attachments/assets/eeaa9e6f-8003-4344-ac01-14bd1f4dbc92">
  
  _블록과 마우스 이벤트 연결_
</div>

<br>

1. `onDragStart`: 사용자가 블록 **드래그를 시작**할 때, 드래그된 블록의 `id`와 그 블록이 속한 라인 블록의 `id`를 **기록**합니다.

2. `onDragEnter`: 사용자가 블록을 **드래그하는 도중** 다른 블록 위로 마우스를 이동할 때, 드롭될 위치의 블록 `id`와 드래그 중인 `id`를 실시간으로 **추적**합니다.

3. `onDrop`: 사용자가 블록을 **드롭**할 때, 해당 블록에 새로운 `id`를 **부여**하고, 드롭된 라인 블록의 `id`와 함께 이 정보를 **저장**합니다.

이러한 마우스 이벤트들을 통해 블록의 정보를 관리하고 블록이 놓일 위치는 정보에 담긴 `id`를 비교하여 결정됩니다. 블록의 **위치**는 `onDrop` 이벤트가 발생하는 시점에 `id`를 **비교**하여 아래의 조건을 통해 **업데이트**됩니다.

<br>

<div align="center">
  <img width="600" alt="스크린샷 2024-10-27 오후 7 23 25" src="https://github.com/user-attachments/assets/b4ce1c67-3ae3-4d79-b662-4330a6f1850e">

_블록의 위치를 결정하는 조건_

</div>

<br>

- **(같은 / 다른) 라인 블록**에 드롭합니다. : 드래그된 블록이 속한 라인 블록과 드롭할 **라인 블록**의 `id`를 **비교**합니다.
- 드롭할 위치에 다른 블록이 **인접**해 있나요? : 드래그된 블록과 **드롭할 위치의 블록**의 `id`를 **비교**합니다.

이러한 과정을 통해 조건을 설정하여 사용자들이 블록을 **직관적**으로 **이동**시킬 수 있도록 구현하였습니다. 또한 팀원들과 직접 구현하면서 프로젝트의 논리적 구성을 함께 이해하고 **코드 개선**에 대해 **수월하게** 점검하고 개선할 수 있었습니다.

#### <p align="right"><a href="#top">목차👆🏼</a></p>

<br>
<br>

### 4-2. 자연어 처리하기

> 사용자 친화성과 자연어 처리 기능을 고려하여 **Wit AI**를 선택하였습니다.

#### (1) Wit AI를 선택한 이유

팀원들과 함께 **Wit AI**를 선택하게 된 가장 큰 이유는 사용자가 입력한 **자연어 어순에 상관없이 동일하게 코드를 생성**할 수 있는 이점 때문이었습니다. 블록 코딩을 할 때, 사용자는 프로그래밍 언어의 구문을 완벽히 이해하지 못할 수도 있습니다. 특히 비개발자가 테스트 코드를 작성하는 경우, 명령어의 순서를 정확히 배치하는 것이 어려울 수 있습니다.

예를 들어, 블록의 순서를 **다르게 배치**했지만 **동일한 코드를 생성**하고 싶은 두 사용자가 있습니다.
만약 어순에 따라 다르게 자연어를 처리한다면 둘 중 하나는 에러를 발생하거나 예상치 못한 결과를 반환할거라 예상할 수 있습니다.

<br>

<div align="center">
  <img width="500" src="https://github.com/user-attachments/assets/6e471b6c-d5e7-4d08-b980-ce3a6baf1fab">

_역순으로 블록을 배치했을 때 발생하는 에러_

</div>

하지만 **Wit AI**는 아래와 같이 **의도**와 **세부 정보**를 키워드로 추출하기 때문에 **동일한 코드**를 생성할 수 있습니다.

```jsx
const { intents, entities } = await witAI.message(blocks);

const intent = intents.name;
const entity = entities.value;
```

이러한 키워드를 `Playwright` 문법에 맞게 배치하면 사용자는 원하는 코드를 생성할 수 있습니다.

<div align="center">
  <img width="500" src="https://github.com/user-attachments/assets/0549ace0-c0e0-4eac-a597-f2f2823d0dde">

_역순으로 블록을 배치해도 처리하는 Wit AI_

</div>

따라서, 어순에 관계없이 자연어를 처리할 수 있는 **Wit AI**의 유연함때문에 선택하게 되었습니다.

<br>

<br>

#### <p align="right"><a href="#top">목차👆🏼</a></p>

<br>

#### (2) Wit AI의 동작 원리

**Wit AI**는 입력된 자연어에서 **의도(Intent)** 와 **세부 정보(Entity)** 를 추출하여 자연어를 정확히 파악하고, 관련 데이터를 처리하는 자연어 처리 플랫폼입니다. 또한 개발자가 직접 **의도** 와 **세부 정보**의 연관성 를 **학습**시켜 원하는 목적과 관련 정보를 효과적으로 분석해주는 기능을 갖추고 있습니다.

아래의 과정을 진행하여 **Wit AI**의 원활한 분석을 위해 의도와 세부 정보의 연관성에 대한 **학습**을 진행할 수 있습니다.

<div align="center">
  <img width="400" alt="스크린샷 2024-10-27 오후 11 14 23" src="https://github.com/user-attachments/assets/5a8506eb-8db0-4904-9d1f-95201edb52ee">

_의도와 세부 정보 연관성 학습_

</div>

Wit AI는 이러한 학습을 통해 **의도**와 **세부 정보**의 **연관성**을 **강화**할 수 있습니다. 아래는 실제 팀원들과 "이동합니다."라는 의도와 `url`이라는 세부 정보의 연관성을 강화하는 학습을 진행한 자료입니다.

<div align="center">

  <img width="400" src="https://github.com/user-attachments/assets/fe710360-f3f6-4148-a41f-b42ae1409b55">

_"이동합니다."와 `url` 연관성 강화 학습 기록_

</div>

학습을 거친 **Wit AI**는 **의도**와 **세부 정보**를 아래와 같이 분석하고 **추출**합니다.

<br>

<div align="center">
  <img width="400" alt="스크린샷 2024-10-27 오후 2 01 21" src="https://github.com/user-attachments/assets/81fbc6f7-dd21-4a6b-a8ec-a9a9beb15906">

_Wit AI의 의도와 세부 정보_

</div>

<br>

1. 입력된 자연어를 통해 **의도**를 파악합니다.
2. 학습된 정보를 통해 **의도**의 이름을 **추출**합니다.
3. 학습된 정보를 통해 **의도**와 관련된 **세부 정보**를 파악합니다.
4. **세부 정보**에 포함된 동적 값을 분석하여 **의도**에 필요한 **값**(매개변수)으로 **추출**합니다.

<br>

위와 같은 일련의 과정을 거쳐 **Wit AI**는 입력된 자연어를 **의도**의 이름과 **세부 정보**의 값을 추출하고 테스트 코드 생성에 직접적으로 활용합니다.

테스트 코드 생성 과정은 아래 예시를 통해 자세히 설명하겠습니다.

<br>

<div align="center">

  <img width="800" alt="플로우" src="https://github.com/user-attachments/assets/16d0c24b-cc38-4fc4-bd1b-e15939b3e4d7">

_블록을 테스트 코드로 변환하는 과정_

</div>

<br>

1. 사용자가 `www.naver.com` (`url`) "이동합니다." 라는 블록을 입력합니다.
2. **Wit AI**는 학습된 내용을 바탕으로 "이동합니다."라는 **의도**를 `goto`라는 이름으로 추출합니다.
3. **Wit AI**는 학습된 내용을 바탕으로 `goto`라는 **의도**와 `url`이라는 **세부 정보**와의 연관성을 파악합니다.
4. **Wit AI**는 사용자가 입력한 `www.naver.com`를 **세부 정보** `url`의 값으로 추출합니다.
5. **세부 정보**에 담긴 값(`www.naver.com`)과 의도의 이름(`goto`)를 활용하여 테스트 코드를 생성합니다.

#### <p align="right"><a href="#top">목차👆🏼</a></p>

<br>
<br>

## 5. 협업 방식

### 5-1. 다음 작업에도 활용할 수 있는 회의록 기록

> 회의록을 **꾸준히** 작성하여 추후 진행하는 작업에 도움이 되었습니다.

회의 스케줄과 기록의 꾸준한 관리는 프로젝트의 효율성을 크게 향상시키는 요소라 생각합니다. 저희 팀은 개발 기간동안 **일일 스크럼**과 **저녁 마무리 회의**를 아래와 같이 진행하였습니다.

<br>

|              | 일일 스크럼                                  | 저녁 마무리 회의                   |
| ------------ | -------------------------------------------- | ---------------------------------- |
| 시간         | 매일 오전 10시 (20분)                        | 매일 오후 9시 (30분)               |
| 공유<br>내용 | 개인 컨디션<br> 작업 진행 상황<br> 당일 목표 | 어려움 <br>작업 정리<br> 익일 계획 |

<br>

아래는 팀원들의 **일일 스크럼**과 **저녁 마무리 회의** 진행 자료 입니다.

<div align="center">
  <img width="400" src="https://github.com/user-attachments/assets/74b25ae8-f42a-427f-b492-cc02633f616d">

_개발 기간 20일 동안 55개의 회의록을 작성하였습니다._

</div>

회의록을 작성하면서 팀원들과 구두로 나눈 대화는 시간이 지나면서 잊혀지기 쉽지만 기록을 통해 중요한 아이디어와 결정사항을 **보존**하고, 추후에 **참고자료로 활용**하였습니다. 또한 프로젝트에 관련된 중요 결정들이 어떤 고민과 논의를 통해 이루어졌는지 추적하고 **비슷한 상황에서 의사결정**을 하는데 도움을 주기도 하였습니다.

<br>

| 8월 5일 (E2E 테스트 프레임 워크 비교)                                                                                                                    | 8월 7일 (자연어 처리 API 비교)                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| <img width="400" alt="스크린샷 2024-10-28 오전 10 47 50" src="https://github.com/user-attachments/assets/5a8d858b-e6c0-4df7-8c65-78cbe9c39a28"> | <img width="400" src="https://github.com/user-attachments/assets/4f659666-e772-4f8a-9bf7-8ce28dd625a5"> |

<br>

**8월 5일** 회의에서 기록한 E2E 테스트 프레임 워크를 비교한 방식을 **8월 7일** 자연어 처리 API 비교하는데 활용할 수 있었습니다. 이러한 회의록의 활용 방식은 팀원들의 작업 **효율성**을 높이는데 기여할 수 있었습니다.

#### <p align="right"><a href="#top">목차👆🏼</a></p>

<br>

### 5-2. 작업의 시간을 단축시키는 PR 리뷰 방식

> 수정이 필요한 리뷰는 **근거 있는** 자료와 **링크** 및 **시각 자료**는 반드시 첨부해야 합니다.

팀원들과의 긴 PR 리뷰 시간이 많은 어려움을 일으키는 주된 원인으로, 수정이 필요한 코드에 대해 추가 조사가 필요하다는 점을 파악했습니다. 이로 인해 리뷰 과정이 지연되고, 팀의 생산성이 저하되는 문제가 발생하였습니다.

<br>
<div align="center">
  <img width="400" src="https://github.com/user-attachments/assets/3b2e93dc-2054-4d1d-b6a0-b7ceb3aa4dba">

_코드 리뷰에 대한 팀원들의 어려움_

</div>

<br>

이 문제를 해결하기 위해, 우리 팀은 PR 리뷰에 **근거 있는 자료**와 함께 **시각 자료**를 첨부하는 방식을 도입하였습니다.

1. **근거 있는 리뷰**<br>
   코드 수정이 필요하다고 판단되는 경우, 그 이유와 **공신력 있는 근거 자료**를 명확히 제시합니다.

2. **링크와 시각 자료**<br>
   관련 근거 자료를 뒷받침하는 외부 링크와 그에 해당하는 **시각 자료**를 첨부합니다.

  <br>

아래는 개선된 리뷰 방식을 적용하기 전과 후를 비교한 자료입니다.

<br>

| Before                                                                                                                                                 | After                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="802" alt="스크린샷 2024-10-25 오후 7 34 42" src="https://github.com/user-attachments/assets/f816fb0f-09ba-4f87-bd52-54565489589b"> | <img width="802" alt="스크린샷 2024-10-26 오전 9 32 30" src="https://github.com/user-attachments/assets/d312293a-0019-4303-9fd7-d7adbd59c52a"> |

<br>

이러한 리뷰 양식의 새로운 접근 방식은 팀원들이 리뷰 과정에서 발생할 수 있는 **불필요한 시간 소모를 줄이고**, 각 **리뷰의 목적과 필요성**을 명확히 이해할 수 있도록 하였습니다. 또한, 리뷰에 첨부된 시각 자료는 팀원들이 복잡한 정보를 빠르게 이해하도록 도와주며, 전반적인 작업 효율을 크게 개선하였습니다. 이러한 변화는 팀원들의 개발 프로세스의 전반적인 **효율성**을 높이는 데 기여했다고 생각합니다.

#### <p align="right"><a href="#top">목차👆🏼</a></p>
