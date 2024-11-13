<template>
<div>
    <!-- <input type="search" name="" id="" v-model="searchText" @keyup="checkEnter($event)">  -->
    <!-- <input type="search" name="" id="" v-model="searchText" @keyup.enter="startSearch"> -->
    <input type="text" name="" id="" @keyup.enter="startSearch" v-model="searchText">
    <button @click="startSearch()">Search</button>
    <div><img src="img_111.jpg" alt="" style="width:300px; height:auto" @contextmenu.prevent=""></div>
    <button type="sumbit" @click.prevent="startSearch()">버튼</button>
    <br />
    <br />
    <h1>{{ searchText2 }}</h1>
    <input type="radio" name="" @click.prevent="preventClick()">
    
    
    <div class="div1" style='width: 200px; height: 200px;' @click="parenteClik">
        <div class="div2" style='background-color: red;' @click.stop="childClick"></div>
    </div>

</div>
</template>
<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            searchText:'',
            searchText2:'',
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        startSearch(){
            this.searchText2 = this.searchText
        },
        checkEnter(event){
            if (event.keyCode === 13){
                this.startSearch()
            }
        },
        preventClick(){
            alert('품절입니다.')
        },

        parenteClik(){
            console.log('부모태그의 이벤트');
            
        },
        childClick(){
            console.log('자식태그의 이벤트')
        }
    }
}
</script>

<style scoped>
.div1 {
    border: 1px solid blue; display: inline-block;
}
.div2 {
    width: 50px; height: 50px; margin: 20px;
}
</style>