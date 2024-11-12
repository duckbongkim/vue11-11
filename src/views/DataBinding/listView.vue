<template>
<div>
    <table>
        <thead>
            <tr>
                <th>제품번호</th>
                <th>제품명</th>
                <th>제조사</th>
                <th>가격</th>
                <th>수량</th>
                <th>합계</th>
            </tr>
        </thead>

        <tbody>
            <tr  :key='air.Id' v-for='air in AirCon'>
                <th>{{air.Id}}</th>
                <th>{{air.Name}}</th>
                <th>{{air.Comp}}</th>
                <th>{{air.Price}}</th>
                <th><input type="text" v-model="air.qty"></th>
                <th>￦{{ air.Price * air.qty }}원</th>
            </tr>
        </tbody>
    </table>
    <br/>
    <br/>
    <table>
        <thead>
            <tr>
                <th>번호</th>
                <th>이름</th>
                <th>키</th>
                <th>몸무게</th>
                <th>BMI</th>
            </tr>
        </thead>

        <tbody>
            <tr v-for='mana in Man' :key='mana.num'>
                <th>{{mana.num}}</th>
                <th>{{mana.Name2}}</th>
                <th><input type="text" v-model.number="mana.height"></th>
                <th><input type="text" v-model.number="mana.weight"></th>
                <th>{{ mana.weight / ((mana.height**2)/10000) }}</th>
            </tr>
        </tbody>
    </table>
</div>
</template>
<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            AirCon:[
                {
                    Id:'1',
                    Name:'에어메이드',
                    Comp:'에어비엔비',
                    Price:25000,
                    qty:0,
                    
                },

                {
                    Id:'2',
                    Name:'삼성 가습기',
                    Comp:'삼성',
                    Price:328000,
                    qty:0,
                    
                },

                {
                    Id:'3',
                    Name:'엘지 가습기',
                    Comp:'엘지',
                    Price:197000,
                    qty:0,
                    
                },

                {
                    Id:'4',
                    Name:'캐리어 가습기',
                    Comp:'캐리어',
                    Price:198200,
                    qty:0,
                    
                },

                {
                    Id:'5',
                    Name:'코웨이 가습기',
                    Comp:'코웨이',
                    Price:200000,
                    qty:0,
                    
                },
            ],

            Man:[
                {
                    num:'1',
                    Name2:'최동진',
                    height:0,
                    weight:0,
                    Bmi:0
                },
                {
                    num:'2',
                    Name2:'김장두',
                    height:0,
                    weight:0,
                    Bmi:0
                },
                {
                    num:'3',
                    Name2:'김덕봉',
                    height:0,
                    weight:0,
                    Bmi:0
                },
                {
                    num:'4',
                    Name2:'홍길동',
                    height:0,
                    weight:0,
                    Bmi:0
                },

            ],
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{

        calBMI(people){
            const height = (people.height/100)**2
            return people.weight / height
        }
    }
}
</script>