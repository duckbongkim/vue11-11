<template>
<div>
    <childVue />
</div>
</template>

<script>
import deepChildVue from '@/components/flament/deepChild';
import childVue from '@/components/flament/child';


export default{ 
    name:'',
    components:{childVue, deepChildVue},
    provide() {
        return {
            deepChildData : "새로운 문자",
            deepChildData2: '진짜 새로운 문자'
        } 
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