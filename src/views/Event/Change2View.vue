<template>
<div>
</div>
</template>
<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            countryList:[
                {countryId:'1', countryName:'한국'},
                {countryId:'2', countryName:'미국'},
                {countryId:'3', countryName:'일본'},
            ],

            cityList:[
                {countryId:'1', cityId:"c1",cityName:'부산'},
                {countryId:'1', cityId:"c2",cityName:'인천'},
                {countryId:'1', cityId:"c3",cityName:'안산'},

                {countryId:'2', cityId:"c4",cityName:'뉴욕'},
                {countryId:'2', cityId:"c5",cityName:'워싱턴'},
                {countryId:'2', cityId:"c6",cityName:'텍사스'},

                {countryId:'3', cityId:"c7",cityName:'오사카'},
                {countryId:'3', cityId:"c8",cityName:'도쿄'},
                {countryId:'3', cityId:"c9",cityName:'나고야'},
            ],

            trainList:[
                {cityId:'c1',trainId:'t1',time:'11:00(부산)'},
                {cityId:'c1',trainId:'t2',time:'12:00(부산)'},
                {cityId:'c1',trainId:'t3',time:'13:00(부산)'},

                {cityId:'c2',trainId:'t4',time:'11:00(인천)'},
                {cityId:'c2',trainId:'t5',time:'12:00(인천)'},
                {cityId:'c2',trainId:'t6',time:'13:00(인천)'},

                {cityId:'c3',trainId:'t7',time:'11:00(안산)'},
                {cityId:'c3',trainId:'t8',time:'12:00(안산)'},
                {cityId:'c3',trainId:'t9',time:'13:00(안산)'},

                {cityId:'c4',trainId:'t9',time:'11:00(뉴욕)'},
                {cityId:'c4',trainId:'t10',time:'12:00(뉴욕)'},
                {cityId:'c4',trainId:'t11',time:'13:00(뉴욕)'},

                {cityId:'c5',trainId:'t12',time:'11:00(워싱턴)'},
                {cityId:'c5',trainId:'t13',time:'12:00(워싱턴)'},
                {cityId:'c5',trainId:'t14',time:'13:00(워싱턴)'},

                {cityId:'c6',trainId:'t15',time:'11:00(텍사스)'},
                {cityId:'c6',trainId:'t16',time:'12:00(텍사스)'},
                {cityId:'c6',trainId:'t17',time:'13:00(텍사스)'},
            ]
            
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>