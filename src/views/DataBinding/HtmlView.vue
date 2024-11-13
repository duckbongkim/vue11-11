<template>
<div>
    <div v-html="htmlString"></div>
    <div v-html="htmlString" :style="style1"></div>
    <p v-html="htmlString"></p>
    <button @click="style1.color='blue'">색상바꾸기</button>
    <button @click="style1.color='green'">색상바꾸기</button>
    <button @click="colors()">콘솔로그 보기</button>
</div>
</template>
<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            htmlString:'<h1>choidongjin</h1> <p>Hello Wellcome Mysite</p>',
            style1: {
                color:'yellow',
                fontSize:'50px'
            },
          
        };
    },
    setup(){},
    created(){
    },
    mounted(){},
    unmounted(){},
    methods:{
        colors(){
            console.log(this.style1.color)
        }
    }
}
</script>