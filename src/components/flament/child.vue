<template>
<div>
    <deepChildVue  />
</div>
</template>
<script>
import deepChildVue from './deepChild';

export default{ 
    name:'',
    components:{deepChildVue,},
    data(){
        return{
            sampleData:''
        };
    },
    props:{
        childData:String
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>