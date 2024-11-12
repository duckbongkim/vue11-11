<template>
<div>
    <div class="{text-red: hasError, active: isActive}">클래스 바인딩</div>
    <div :class="class2">클래스 바인딩</div>
    <div :class="class3">클래스 바인딩</div>
</div>
</template>
<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            isActive: false,
            hasError: false,
            class2: ['active','text-red'],
            class3: ['text-red']
            
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

    .text-red {
        color: red;
    }
    .active {
        background-color: aquamarine;
        font-weight: bold;
        font-size: 30px;
    }

</style>