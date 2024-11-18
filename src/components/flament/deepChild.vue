<template>
<div>
    <h1>{{ deepChildData }}</h1>
    <h1>{{ deepChildData2 }}</h1>
</div>
</template>

<script>

export default{ 
    name:'',
    components:{},
    inject: ['deepChildData','deepChildData2'],
    props: {
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