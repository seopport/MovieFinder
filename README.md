# Movie Finder
OpenAPI를 활용하여 영화 검색 사이트 만들기

<br>



### 🔽 **프로젝트 소개**


**프로젝트 명** : *Movie Finder*

**개발 기간** : 2024.01.05 ~ 2024.01.09

**프로젝트 소개** : 인기 영화를 검색할 수 있는 사이트입니다.

**프로젝트 목표** : OpenAPI를 활용하여 인기 영화 리스트를 출력하고, 원하는 영화를 검색할 수 있습니다.

<br>

### 🔽  **개발 환경**

- **editor :** Visual Studio Code
- **environment :** git, github
- **language :** Javascript
- **API** : TMDb API
- **design** : Figma



<br>


### **🔽 시작 가이드**

**1. git clone**
```bash
$ git clone https://github.com/seopport/MovieFinder.git
$ cd MovieFinder
```
**2. vs code에서 라이브서버를 켜주세요.**

<br>

### **🔽 와이어프레임**
![Wireframe](https://github.com/seopport/MovieFinder/assets/103973797/3574a6a4-a4e0-429f-9864-bcd08bb5b5cf)


<br>

### 🔽 화면 구성 및 기능


------

#### 1. 필수 요구 사항

+ 순수 바닐라 자바스크립트 사용하기
+ TMDB 오픈 API를 이용하여 인기영화 데이터 가져오기
+ 영화정보 카드 리스트 UI 구현
+ 카드 클릭 시에는 클릭한 영화 id 를 나타내는 alert 창 띄우기
+ 영화 검색 UI 구현
  + 검색칸에 영화 이름을 입력하면 일치하는 영화들만 출력하기


#### 2. 선택 요구 사항

+ flex 사용하기
+ 페이지 로드 후 입력칸에 커서 자동 위치시키기
+ 대소문자 관계없이 검색 가능하게 하기
+ 키보드 enter키를 입력하여 검색하기
+ 검색 시 일치하는 항목 없을 시 alert창 띄우기


<br>

#### 3. 화면 구성

|                            메인틀                            |                           비고                             |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
| <img src="https://github.com/seopport/MovieFinder/assets/103973797/905fd8a3-4c05-4d06-a3c1-c41822e92eea" style="width: 60%;" /> |                     메인 페이지 입니다.  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                    |
|                             **헤더**                             |                                                              |
| <img src="https://github.com/seopport/MovieFinder/assets/103973797/7eccbdde-29af-47f0-8412-b30d75aea115" style="width: 60%;" /> |              타이틀 헤더입니다.              |
|                          **검색창**                          |                                                              |
|<img src="https://github.com/seopport/MovieFinder/assets/103973797/b2eaa8ed-b8e7-4c2f-a82c-41b24c0833c5" style="width: 60%;" />| 검색할 영화를 입력할 검색창입니다.<br />Enter와 Go버튼을 사용해 검색할 수 있습니다. |
|                        **영화 카드**                         |                                                              |
| <img src="https://github.com/seopport/MovieFinder/assets/103973797/a311ddd9-d360-41bd-8467-a2242cd28fe3" style="width: 60%;" /> | 영화 카드입니다.<br />영화 카드는 영화 이름, 평점<br />영화 요약, 포스터 이미지로 구성되어 있습니다. |
|                         카드 클릭 시                         |                                                              |
| <img src="https://github.com/seopport/MovieFinder/assets/103973797/09242e7c-d347-4620-84a7-97dc7e3e0b76" style="width: 60%;" /> | 영화 카드를 클릭하면<br />영화 아이디를 출력하는 alert창을 띄웁니다. |
|                       **영화 검색 시**                       |                                                              |
| <img src="https://github.com/seopport/MovieFinder/assets/103973797/972c716c-4809-4dce-88a2-979968b2e25e" style="width: 60%;" /> | 영화 검색 시 일치하는 <br />영화 목록들을 출력합니다.<br />영화 검색은 대소문자 구분 없이<br />검색할 수 있습니다.<br>좌측 상단에 검색 결과의 개수를 표시합니다. |
|                    **검색 결과 없을 시**                     |                                                              |
| <img src="https://github.com/seopport/MovieFinder/assets/103973797/68ba98d1-9c1a-489e-87c2-00ea2119fd7c" style="width: 60%;" /> | 일치하는 검색 결과가 없을 시<br />검색 결과가 없음을 알리는 alert창을 띄웁니다. |
|                                                              |                                                              |




<br>

#### 4. 기능 소개

+ 메인 페이지
  + flex를 사용하여 반응형 웹으로 구현하였습니다.
  + 페이지를 로드하면 자동으로 입력칸에 커서를 위치시킵니다.

+ 영화 카드 리스트
  + TMDB 오픈 API를 활용하여 인기영화 데이터를 가져와 영화 카드 리스트 UI를 구현합니다.
  + 영화 카드는 영화 이름, 평점, 영화 요약, 포스터 이미지로 구성되어 있습니다.
  + 영화 카드를 클릭하면 영화 ID를 알려주는 alert를 띄웁니다.
  + 
+ 검색
  + 검색창에 영화 제목을 입력하고 엔터를 누르거나, Go버튼을 눌러 검색할 수 있습니다.
  + 입력한 영화 제목과 일치하는 영화 카드들만 출력합니다.
  + 검색 시 대소문자를 구분하지 않습니다.
  + 검색 결과 개수를 표시합니다.
  + 입력한 영화 제목과 일치하는 항목이 없을 시 검색 결과가 없음을 알려주는 alert를 띄웁니다.


<br>

### 🚦 트러블 슈팅
                                                                                                                                                                                                                            
  #### **1. 문제**
  
  검색창에 한글을 입력하고 엔터로 검색했을 때 발생하는 검색결과가 없음을 알리는 alert창이 두번 뜨는 버그가 발생하였다.<br>
  영어로 검색하거나, Go버튼을 클릭하여 검색했을 때에는 버그가 발생하지 않았기 때문에 Enter의 이벤트 발생에서 한글입력에 대한 문제가 발생했을 것이라고 추론하였다.
  
  ```jsx
  inputEnterPressed.addEventListener("keyup", function (e) {
    if (e.code === "Enter") {
      appendSearchedCard();
    }
  ```

  
  #### **2. 시도**
  - EventListener의 이벤트타입을 keypress로 변경하기<br>
  이벤트리스너에 할당한 이벤트타입을 `keyup → keypress`로 바꾸니 해결할 수 있었다. 그러나  `keypress`는 사용이 권장되지 않기때문에 다른 방법을 찾아보았다.
  
  - isComposing 함수 사용하기<br>
  먼저 한글에서만 버그가 발생하는 이유는 한글이 자음과 모음의 조합으로 한 음절이 만들어지는 조합문자이기 때문이다. 그래서 조합되고있을 때 작업이 한번 수행되고, 조합이 완료되었을 때 작업이 한번 수행되어 총 두번의 작업이 수행되고 있었다. (*한글을 입력할 때 표시되는 밑줄이 조합되고 있음을 알려주는 표시다. 그래서 한글을 입력하고, 방향키를 눌러 밑줄을 없애 조합이 완료된 것으로 나타내면 해당 버그가 발생하지 않았다.)*
  영어는 한 음절이 하나의 알파벳으로 이루어지고, 조합문자가 아니기때문에 영어를 입력할 때는 버그가 발생하지 않았던 것이다.
  
  **-> 따라서 `isComposing`이라는 입력된 글자가 조합되고있는지 아닌지 판단하는 함수를 사용하고 이벤트타입을 `keydown`으로 설정하여 해결하였다.
  이벤트 타입을 `keydown`으로 설정하는 이유는 위 내용과 비슷하게 `keyup` 이벤트는 한글 입력 시 조합 중일 때도 이벤트가 발생하기 때문이다.**


  
  #### **3. 해결방안**
  
  글자가 조합되고 있는지를 true/false로 반환하는 함수
  (조합 중 = true / 조합중이 아님 = false)
  isComposing에 false를 조건으로 사용하여 조합이 완료되었을 때 작업을 수행하도록 하였다.

   ```jsx
inputEnterPressed.addEventListener("keyup", function (e) {
   if (e.code === "Enter") {
      if (!e.isComposing) {
        appendSearchedCard();
      }
    }
}
  ```


  #### **4. 선택한 방법**
  
  **isComposing 함수를 조건으로 부여**

<br>

***
