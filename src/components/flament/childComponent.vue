<template>
<div>
    <p>{{ childData }}</p>
    <p>{{str}}</p>
    <p>{{num}}</p>
    <p>{{bool}}</p>
    <p>{{array}}</p>
    <p>{{obj}}</p>
    <select name="" id="" @change="callParent()" v-model="selectedNum">
        <option :value="n" v-for="n in array" :key="n">{{n}}</option>
    </select>

</div>
</template>
<script>

export default{ 
    name:'',
    components:{},
    props:{
        str : {
            
            type: String,
            default : '',
        },

        num : {
            type:Number,
            default:0
        },

        bool : {
            type:Boolean,
            default:true
        },

        array : {
            type:Array,
            default:function() {
                return ['아빠','엄마','효도합시다'] // 해당 자료형의 특성을 사용하기 위해 function 으로 전달함
            }
        },

        obj : {
            type: Object,
            default:function() {
                return {
                }
            }
        },

    },
    data(){
        return{
            selectedNum:0,
            childData :'안녕하세요.자식 컴포넌트 데이터 입니다.',

        };
    },
    computed(){},
    setup(){},
    created(){},
    mounted(){
        this.$emit('child-send', this.childData) // mout 될때 상위 컴포넌트에게 전달됨
    },
    unmounted(){},
    methods:{

        callParent(){
            this.$emit('change-num', this.selectedNum) // 커스텀 이벤트 
            // $emit 상위 컴포넌트에게 전달 //  파라미터 값은 커스텀 이벤트 뒤에 와야 함
        },
        childPrint(){
            console.log(this.childData)
        }

    }
}
</script>