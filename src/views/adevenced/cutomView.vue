<template>
<div>

    <div>
        <label for="email" class="form-label">이메일 주소 : &emsp; </label>
        <input type="emial" id="email" class="form-label" v-focus>
    </div>

    <div>
        <label for="pw" class="form-label">비밀번호 : &emsp;</label>
        <input type="password" class="form-label" id="pw">
    </div>
    <label for="" class="">전화번호</label>
    <div>
        <input type="text" v-number /> -<input type="text" v-number /> - <input type="text" v-number />
    </div>

    <div>
        <button class="btn btn-primary">로그인</button>
    </div>

</div>
</template>
<script>

export default{ 
    name:'',
    components:{},
    directives:{
        focus : {
            mounted(el, binding){
                el.focus()
            },
            
        },

        number : {
            mounted(el) {
                el.addEventListener('input',(event)=> {
                    event.target.value = event.target.value.replace(/\D/g,'')
                })
            }
        }
    },
    data(){
        return{
            sampleData:''
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>