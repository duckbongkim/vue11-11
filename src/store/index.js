import { createStore } from 'vuex'
// 중앙저장소 // 모든 컴포넌트에서 사용할수있도록 data를 관리해주는 툴(라이브러리)
import {todo} from './todos'
import persistedstate from 'vuex-persistedstate'



export default createStore({
  modules: {
    todo:todo,
  },
  // 로컬 스토리지에 영구 저장됨(브라우저에 저장) // 쿠키 >> 클라이언트 측에서 일정시간동안 가지고 있는 데이터 
  // plugins:[persistedstate({paths:['todo.todos']})]
})