<template>
<div>
    <input type="text" name="" id="" v-bind:value="userId">
    <button @click="checkId()">Id_체크</button>
    <br/>
    <br/>
    <input type="search" v-model="text1" />
    <button :disabled="text1 === ''">조회</button>
    <p :style="imgStyle">{{ imgTitle }}</p>
    <img :src="myImg" alt="" style="width:300px; height: auto">
   
    
</div>
</template>
<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            userId:'choidongjin',
            myImg: "img_111.jpg",
            imgTitle:"문타리",
            imgStyle:{color:'red', 
                    fontSize:'100px'
            },

            text1:""
            
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        checkId(){
        console.log('choidongjin')
        }
    }
}
</script>