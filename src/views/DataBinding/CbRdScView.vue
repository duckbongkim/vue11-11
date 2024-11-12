<template>
<div>
    <div>
        <h1>그냥 사람이름</h1>
    </div>
    <p>{{HumanName}}</p>
    <input type="checkbox" name="" id="GO" value="GO" v-model="HumanName">
    <label for="GO">고순희</label>
    <input type="checkbox" name="" id="" value="KIM" v-model="HumanName">
    <label for="KIM">김술자</label>
    <input type="checkbox" name="" id="" value="CHUN" v-model="HumanName">
    <label for="CHUN">고덕춘</label>
    <br/>
    <br/>

    <div>
        <h1>아이스크림</h1>
        <p>{{Icecream}}</p>
    </div>
    
    <select name="" id="" v-model="Icecream">
        <option value="메로나">메로나</option>
        <option value="돼지바">돼지바</option>
        <option value="바밤바">바밤바</option>
        <option value="엔초">엔초</option>
        <option value="">없음</option>
    </select>
    <br/>
    <br/>
    <div>
        <h1>자동차</h1>
        <p>{{Car}}</p>
    </div>
    <div>
    <input type="radio" name="" id="GN" value="GV80" v-model="Car">
    <label for="GV80">GV80</label>
    </div>
    <div>
    <input type="radio" name="" id="RB" value="우르스" v-model="Car">
    <label for="우르스">우르스</label>
    </div>
    <div>
    <input type="radio" name="" id="PR" value="푸로산게" v-model="Car">
    <label for="푸로산게">푸로산게</label>
    </div>
    <div>
    <input type="radio" name="" id="BT" value="벤테이가" v-model="Car">
    <label for="벤테이가">벤테이가</label>
    </div>
    <div>
    <input type="radio" name="" id="" value="" v-model="Car">
    <label for="">없음</label>
    </div>
</div>
</template>
<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            HumanName:['GO'],
            Icecream:'바밤바',
            Car:'푸로산게',
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>