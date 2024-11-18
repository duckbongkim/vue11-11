<template>
<div>
    <h1>{{Title}}</h1>
    <p>{{ number }}</p>
    <childComponentVue
     />
</div>
</template>
<script>
import childComponentVue from './childComponent.vue';

export default{ 
    name:'',
    components:{ childComponentVue },
    props: {
        Title : {
           type: String,
           default: "페이지 제목 입력안됨",
           required: true, // 유효성 검사
        },
        number: Number,
        
    },

    data(){
        return{
            sampleData:''
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>

<style scoped>
h1 {
    font-size: 50px;
    color: red;
}
</style>