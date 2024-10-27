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

### 3-1. 어떤 유형의 테스트 코드를 생성하나요?

> 테스트로 서비스의 전체적인 흐름을 파악할 수 있는 E2E 유형의 테스트 코드를 생성합니다.

테스트는 QA엔지니어 혹은 기획자 같은 비개발자도 애플리케이션의 기능을 이해하고 그 결과가 실제 사용자 경험에 어떤 영향을 미치는지 보다 명확하게 파악할 수 있도록 돕는 도구라고 생각합니다.

그 중 실제 사용 사례에 초점을 맞추어 비개발자도 쉽게 이해하고 사용할 수 있는 테스트 시나리오를 생성할 수 있게 하는 **E2E 테스트**가 이 프로젝트와 가장 적합하다고 생각했습니다. 또한 사용자의 경험을 전체적으로 모방하며, 실제 사용 환경에서 애플리케이션이 어떻게 작동하는지 평가하는 **E2E 테스트**는 실제 협업에서 사용하기에 유용할 거라 판단했습니다.
<br>

### 3-2. 왜 Playwright 기반 테스트인가?

> Playwright는 **다양한 언어**를 지원하고 **병렬 처리**도 가능합니다.

프로젝트에 적합한 E2E 테스트 자동화 도구를 선정하기 위해, 저희 팀은 Playwright, Selenium, 그리고 Cypress 등 주요 프레임워크들을 비교 분석하였습니다.

<br>

|           | Playwright           | Selenium             | Cypress                   |
| --------- | -------------------- | -------------------- | ------------------------- |
| 지원 언어 | **다양한** 언어 지원 | **다양한** 언어 지원 | 자바스크립트              |
| 병렬 처리 | **내장 지원**        | **내장 지원**        | 추가 라이브러리 설치 필요 |

<br>

이 중, **Playwright**는 자바스크립트 뿐만 아니라 **다양한 프로그래밍 언어**를 지원하기 때문에 사용자 각자가 선호하는 언어로 테스트 코드를 작성할 수 있게 하여, 누구나 사용할 수 있도록 **접근성**을 높여준다고 판단했습니다. 또한 **병렬 처리**를 내장 지원하기 때문에 별도 도구를 추가 설치할 필요없이 대규모 테스트 실행 시간을 단축시켜 작업의 **효율성**을 향상시켜준다고 생각했습니다.

<br>

<div align="center">
  <img width="600" src="https://github.com/user-attachments/assets/5b5f9536-77e1-403d-9efb-b435a166201b">

_GitHub Star 수 비교_

</div>

<br>

또한, Playwright의 **높은 스타 수**는 널리 사용되고 있다고 생각했습니다. 이는 **Playwright**가 안정적이고 신뢰할 수 있으며, 활발한 커뮤니티 지원을 받으며 **검증된 기술**이라고 판단하였습니다. 이러한 증거로 볼 때, 개발자들이 **Playwright**에 대해 지속적으로 관심을 가지고 기여하고 있다고 판단하여 **Playwright**를 선택하게 되었습니다.

<br>

### 3-3. 누구나 쉽게 코드를 생성할 수 있는 방식

> 누구나 쉽게 코드를 생성할 수 있게 제작하기 위해 **자연어**를 처리하는 **블록 코딩** 방식을 도입하였습니다.

테스트 코드 생성기의 개발 배경에는 테스트 코드 작성의 중요성이 자주 간과되는 현실이 있습니다. 또한 실제 많은 기업들이 프로젝트의 진행 중 테스트 코드의 작성을 개발자에게만 의존하게 되는 경우가 많다고 들었습니다. 이러한 문제점을 해결하기 위해 개발 경험이 없는 **QA 엔지니어나 기획자**도 때로는 **테스트 코드를 작성**할 필요가 생길 수 있다고 판단하여 **누구나 쉽게 테스트 코드를 생성**할 수 있는 환경을 만들고 싶었습니다.

비개발자들에게 테스트 코드를 작성하는 데에 있어 가장 큰 장벽 중 하나는 프로그래밍 언어의 문법과 로직을 이해해야 한다는 점이라고 생각했습니다. 이러한 장벽을 허물기 위한 직관적이고 접근성이 높은 방법을 모색하였고 **자연어**를 활용하는 방안을 고려하게 되었습니다. **자연어**를 코드로 변환하는 접근 방식은 사용자가 일상 언어를 사용하여 프로그래밍 할 수 있게 함으로써 코드 작성의 문턱을 낮출 수 있다고 생각했습니다.

**자연어**를 코드로 처리할 수 있는 방안을 모색하던 중, 저희는 **스크래치(Scratch)** 라는 서비스에서 영감을 받아 **블록 코딩** 방식을 도입하기로 결정했습니다. **스크래치**는 전 세계 수백만 명의 사용자들이 그래픽 인터페이스를 통해 프로그래밍을 접하고, 자신의 아이디어를 구현할 수 있는 플랫폼으로 복잡한 코드를 작성할 필요 없이, **블록을 조합**하는 형태로 프로그램을 구성할 수 있다는 것입니다.

<div align="center">
  <img width="260" height="269" src="https://github.com/user-attachments/assets/e6b38dd0-2083-4e54-bae4-c4bfe7f7e23b"><img src="https://github.com/user-attachments/assets/2c94efca-cc55-4497-a768-496d78b9f7f9">

수백만의 사람들이 사용하는 스크래치 서비스

</div>

이 프로젝트는 이러한 **블록 코딩**의 원리를 적용하여, 개발자 뿐만 아니라 **QA 엔지니어나 기획자**도 직관적으로 코드 블록을 선택하고 조합함으로써 원하는 테스트 시나리오를 생성할 수 있도록 하였습니다.

<br>
<br>

## 4. 기능 구현

### 4-1. 블록 코딩 구현 과정

>

#### (1) 블록의 종류 및 역할

블록 코딩 시스템 내에서 블록은 기본적인 코드 구성 요소로 기능하며, 다음과 같이 세 가지 주요 유형으로 분류됩니다:

1.  메서드 블록 (Method Block): 특정 기능을 수행하는 코드 조각을 의미하며, 하나 또는 여러 인풋 블록과 결합하여 사용되는 블록
2.  인풋 블록 (Input Block): 메서드 블록에서 필요로 하는 매개변수를 제공하는 역할로 사용자가 직접 값을 입력할 수 있는 블록

    | 인풋 블록       | <img width="164" alt="인풋블록" src="https://github.com/user-attachments/assets/4300fac0-3ef9-411f-8c2d-67a75b60e524">  |
    | --------------- | ------------------------------------------------------------------------------------------------------------------------------- |
    | **메서드 블록** | <img width="164" alt="메서드블록" src="https://github.com/user-attachments/assets/720c7859-6a23-481f-8acc-cf53744d9fcf"> |

3.  라인 블록 (Line Block): 프로그래밍의 한 줄을 나타내며, 하나 이상의 메서드 블록이나 인풋 블록을 포함하는 블록

프로젝트에서는 사용자들이 불필요한 테스트 코드 생성을 방지하기 위해, 아래 조건을 만족한 **라인 블록**만이 완료로 간주되어 다음 **라인 블록**을 생성할 수 있도록 구현했습니다.

- **하나의 메서드 블록**만 존재하는 경우

  <details>
  <summary>예시</summary>

  ```jsx
  await page.waitFor();
  ```

    <img width="347" alt="스크린샷 2024-10-26 오후 8 16 22" src="https://github.com/user-attachments/assets/e19712b2-6557-4e0f-908f-98438decf65b">
  </details>

  <br>

- 한 쌍의 **메서드 블록과 인풋 블록**이 배치되는 경우

  <details>
  <summary>예시</summary>

  ```jsx
  await page.goto("www.naver.com");
  ```

    <img width="369" alt="라인블록" src="https://github.com/user-attachments/assets/f2cb4139-bb76-48ac-a70d-8117d728cf1f">

  </details>

  <br>

- **하나의 메서드 블록과 다수의 인풋 블록**이 배치되는 경우

    <details>
    <summary>예시</summary>
      ```jsx
      await page.locator("#order-sent").waitForTimeout(5000);
      ```

      <img width="533" alt="스크린샷 2024-10-26 오후 8 18 17" src="https://github.com/user-attachments/assets/6ac2ac65-ce4f-4de1-be3f-14bdb8ae04e5">

    </details>

<br>

#### (2) 블록의 위치 추적 및 이동

> 마우스 이벤트를 통해 블록의 위치를 조절할 `id`를 **저장**하고 **생성**합니다. 그리고 블록의 `id`를 **비교**하여 놓여질 위치를 지정합니다.

<br>

<div align="center">
  <img width="600" alt="스크린샷 2024-10-27 오후 8 27 36" src="https://github.com/user-attachments/assets/62d675bd-a46b-4a25-b532-34d685ea892d">
</div>

<br>

블록 코딩을 구현하기 위해 사용자의 마우스 움직임을 통해 블록의 위치를 조정해야 했습니다. 이 프로젝트에서는 드래그 앤 드롭 방식을 적용하여 사용자의 상호작용을 기반으로 블록의 `id`를 관리합니다. 블록의 드래그 앤 드롭 동작은 아래 세 가지 주요 이벤트로 구성됩니다

<br>

<div align="center">
  <img width="600" src="https://github.com/user-attachments/assets/eeaa9e6f-8003-4344-ac01-14bd1f4dbc92">
</div>

<br>

- `onDragStart`: 사용자가 블록 드래그를 시작할 때, 드래그된 블록의 `id`와 그 블록이 속한 라인 블록의 `id`를 **기록**합니다.

- `onDragEnter`: 사용자가 블록을 드래그하는 도중 다른 블록 위로 마우스를 이동할 때, 드롭될 위치의 블록 `id`와 해당 라인 블록의 `id`를 실시간으로 **추적**합니다.

- `onDrop`: 사용자가 블록을 드롭할 때, 해당 블록에 새로운 `id`를 부여하고, 드롭된 라인 블록의 `id`와 함께 이 정보를 **저장**합니다.

마우스 이벤트를 통해 블록의 정보를 관리하고 블록이 놓일 위치는 정보에 담긴 `id`를 비교하여 결정됩니다. 이 때, 블록의 위치는 `onDrop` 이벤트가 발생하는 시점에 아래의 조건을 통해 업데이트됩니다.

<br>

<div align="center">
  <img width="600" alt="스크린샷 2024-10-27 오후 7 23 25" src="https://github.com/user-attachments/assets/b4ce1c67-3ae3-4d79-b662-4330a6f1850e">
</div>

<br>

- `(같은 / 다른) 라인 블록에 드롭합니다.` : 드래그된 블록이 속한 라인 블록과 드롭할 라인 블록의 `id`를 **비교**합니다.
- `드롭할 위치에 다른 블록이 인접해 있나요?` : 드래그된 블록과 드롭할 위치의 블록 `id`를 **비교**합니다.

이러한 조건 로직을 통해 블록을 적절한 위치에 배치하고 사용자는 블록의 위치를 조정함으로써 팀원들과 드래그 앤 드롭의 논리를 **직관적**으로 관리할 수 있었습니다.

<br>
<br>

### 4-2. 자연어 처리하기

#### (1) Wit AI

자연어를 처리하는 다양한 AI 서비스들이 존재하며, 이들 중 어떤 것이 프로젝트에 적합한지 비교가 필요했습니다. 팀은 사용자 친화성과 직관적인 데이터 추출 기능을 고려하여 주요 AI 툴을 평가한 후, 최종적으로 Wit AI를 선택하였습니다. Wit AI는 입력된 자연어에서 **의도(Intent)** 와 **개체(Entity)** 를 학습하여 사용자가 원하는 액션과 관련 데이터를 효과적으로 추출해주는 기능을 갖추고 있습니다.

<div align="center">
<img width="400" alt="스크린샷 2024-10-27 오후 2 01 21" src="https://github.com/user-attachments/assets/81fbc6f7-dd21-4a6b-a8ec-a9a9beb15906">
</div>

<div align="center">
  <img width="800" alt="플로우" src="https://github.com/user-attachments/assets/16d0c24b-cc38-4fc4-bd1b-e15939b3e4d7">

Wit AI는 intent와 entity로 구분하여 학습한 키워드로 각 부분을 추출합니다.

</div>

<br>

#### (2) 처리 과정

블록 코딩과 자연어 처리를 통합한 시스템은 복잡한 개발 과정을 단순화하고, 비개발자도 쉽게 참여할 수 있게 만들어줍니다. 이 과정에서 중요한 역할을 하는 것이 서버에서의 자연어 처리입니다. 다음은 서버에서 라인 블록을 처리하여 코드로 변환하고 클라이언트에 전송하는 과정을 자세히 설명합니다.

서버에서의 처리 과정은 다음 단계로 이루어집니다:

- 서버로 전송: 사용자가 입력한 자연어 기반의 라인 블록 데이터는 서버로 전송됩니다.
- Wit AI를 통한 처리: 서버는 받은 자연어 데이터를 Wit AI에 전달하여 이 자연어 데이터를 분석하고 정보(Intent, Entity)를 추출합니다.
- 코드 변환: 추출된 데이터는 정의된 규칙에 따라 실제 실행 가능한 테스트 코드로 변환됩니다.
- 클라이언트로 전송: 변환된 테스트 코드는 클라이언트에게 전송되어, 사용자가 직접 코드를 검토하고 실행할 수 있습니다.

<br>

<div align="center">
  <img width="600" src="https://github.com/user-attachments/assets/8858e988-c496-4598-ab35-4a272babe550">

처리 과정

</div>

<br>

#### (3) 블록 순서에 구애받지 않는 자연어 처리 방식?

블록 기반 코딩 시스템에서 사용자가 블록을 올바른 순서대로 배치하지 않을 가능성은 항상 존재합니다. 이는 특히 자연어 입력을 코드로 변환하는 과정에서 중요한 고려 사항이 된다고 생각합니다. Wit AI의 자연어 처리 능력은 이러한 문제를 효과적으로 해결할 수 있는 기능을 제공합니다. 예를 들어, 사용자가 "메일 보내기" 기능을 구현하고자 할 때, "받는 사람" 블록을 "메일 제목" 블록보다 먼저 배치하더라도, Wit AI는 자연어 처리를 통해 올바른 코드 순서로 재구성할 수 있습니다.

이러한 기능들을 바탕으로, 저희는 Wit AI를 통해 사용자로부터 수집된 자연어를 정확히 분석하여 코드 블록으로 변환하는 작업을 진행하고 있습니다.

<br>

## 5. 협업 방식

### 5-1. 회의록 기록

회의 스케줄과 기록의 체계적 관리는 프로젝트의 효율성을 크게 향상시키는 요소입니다. 저희 팀은 일일 스크럼과 저녁 마무리 회의를 통해 일정과 진행 상황을 꾸준히 점검하고 있습니다.

- Daily Scrum: 매일 오전 10시에 진행되며, 팀원 각자의 진행 사항과 당일 목표를 공유합니다.
- Wrap-up Meeting: 매일 오후 9시에 진행되어, 그날의 작업을 정리하고 다음 날의 계획을 세웁니다.

<div align="center">
  <img width="400" src="https://github.com/user-attachments/assets/67d770d5-55f8-4316-94d7-7fad5e0a2e23">

개발 기간 20일 동안 57개의 회의록을 작성하였습니다.

</div>

회의록 작성은 단순한 기록을 넘어 프로젝트의 지속적인 발전을 위한 핵심적인 도구라고 생각합니다. 팀원들과 구두로 나눈 대화는 시간이 지나면서 잊혀지기 쉽지만 기록을 통해 중요한 아이디어와 결정사항을 명확히 보존하고, 추후에 참고자료로 활용할 수 있습니다. 또한 프로젝트에 관련된 중요 결정들이 어떤 고민과 논의를 통해 이루어졌는지 추적할 수 있습니다. 이는 향후 비슷한 상황에서의 의사결정에 큰 도움을 준다고 생각했습니다.

이러한 방식 덕분에 효과를

| Before | After |
| ------ | ----- |

<br>
<br>

### 5-2. PR 리뷰

리뷰 과정에서 제공되는 피드백이 명확하지 않을 경우, 리뷰를 받는 팀원이 추가적인 시간을 소비하여 근거를 찾고 로직을 이해해야 하는 불편함이 발생할 수 있습니다. 이를 해결하기 위해 저희 팀은 명확하고 구체적인 리뷰 양식을 도입했습니다.

#### (1) 리뷰 양식의 주요 원칙

1. 근거 있는 피드백 제공<br>
   코드 수정이 필요하다고 판단되는 경우, 그 이유를 명확히 제시합니다. 이는 팀원이 왜 수정이 필요한지를 즉시 이해할 수 있도록 하여, 불필요한 고민과 시간 소비를 줄여줍니다.

2. 링크와 시각 자료 첨부<br>
   관련 근거를 뒷받침하는 외부 링크와 시각 자료를 첨부합니다. 이는 리뷰를 받는 팀원이 별도로 자료를 찾기 위해 시간을 들이지 않도록 하며, 복잡한 개념이나 로직도 쉽게 이해할 수 있게 도와줍니다.

#### (2) 리뷰 프로세스의 개선

리뷰 양식의 도입은 리뷰 과정을 더욱 효율적이고 생산적으로 만들었습니다. 예를 들어, 아래는 리뷰 양식의 적용 전후를 비교한 시각적 자료입니다.

  <br>

| Before                                                                                                                                                 | After                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="802" alt="스크린샷 2024-10-25 오후 7 34 42" src="https://github.com/user-attachments/assets/f816fb0f-09ba-4f87-bd52-54565489589b"> | <img width="802" alt="스크린샷 2024-10-26 오전 9 32 30" src="https://github.com/user-attachments/assets/d312293a-0019-4303-9fd7-d7adbd59c52a"> |

  <br>

이러한 비교를 통해 팀원들은 리뷰의 중요성과 효과를 명확히 볼 수 있으며, 코드 리뷰를 통한 개선 사항이 실제로 어떻게 반영되었는지 쉽게 확인할 수 있었습니다.

  <br>
