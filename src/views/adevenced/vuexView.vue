<template>
<div>
    <div>{{ todos }}</div>
    
    <p>{{todosCount}}</p>
    <p>끝낸 할일 : {{donetodosCount}}</p>
    <p>못 끝낸 할일 : {{ notDoneTodoscount }}</p>
    <p>{{ isLoginCheck }}</p>
    <button @click="addItem()">actions</button>
    <button @click="removeItem(4)">clickRemoveItem</button>
    <button @click="doneYn({id:1, done:false})">doneYn</button>
    <button @click="removeAll">스토리지 삭제</button>
</div>
</template>
<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            sampleData:''
        };
    },
    // store 에 정의된 함수나 데이터는  computed에 작성 // 변환된 data를 바로 받아올수있도록
    computed:{
        
         todos(){
             return this.$store.state.todo.todos  
         },
         todosCount(){
            return this.$store.getters['todo/todosCount']
         },
         donetodosCount(){
            return this.$store.getters['todo/doneTodosCount']
         },
        notDoneTodoscount(){
            return this.$store.getters['todo/notDoneTodoscount']
        },
        isLoginCheck(){
            return this.$store.getters['todo/isLogin']
        }
    },
    setup(){},
    created(){
        
    },
    mounted(){
        this.$store.commit('todo/setUserInfo')
    },
    unmounted(){},
    methods:{
        addItem(){
             this.$store.commit('todo/add',{id:4, title:'할일 4', done:true})
            // this.$store.commit('todo/add',{id:5, title:'할일 5', done:false})
            // this.$sotre.dispatch('add',{id:4, title:'할일 4', done:true})
        },

        
        removeItem(id){
            this.$store.commit('todo/remove', id)
        },

        doneYn(doneState){
            this.$store.commit('todo/doneYn', doneState)
        },

        removeAll(){
            this.$store.commit('todo/removeAll')
        },
    }
}
</script>