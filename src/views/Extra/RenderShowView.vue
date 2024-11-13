<template>
<div>
    <p>당신이 가장좋아 하는 선수는 누구입니까?</p>
    <input type="radio" name="" id="one" value="kim" v-model="selectedPlayer">
    <label for="">1. 김민재</label>&nbsp;

    <input type="radio" name="" id="two" value="son" v-model="selectedPlayer">
    <label for="">2. 손흥민</label>&nbsp;

    <input type="radio" name="" id="three" value="steven" v-model="selectedPlayer">
    <label for="">3. 스티븐 제라드</label>&nbsp;

    <input type="radio" name="" id="four" value="jordan" v-model="selectedPlayer">
    <label for="">4. 조던 헨더슨</label>&nbsp;

    <input type="radio" name="" id="five" value="etc" v-model="selectedPlayer">
    <label for="">5. 기타</label>&nbsp;
    <!-- <input type="text" v-if="selectedPlayer==='etc'"> -->
    <input type="text" v-show="selectedPlayer==='etc'">
</div>
</template>
<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            selectedPlayer:'',
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>