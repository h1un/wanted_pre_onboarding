# 원티드 프리온보딩 프론트엔드 사전과제

### wanted_pre_onboarding

---

### 🌈 요구사항

- [x] Toggle.js
- [x] Modal.js
- [x] Tab.js
- [x] Tag.js
- [x] AutoComplete.js
- [x] ClickToEdit.js

### 🌈 이용 방법

1. 프로젝트 클론
2. 

```
npm install
npm start
```

### 🌈 [구현 화면](https://h1un.github.io/wanted_pre_onboarding/)

## 1. Toggle

![Toggle](https://user-images.githubusercontent.com/43220356/153760816-61c58e55-6ea3-40b3-a54d-96ee71c60020.gif)

#### [ 구현방법 ]

- `input`태그의 `checkbox` 타입 사용

- `onClick` 이벤트가 발생할때 `onToggle` 함수를 통해 On/Off 변경

## 2. Modal

![MODAL](https://user-images.githubusercontent.com/43220356/153760809-c4dd6376-4111-41de-8884-087e44253f1f.gif)

#### [ 구현방법 ]

- `onClick` 이벤트가 발생할때 `opneModal` 함수를 통해 `true` 일경우 모달창 띄우기, `false`일때 모달창 닫기

## 3. Tab

![Tab](https://user-images.githubusercontent.com/43220356/153760814-b3bdf331-f405-4b82-8cba-38a4912c0306.gif)

#### [ 구현방법 ]

- `selectTab` 함수를 이용하여 `tabList`에서 인덱스 값 데이터 가져오게하기

## 4. Tag

![Tag](https://user-images.githubusercontent.com/43220356/153760812-9285fda3-c748-4405-8c22-47dbabf6251b.gif)

#### [ 구현방법 ]

- `input` 태그의 `text` 타입 사용, `ul` 태그를 사용하여 Tag 추가

- `Enter` 를 입력했을때  `addTag` 함수로 리스트에 태그 추가

- `&times;`를 클릭 했을때 인덱스 값을 가져가 `removeTag` 함수를 통해 리스트에서 인덱스 값 삭제

#### [ 어려웠던 점과 해결 방법 ]

- `input` 태그의 `text` 타입에서 `Enter` 를 입력했을때 이벤트 발생
  - 해결법 - `KeyboardEvent`를 이용하여 `Enter`가 입력됐을때 `addTag` 함수 실행


## 5. AutoComplete

![Auto](https://user-images.githubusercontent.com/43220356/153766288-3d6a14bb-3940-4514-a059-08a0c799c0ac.gif)


#### [ 구현방법 ]

- `input` 박스에 값을 입력할때마다 `dataList`에서 값이 있다면 `DropDown` 보여주기

- `DropDown` 은 `ul` 태그를 사용하여 구현
  - 클릭했을때 `onSelect` 함수로 `input` 박스에 값 넣기

- `&times;`를 클릭 했을때 `onClear` 함수로 "" 값 넣기

- `useEffect`로 `includedDataList`에 값 넣고 `dataList` 에서 포함하는 값을 찾아 반환

#### [ 어려웠던 점과 해결 방법 ]

- `useEffect` 의 사용법

- 변수의 구성 
  - 해결법 - `dataList`에서 바로 찾아 쓸 생각이였는데 `includedDataList` 를 새로 구성해줌

- css `DropDown`의 위치

## 6. ClickToEdit

![ClickToEdit](https://user-images.githubusercontent.com/43220356/153760810-9c0ea6e3-7603-4f8d-9b25-0ce13e9481ac.gif)

#### [ 구현방법 ]

- 화면을 클릭을 했을때 `clickTap` 함수를 통해 `이름`, `나이` 값을 가져와 출력

#### [ 어려웠던 점과 해결 방법 ]

- 화면 클릭 이벤트
  - 해결법 : `document.querySelector("body")` 로 `body` 요소 가져와 `addEventListener`로 클릭했을때(`mousedown`)  `clickTap` 함수 실행

