export default{ 
    setup(){},
    created(){
        console.log('믹스인의 created')
    },
    mounted(){
        console.log('믹스인 의 mounted')
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

        

    }
}
