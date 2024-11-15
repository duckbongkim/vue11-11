<template>
<div>
    <button class="btn btn-danger" @click="clickSearch()">조회</button>
    <br />
    <br />

    <grid
    :headers ="parentData"
    :items ="tableList"
    @diff-change ="changeDiff"
     />
</div>
</template>
<script>
import gridVue from '@/components/flament/grid.vue';

export default{ 
    name:'',
    components:{"grid":gridVue},
    data(){
        return{
            sampleData:'',
            tableList : [],
            parentData : [
                {title:'국가명(화폐)', key:'exchange'},
                {title:'팔때', key:'sale'},
                {title:'살때', key:'buy'},
                {title:'전일', key:'diff'},
            ],
            allData:[],
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        clickSearch(){
            this.tableList =   [
            {  exchange : "미국 USD",
                sale : 1396,
                buy : 1420,
                diff : "전일 상승"
            },
            {  
                exchange : "유럽 EUR",
                sale : 1473,
                buy : 1502,
                diff : "전일 하락"
            },
            {  exchange : "일본 JPY",
                sale : 894,
                buy : 909,
                diff : "전일 하락"
            },
            {  exchange : "중국 CNY",
                sale : 192,
                buy : 202,
                diff : "전일 상승"
            },
            {  exchange : "SOXL",
                sale : 28.2500,
                buy : 28.400,
                diff : "전일 하락"
            },
            ]
            this.allData = this.tableList
        },

        changeDiff(data){
            if(data === 'high') {
                console.log(data)
                this.tableList = this.allData.filter((pdata) => {
                    return pdata.diff == '전일 상승'    
                })
            }
            else if (data ==='low') {
                console.log(data)
                this.tableList = this.allData.filter((pdata)=>{
                    return pdata.diff == '전일 하락'
                })
            }
            else {
                this.tableList = this.allData
            }
        }

    }
}
</script>