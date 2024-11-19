import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000'  // 
axios.defaults.headers['Content-Type'] = 'application/json;charset=uth-8'
axios.defaults.headers['Access-Control-Allow-Origin']='*'

export default {
    methods: {
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
        },

    }
}
