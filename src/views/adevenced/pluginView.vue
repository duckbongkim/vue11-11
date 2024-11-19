<template>
<div>
<button @click="changeLanguage('ko')">한국어</button>
<button @click="changeLanguage('en')">English</button>
<button @click="changeLanguage('es')">Spanish</button>

    <p> {{ $t('hello',{name:userName})}} </p>
    <p> {{ $t('welcome') }} </p>
    <p> {{ $t('language')}} </p>


</div>
</template>
<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            sampleData:'',
            userName:'동진'
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
    changeLanguage(lang){
        this.$i18n.locale = lang;
    }

    }
}
</script>