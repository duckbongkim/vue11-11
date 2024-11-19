import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000'  // 
axios.defaults.headers['Content-Type'] = 'application/json;charset=uth-8'
axios.defaults.headers['Access-Control-Allow-Origin']='*'

export default{ 
    setup(){},
    created(){
        // console.log('믹스인의 created')
    },
    mounted(){
        // console.log('믹스인 의 mounted')
    },
    unmounted(){},
    methods:{

        $convertDateFormat(date, format){
            let year = ''
            let month = ''
            let day = ''
            
            if (typeof date === 'string' && date.length === 8){
                year = date.substring(0,4)
                month = date.substring(4,6)
                day = date.substring(6,8)
            }

            else if (typeof date === 'obj') {
                year = date.getFullYear()
                month = (date.getMonth()+1).toString().padStart(2,0)
                day = (date.getDay()+1).toString().padStart(2,0)
            }
            return format.replace('YYYY',year).replace('MM',month).replace('DD',day)
        },

        
        
        async $get(url){ // axios >> 리퀘스트를 보내주고 리스폰스를 받아주는 역할(모듈)
            return axios.get(url).catch((e) => { 
                console.log(e)
            }).data //data 만 받아오겠다
        },
        async $post(url, data){
            return await axios.post(url, data).catch((e)=>{
                console.log(e)
            })
        },
        async $put(url, data){
            return await axios.post(url, data).catch((e)=>{
                console.log(e)
            })
        },
        async $delete(url){
            return await axios.delete(url).catch((e)=>{
                console.log(e)
            })

        
        }
    }
}
