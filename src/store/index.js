import { createStore } from 'vuex'
// 중앙저장소 // 모든 컴포넌트에서 사용할수있도록 data를 관리해주는 툴(라이브러리)
import {todo} from './todos'


export default createStore({
  modules: {
    todo:todo
  }
})