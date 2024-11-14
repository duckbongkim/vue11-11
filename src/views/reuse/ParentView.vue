<template>
<div>
    <h1>parent component</h1>
    <div>
        <child 
        :str=parentName
        :num=parentNum
        :bool=false
        :array= parentArry
        @change-num="getData" 
         /> 
    </div>
</div>
</template>
<script>
import childComponentVue from '@/components/flament/childComponent.vue';



export default{ 
    name:'',
    components:{'child':childComponentVue},
    data(){
        return{
            parentNum:10,
            parentName:'아버지 어머니',
            parentArry: [1,2,3],
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{

        getData(data){
            console.log("getData 함수 호출");
            console.log(data);
        }

    }
}
</script>