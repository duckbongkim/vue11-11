<template>
<div>

<select class="form-select my-5" aria-label="Default select example" @change="diffChange()" v-model="selectedData">
  <option value="all">모두 보기</option>
  <option value="high">전일 상승</option>
  <option value="low">전일 하락</option>
</select>


    <table class="table bordered table-striped" >
        <thead>
            <tr>
                <th v-show="selectedData == 'all'"><input type="checkbox" name=""></th>
                <th v-for="col in headers" :key="col">{{col.title}}</th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="(item, i) in items" :key="i"> <!-- 체크한 값을 주기위해 밸류(:value="item.exchange)를 줌 , @change="selectedCheck()>> $emit 이 실행됨-->
                <th v-show="selectedData == 'all'"><input type="checkbox" name="" @change="selectedCheck()" :value="item.exchange" v-model="checkItems"></th>
                <th v-show="selectedData == 'high'"><input type="radio" name="" @change="selectedRadio()" :value="item.exchange" v-model="checkRadio"></th>
                <th v-for="col in headers" :key="col.key">{{item[col.key]}}</th>
            </tr>
        </tbody>


    </table>

</div>
</template>
<script>

export default{ 
    name:'',
    components:{},
    props:{
        headers : {
            type: Array,
            defult: function(){
                return []
            }
        },

        items : {
            type:Array,
            defult: function(){
                return []
            }
        },
        
    },

    data(){
        return{
            sampleData:'',
            selectedData:'all',
            checkItems:[],
            checkRadio:'',
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        diffChange(){
                this.$emit("diff-change", this.selectedData)
        },

        selectedCheck(){
            this.$emit("change-item",this.checkItems)
        },
        
        selectedRadio(){
            this.$emit('delete-item',this.checkRadio)
        }
    }
}
</script>