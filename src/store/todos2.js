export const  todos2 = {
  namespaced:true,
// 중앙저장소 // 모든 컴포넌트에서 사용할수있도록 data를 관리해주는 툴(라이브러리)



  // 저장소 >> 데이터를 저장하는 공간 // return{} 딕셔너리 형태로 들어감 >> 키값만 가져와서 사용함
  state() {
    return {
      todos2:[
        {id:2, title:'안녕하세요', done:true}
      ]
    }
  },
  // Computed >> state에 저장된 데이터의 cumputed를 정의하는 공간
  getters: {
 
  },
  // state를 변경할 수 있는 함수가 정의되는 공간 (직접적으로 변경을 줌)
  // mutainons 안에 있는 함수만 data 변경이 가능
  mutations: {

    },
  
  // commit (mutations 에 정의된 함수를 커밋을 통해 실행하고 싶을때)
  // 비동기 처리가 됨 // 서버랑 통신되는 상황이 생기면 actions 에 넣고 씀
  // $store.dispatch('add')
  // 서버랑 비동기적 통신을 하면서 mutations 의 함수를 사용함
  actions: {
 
  },
  // 복잡한 state와 method(getters, mutations, actions)등을 분리하여 사용할 수 있도록 만들어줌
  modules: {
  }
}
