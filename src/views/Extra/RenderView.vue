<template>
<div>

    <!-- <button>조회</button>&nbsp; 
    <button v-if="userRole==='A' || userRole==='S'">판매물품등록</button>&nbsp;
    <button v-if="userRole==='A'">삭제</button>&nbsp; 
     -->


    <div v-if="userRole==='C'">
        <button>조회</button>&nbsp; <!-- 모든 사용자에게 보임 -->
    </div>

    <div v-else-if="userRole==='S'">
        <button>판매물품등록</button>&nbsp; <!-- 판매자 관리자 -->
        <button>조회</button>&nbsp; <!-- 모든 사용자에게 보임 -->
    </div>
        
    <div v-else>
        <button>삭제</button>&nbsp; <!-- 관리자 -->
        <button>판매물품등록</button>&nbsp; <!-- 판매자 관리자 -->
        <button>조회</button>&nbsp; <!-- 모든 사용자에게 보임 -->
    </div>

    

    
        
     
    
    
    <br>
    <br>
    <!-- <button v-if="userRole==='A'">삭제</button>&nbsp; 
    <button v-else-if="userRole==='S'">판매물품등록</button>&nbsp; 
    <button v-else>조회</button>&nbsp;  -->
    
    <select name="" v-model="userRole">
        <option value="A">관리자</option>
        <option value="S">판매자</option>
        <option value="C">고객</option>
    </select>

</div>
</template>

<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            userRole:'C',
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>