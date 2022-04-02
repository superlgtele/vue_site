- Vue3, Vuex (npm install vuex@next)
- Server(npm run demo), Vue(npm run serve)
- axios

- Mounted 단계에서 get 요청한 데이터를 store.js에 저장하도록 구성
- 새로고침하면 jobList 데이터를 못불러오는 오류가 발생하였습니다.
  ( mounted 단계에서 객체를 DOM에 붙인이후 jobList 속성을 추가하려 했기 때문에, undefined 속성에는 접근할 수 없어서 오류 발생 )
- 그래서 Created 단계에서 데이터를 요청하려 했지만, 역시 오류가 발생
  (정확한 이유는 모르겠지만 ajax는 비동기로 Call stack에 들어가기 전 Task Queue에 먼저 담기기 때문에 jobList는 여전히 undefined로 추정)
- 해결방법으로 Main Component에 $store.state.joblistdata[0]?.jobList 이처럼 코드를 구성하여,
  Optional Chaining를 사용하여 undefined 일때의 예외처리 방식을 사용하여 해결

- API 데이터를 최신순으로 정렬 완료(sort)
- 등록일 이벤트(Today, days ago)는 구현하지 못함(store.js에 주석처리)

- 검색 기능은 Search Component에서 @input 이벤트를 사용하여, store.js에서 만든 searchfilter 함수에 input value 데이터를 전달하려고 함
- 하지만 filter 함수 안에서 사용자가 값을 입력하자마자(ex : ㅍ, ㅂ 등등) ㅍ, ㅂ을 배열의 길이만큼 반복(34번)하고 return 해버리는 오류 발생
- 주어진 검색 인풋 박스에 대해 입력된 문자로 실시간 검색하는 기능을 구현하지 못하였고, 검색버튼을 눌러야만 결과가 나옴.
- 또한 filter 함수에 의해 원본데이터가 바뀌는 오류를 겪어서 spread(배열 복사)로 해결해보려 했지만 실패.
- 이러한 문제점들 수정 필요
