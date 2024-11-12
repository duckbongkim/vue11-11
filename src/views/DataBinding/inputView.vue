<template>
<div>
    <input type="text" v-model="userId">
    <button @click="clickEvent()">클릭</button>
    <button @click="changeData()">변경</button>
    <br/>
    <br/>
    <button @click="plusNum()">더하기</button>
    <button @click="minusNum()">빼기</button>
    <button @click="mulNum()">곱하기</button>
    <button @click="divNum()">나누기</button>
    <br/>
    <input type="text" v-model.number="num1"> <span>{{sign}}</span>
    <input type="text" v-model.number="num2"> =
    <span>{{Num3}}</span>
    <br>
    <br>
    <h1>{{checkValue}}</h1>
    <div>
        <input type="checkbox" name="" id="plu" value="plus" v-model="checkValue">
        <label for="plu">더하기</label>
        <input type="checkbox" name="" id="min" value="minus" v-model="checkValue">
        <label for="min">빼기</label>
        <input type="checkbox" name="" id="pro" value="product" v-model="checkValue">
        <label for="pro">곱하기</label>
        <input type="checkbox" name="" id="div" value="divide" v-model="checkValue">
        <label for="div">나누기</label>
    </div>

</div>
</template>
<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            userId:'choidong',
            num1:0,
            num2:0,
            Num3:0,
            sign:'',
            checkValue:[]
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        clickEvent(){
            console.log(this.userId)
        },
        changeData(){
            this.userId = 'dong jin'
        },
        plusNum(){
            this.sign = '+',
           this.Num3 =  this.num1 + this.num2
        },
        minusNum(){
            this.sign = '-',
           this.Num3 =  this.num1 - this.num2 
        },
        mulNum(){
            this.sign = '*',
           this.Num3 =  this.num1 * this.num2
        },
        divNum(){
            this.sign = '/',
          this.Num3 =  this.num1 / this.num2
        },
        
        calculator(operate){
            this.operator = operate;
            switch (operate) {
                case '+':
                    this.result = this.num1 + this.num2;
                    break;
                case '-':
                    this.result = this.num1 - this.num2;
                    break;
                case '*':
                    this.result = this.num1 * this.num2;
                    break;
                case '/':
                    this.result = this.num1 / this.num2;
                    break;                                        
                
            }
        }
    }
}
</script>