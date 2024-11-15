<template>
<div>
    <h1>parent component</h1>
    <br>
    <br>
    <h2>{{ recivedData }}</h2>
    <button type="button" class="btn btn-danger" @click="changeValue">childData</button>
    <div>
        <child 
        :str=parentName
        :num=parentNum
        :bool=false
        :array= parentArry
        @change-num="getData"
        @child-send ="getchildData"
        ref="child"
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
            recivedData:'',
            
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
        },
        
        getchildData(data){
            this.recivedData = data
        },

        changeValue() {
            this.$refs.child.childData = "해당 데이터는 변경되었습니다."
            this.$refs.child.childPrint()
        }
        

    }
}
</script>