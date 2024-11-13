<template>
<div>
    <h1>count : {{num}}</h1>
    <button @click="addCount()">add</button>
    <button @click="addMinus()">minus</button>
</div>
</template>
<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            sampleData:'',
            num:0
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        addCount(){
            this.num +=1
        },
        addMinus(){
            this.num -=1
        }
    }
}
</script>