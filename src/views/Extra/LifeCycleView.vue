<template>
<div>
    <label for=""> 가장 선호하는 프로그래밍 언어는? </label>
    <select name="" id="">
        <option value="" v-for="lan in language" :key="lan.code">
            {{ lan.title }}
        </option>
    </select>
</div>
</template>
<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            language:'',
        };
    },
    //컴포지션 API 호출**
    setup(){},
    
    // 옵션api가 초기화 되기 전, data(), computed() 같은 옵션api의 초기회 직전
    beforeCreate(){},
    
    // data(), computed(), watch(), methods()를 모두 초기화 해서 사용준비가 끝난 상태
    created(){},
    
    //DOM 노드가 생성되기 전의 상태**
    beforeMount(){},
    
    //실제 DOM 랜더링이 모두 끝난 상태
    mounted(){
         this.getlanguage(); 
    },
    
    // 리랜더링(DATA의 변경..) 직전에 수행되는 단계**
    beforeUpdate(){},
    
    // 리랜더링 후에 호출
    updated(){},
    
    // 현재 컴포넌트에서 빠져나오기 직전
    beforeUnmount(){},
    
    // 현재 컴포넌트 빠져나온 직후 **
    unmounted(){},

    methods:{

        getlanguage(){

            // 서버에 데어터가 존재
            // 서버에서 데이터를 가져와야함.
            this.language= [{code:'01',title:'자바스크립트'}]
        }

    }
}
//옵션 API
</script>