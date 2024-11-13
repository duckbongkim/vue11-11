<template>
<div>
    <div>
        <!-- <input type="text" name="" v-model="Name"> -->
        <input type="text" name="" v-model="myName">
    </div>
    <div>
        <p>{{Name}}</p>
        <p>{{myName}}</p>
    </div>
    <div>
        <select name="" v-model="selected">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
        </select>
    </div>
</div>
</template>
<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            Name:'',
            myName:'',
            selected:'',
            selectedHis:[]
        };
    },
    watch: {
        Name() {
            console.log(this.Name)
        },
        myName(newValue, oldValue) { //myName(newValue(후에 입력된거), oldValue(먼저 입력된거))
            console.log('oldValue:',oldValue)
            console.log('newValue:',newValue)
        },
        selected(newValue){
            this.selectedHis.push(newValue)
            console.log(this.selectedHis)
        }
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>