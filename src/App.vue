<template>
<div>

  <headLayoutVue />

  <div class="container">
    <router-view/><!-- view에서 만든 vue 파일을 라우터에서 경로지정된 컴포넌트만 갈아줌-->
  </div>
  <footerLayout />

</div>
</template>

<script>
import headLayoutVue from '@/components/layout/headLayout.vue'
import footerLayout from '@/components/layout/footerLayout.vue'


export default {
  
  components:{headLayoutVue,footerLayout}

}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
