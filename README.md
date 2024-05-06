# 🗓️ Daily Emotion Diary App

<img width="994" alt="image" src="https://github.com/Dominico-Yoon/dailyEmotionDiary/assets/142984862/70c2f9a9-3792-474d-aca1-0d357bd1d3cb">


> 개인 미니 프로젝트로 진행한 Daily Emotion Diary App 입니다.
> 
> 

### 목차

1. [주요 기능](#주요-기능)
    - [Home Page](#Home-Page)
      * [월 별 리스트 조회](#월-별-리스트-조회)
      * [최신순, 감정별 리스트 필터링](#최신순,-감정별-리스트-필터링)
    - [New Page](#New-Page)
      * [새 일기 쓰기](#새-일기-쓰기)
    - [Diary Page](#Diary-Page)
      * [현재 일기 내용 조회](#현재-일기-내용-조회)
    - [Edit Page](#Edit-Page)
      * [일기 수정](#일기-수정)
      * [일기 삭제](#일기-삭제)
2. [사용한 기술 스택 및 라이브러리](#사용한-기술-스택-및-라이브러리)
3. [프로젝트를 하며 느낀 점](#프로젝트를-하며-느낀-점)

## [주요 기능]

### 1. Home Page

- [x] LocalStorage에 저장된 값들을 불러와 초기 값을 갖고온다.
<img width="500" alt="image" src="https://github.com/Dominico-Yoon/dailyEmotionDiary/assets/142984862/f679b4f0-c8ce-4be8-b0f9-f9b93ce7d91c">


#### 1-1 월 별 리스트 조회

- [x] state에 PivotDate값을 Date객체로 만들어 주고 onIncreaseMonth, onDecreaseMonth 함수로 pivotDate 값을 증가/ 감소
<img width="500" alt="image" src="https://github.com/Dominico-Yoon/dailyEmotionDiary/assets/142984862/e4630913-de93-46bf-9917-ec478c1451a2">
<img width="500" alt="image" src="https://github.com/Dominico-Yoon/dailyEmotionDiary/assets/142984862/b157be85-9de2-4d7b-bddc-2bdb91606ba6">



#### 1-2 최신순, 감정별 리스트 필터링

- [x] State에 sortLate(최신순), sortEmotion(감정별)의 값을 초기화 값을 latest, all로 만들어 준다.
- [x] LocalStorage에 있는 Data 객체들을 갖고와 filter(), toSorted를 사용해 emotionId와 Option태그 value로 설정한 값에 맞춰 Filtering과 Sort를 진행 하였습니다.

- [x] 최신순 정렬 
<img width="500" alt="image" src="https://github.com/Dominico-Yoon/dailyEmotionDiary/assets/142984862/53bafe81-39bb-4c37-a01b-655105c93d3e">
<img width="500" alt="image" src="https://github.com/Dominico-Yoon/dailyEmotionDiary/assets/142984862/2d73f23d-dbe3-403c-a37f-f922dc946650">

- [x] 감정별 정렬 
<img width="333" alt="image" src="https://github.com/Dominico-Yoon/dailyEmotionDiary/assets/142984862/87a7e975-7581-42a2-8ce3-2b90e7d6ad26">
<img width="333" alt="image" src="https://github.com/Dominico-Yoon/dailyEmotionDiary/assets/142984862/770ca364-c4c2-492c-8a04-446fe5c2bd40">
<img width="333" alt="image" src="https://github.com/Dominico-Yoon/dailyEmotionDiary/assets/142984862/36fedc0d-5d1c-4a80-b9ab-0fc5650a26e7">



### 2. New Page

- [x] Context를 사용하여 App.jsx에서 만든 onCreate()함수를 갖고와서 일기를 추가해 줍니다.
<img width="500" alt="image" src="https://github.com/Dominico-Yoon/dailyEmotionDiary/assets/142984862/bc9b0c02-b5a4-4686-a744-b171ef3ea7c6">



#### 2-1 새 일기 쓰기

- [x] State에 초기값 input 객체에 createdDate는 Date객체로 초기화, emotionId는 1~5 중간값인 3, content는 비어있음으로 초기화를 시켜줍니다.
- [x] 각 태그에서 onChangeInput() 함수를 사용하여 값이 변경이 될 때, setInput으로 State값을 바꿔줍니다.
- [x] 값을 전부 채우고 작성완료 버튼 클릭시 New Page에서 받아온 onSubmit() 함수를 이용해 State값 들을 새로 추가해 줍니다.
<img width="500" alt="image" src="https://github.com/Dominico-Yoon/dailyEmotionDiary/assets/142984862/185770fc-cdeb-46c1-8e2e-10273cc644eb">
<img width="500" alt="image" src="https://github.com/Dominico-Yoon/dailyEmotionDiary/assets/142984862/9ef4b67b-48b1-4219-823e-9448dea19ce9">



### 3. Diary Page

- [x] useParams()를 이용해 URL에서 받은 값을 통해 새로 만든 커스텀 훅인 useDiary로 Data를 갖고와서 보여줍니다.
<img width="500" alt="image" src="https://github.com/Dominico-Yoon/dailyEmotionDiary/assets/142984862/de23baf8-fac1-492d-852a-d3858ca528a3">


### 3-1 현재 일기 내용 조회

- [x] useDiary로 가져온 값들을 Viewer컴포넌트로 보내준다.
- [x] util로 만든 emotionList 객체에 find() 메서드를 사용하여 props로 받아온 emotionId와 같은 값을 찾아줍니다.
- [x] emotionId를 통해 이미지를 갖고오고, emotionName으로 기분을 가져와서 보여줍니다.
- [x] props로 가져온 content를 보여줍니다.
<img width="400" alt="image" src="https://github.com/Dominico-Yoon/dailyEmotionDiary/assets/142984862/de23baf8-fac1-492d-852a-d3858ca528a3">
<img width="400" alt="image" src="https://github.com/Dominico-Yoon/dailyEmotionDiary/assets/142984862/af7aec28-b22a-43bb-b701-52b6658fa390">

### 4. Edit Page

- [x] Diary Page 우측 상단 수정하기 버튼을 클릭하여 이동합니다.
- [x] App.jsx에서 만든 onUpdate(), onDelete() 함수를 Context를 사용하여 가져와 수정, 삭제 기능을 구현 하였습니다.
- [x] useDiary 커스텀훅을 사용하여 parmas.id를 통해 현재 일기 객체 값을 가져와줍니다.
<img width="500" alt="image" src="https://github.com/Dominico-Yoon/dailyEmotionDiary/assets/142984862/89de7410-857d-47c1-9304-52d9881c616e">

### 4-1 일기 수정

- [x] 새 일기 쓰기와 같은 기능입니다.
- [x] 다른 것은 새로 만들기와 수정인데 이 구분은 onSubmit()함수를 props로 받아 수정 기능은 onSubmit에 onUpdate()함수가 들어가 있습니다.
<img width="330" alt="image" src="https://github.com/Dominico-Yoon/dailyEmotionDiary/assets/142984862/0175f6ca-b6bf-4595-8dd3-963be7bf19c9">
<img width="330" alt="image" src="https://github.com/Dominico-Yoon/dailyEmotionDiary/assets/142984862/6a233aa1-8870-47f6-91ee-b412000c5b49">
<img width="330" alt="image" src="https://github.com/Dominico-Yoon/dailyEmotionDiary/assets/142984862/79f4148d-5190-4096-a2e6-997c3dc69124">



### 4-2 일기 삭제

- [x] button 클릭시 해당 id값을 filter()로 id값이 아닌 것만 뽑아줍니다.
<img width="330" alt="image" src="https://github.com/Dominico-Yoon/dailyEmotionDiary/assets/142984862/3dbc0125-595c-46b4-9054-7a3d7f0976dc">
<img width="330" alt="image" src="https://github.com/Dominico-Yoon/dailyEmotionDiary/assets/142984862/36a1ef33-7535-4b8f-af4d-207bac1144ec">
<img width="330" alt="image" src="https://github.com/Dominico-Yoon/dailyEmotionDiary/assets/142984862/aadd8a0b-717e-465c-bc19-9756c21ee7f2">




## [사용한 기술 스택 및 라이브러리]

<div align=center> 

<img height="50" src="https://github.com/Dominico-Yoon/todoApp/assets/142984862/88ed08ac-887b-4dd3-ab85-072eece1b6bc">
<img height="50" src="https://github.com/Dominico-Yoon/todoApp/assets/142984862/2f6fd621-3fb6-4cd3-b893-9e39b78d5db6">
<img height="50" src="https://github.com/Dominico-Yoon/todoApp/assets/142984862/71f6407a-5bc8-4cd5-8eb4-e29c9b834765">
<img height="50" src="https://github.com/Dominico-Yoon/todoApp/assets/142984862/2e72cc60-8d35-4a43-80f2-f5700ba89823">

</div>

- 사용한 기술 스택 : HTML, CSS, JavaScript, React

## [프로젝트를 하며 느낀 점]
예전에 진행했던 프로젝트 보다는 시간은 얼마 걸리지 않았습니다.
하지만 여러 Page들이 생기다 보니 기획 하는거에 대해 생각할게 많아졌습니다.
데이터들도 많은 페이지, 컴포넌트에서 다뤄야 하다 보니 Context의 활용방식에 대해 좀더 알게되었습니다.
그리고 MPA보다 SPA방식이 좀 더 최적화가 좋다는 것에도 대해 알게되었습니다.
