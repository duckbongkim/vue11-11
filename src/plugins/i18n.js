import {createI18n} from "vue-i18n";

import en from '@/i18n/en.json'
import ko from '@/i18n/ko.json'
import es from '@/i18n/es.json'


const i18n = createI18n({
 locale:'en', // 기본 언어
 fallvackLocale:'ko', //대체언어가 없을대 나와야하는  언어
 messages:{
    en,
    ko,
    es,
 }   
})

export default i18n