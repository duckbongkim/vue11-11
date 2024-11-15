<template>
<div>
    <button class="btn btn-primary" @click="doSearch()">조회</button>

    <!-- <table class="table bordered table-striped">

        <thead class="table table-warning">
            <tr>
                <th>제품번호</th>
                <th>제품명</th>
                <th>제조사</th>
                <th>가격</th>
                
            </tr>
        </thead>

        <tbody>
            <tr  :key='air.Id' v-for='air in humitdifier'  class="table table-dark">
                <th>{{air.Id}}</th>
                <th>{{air.Name}}</th>
                <th>{{air.Comp}}</th>
                <th>{{air.Price}}</th>
                
            </tr>
        </tbody>
    </table> -->
  
  <gird
  :headers = headers
  :items = humitdifier
   />
    

</div>
</template>
<script>
import gridVue from '@/components/flament/grid.vue';

export default{ 
    name:'',
    components:{'gird':gridVue},
    data(){
        return{
            humitdifier : [],
            headers:[
                {title:"제품번호", key:"Id"},
                {title:"제품명", key:"Name"},
                {title:"제조사", key:"Comp"},
                {title:"가격", key:"Price"},
            ]
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{

        doSearch(){

            this.humitdifier = [
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
            ]

        }
    }
}
</script>