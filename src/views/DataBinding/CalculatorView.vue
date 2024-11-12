<template>
<div>
    <div>
        <div>
            <button @click="calculator('+')">Plus(+)</button>&emsp;
            <button @click="calculator('-')">Minus(-)</button>&emsp;
            <button @click="calculator('*')">Product(*)</button>&emsp;
            <button @click="calculator('/')">Divide(/)</button>&emsp;
        </div>
        <br />
        <br />
        <input type="text" v-model.number="num1">
        <span>&emsp; {{ operator }} &emsp;</span>
        <input type="text" v-model.number="num2">
        <span>&emsp; = {{ result }}</span>
    </div>
    <div>
        <div>
            <h1>{{checkValue}}</h1>
        </div>

        <input type="checkbox" name="" id="plu" value='plus' v-model="checkValue" />
        <label for="plu">Plus(+)</label>
        <input type="checkbox" name="" id="min" value='minus' v-model="checkValue" />
        <label for="min">Minus(-)</label>
        <input type="checkbox" name="" id="pro" value='product' v-model="checkValue" />
        <label for="pro">Product(*)</label>
        <input type="checkbox" name="" id="div" value='divide' v-model="checkValue" />
        <label for="div">Divide(/)</label>
    </div>
    <div>
    <p v-for="(check,i) in checkValue" :key="i">
        {{ calculator2(check) }}
    </p>
    </div>
</div>
</template>

<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            operator:'+',
            num1 : 0,
            num2 : 0,
            result : 0,
            checkValue: []
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
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
        },        
        calculator2(operate){
            switch (operate) {
                case 'plus':
                    return this.num1 + this.num2;

                case 'minus':
                    return this.num1 - this.num2;

                case 'product':
                    return this.num1 * this.num2;

                case 'divide':
                    return this.num1 / this.num2;                            
            }
        }
    }
}
</script>