<template>
<div>
    <select name="" @change="startTrain()" id="" v-model="selectedCity">
    <!-- <select name="" id="" v-model="selectedCity"> -->
        <option value="">==도시선택==</option>
        <option :value="city.cityCode" v-for="city in cityList" :key="city.cityCode">{{city.cityName}}</option>
    </select>
     <select name="" id="">
        <option value="" v-for="train in trainList" :key="train.trainCode">{{train.time}}</option>
    <!-- <option value="" v-for="train in trainList.filter((train) => train.cityCode === seletedcity)" :key="train.trainCode">{{train.time}}</option> -->
    </select>
</div>
</template>
<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            cityList: [
                {cityCode:'01',cityName:'부천'},
                {cityCode:'02',cityName:'강원'},
                {cityCode:'03',cityName:'순천'},
            ],
            trainList: [
                {cityCode:'01',trainCode:'t01',time:'12:00 출발(부천)'},
                {cityCode:'01',trainCode:'t02',time:'11:00 출발(부천)'},
                {cityCode:'01',trainCode:'t03',time:'10:00 출발(부천)'},

                {cityCode:'02',trainCode:'t04',time:'20:00 출발(강원)'},
                {cityCode:'02',trainCode:'t05',time:'19:00 출발(강원)'},
                {cityCode:'02',trainCode:'t06',time:'08:00 출발(강원)'},

                {cityCode:'03',trainCode:'t07',time:'09:00 출발(순천)'},
                {cityCode:'03',trainCode:'t08',time:'06:00 출발(순천)'},
                {cityCode:'03',trainCode:'t09',time:'10:00 출발(순천)'},
            ],
            selectedCity: '',
            selectedList: [],
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{

        startTrain(){
           this.selectedList = this.trainList.filter(
                (train) => train.cityCode == this.selectedCity
            )
        }
    }
}
</script>