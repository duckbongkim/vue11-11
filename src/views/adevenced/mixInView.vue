<template>
<div>
    <h1>MixIn</h1>
</div>
</template>
<script>
// import formater from '@/mixIns/formater'
// import Axios from '@/mixIns/axios'


export default{ 
    name:'',
    components:{},
    // mixins: [formater],
    data(){
        return{
            sampleData:''
        };
    },
    setup(){},
    created(){
         console.log(Date('20241119'))

         console.log(this.$convertDateFormat('20241119','YYYY년MM월DD일'))

        // console.log('뷰의 created')
    },
    mounted(){
        // console.log('뷰의 mounted')
    },
    unmounted(){},
    methods:{

        convertDateFormat(date, format){
            let year = ''
            let month = ''
            let day = ''
            
            if (typeof date === 'string' && date.length === 8){
                year = date.substring(2,4)
                month = date.substring(4,6)
                day = date.substring(6,8)
            }

            else if (typeof date === 'obj') {
                year = date.getFullYear()
                month = (date.getMonth()+1).toString().padStart(2,0)
                day = (date.getDay()+1).toString().padStart(2,0)
            }
            return format.replace('YYYY',year).replace('MM',month).replace('DD',day)
        }

    }
}
</script>