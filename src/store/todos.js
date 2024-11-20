export const todo = {

namespaced:true,

    state() {
        return {
          todos:[
            {id:1, title:'할일 1', done: true},
            {id:2, title:'할일 2', done: false},
            {id:3, title:'할일 3', done: false},
          ]
        }
      },
      // Computed >> state에 저장된 데이터의 cumputed를 정의하는 공간
      getters: {
        todosCount(state){
          return state.todos.length
        },
        doneTodosCount(state){
          return state.todos.filter((todo)=>todo.done).length
        },
        notDoneTodoscount(state){
          return state.todos.filter((todo)=>!todo.done).length
        }
      },
      // state를 변경할 수 있는 함수가 정의되는 공간 (직접적으로 변경을 줌)
      // mutainons 안에 있는 함수만 data 변경이 가능
      mutations: {
        add(state, item){
          state.todos.push(item)
        },
        remove(state, id) {
          state.todos = state.todos.filter((todo) => todo.id !== id)
        },
        doneYn(state, doneState){
          state.todos.filter((todo) => todo.id === doneState.id)[0].done = doneState.done
        }
      },
      // commit (mutations 에 정의된 함수를 커밋을 통해 실행하고 싶을때)
      // 비동기 처리가 됨 // 서버랑 통신되는 상황이 생기면 actions 에 넣고 씀
      // $store.dispatch('add')
      // 서버랑 비동기적 통신을 하면서 mutations 의 함수를 사용함
      actions: {
        add({commit}, item){
         commit('add',item)  
        }
      },
    

}
 
 