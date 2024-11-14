<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/CbRdSc">Binding</router-link> |
    <router-link to="/key">Event</router-link> |
    <router-link to="/rendershow">Extra</router-link> |
    <router-link to="/Watch">Watch</router-link> |
    <router-link to="/Change2">change</router-link> |
    <router-link to="/life">lifecycle</router-link> |
    <router-link to="/PageView">reuse</router-link> |
    <router-link to="/parent">parent</router-link> |
    <router-link to="/parent2">parent2</router-link> |
   
  </nav>
  <router-view/><!-- view에서 만든 vue 파일을 라우터에서 경로지정된 컴포넌트만 갈아줌-->
</template>

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
