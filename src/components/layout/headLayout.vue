<template>
  <!-- <nav>
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
    <router-link to="/table">table</router-link> |
    <router-link to="/table2">table2</router-link> |
    <router-link to="/table3">table3</router-link> |
    <router-link to="/slot">slot</router-link> |
    <router-link to="/rute">Provide inject</router-link> |
    <router-link to="/custom">custom</router-link> |
  </nav> -->


<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" @click="goToMenu('/')">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" @click="goToMenu('/table2')">Table</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="goToMenu('/slot')">Slot</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="goToMenu('/rute')">Provide</a>
        </li>
        <li>
            <a class="nav-link" @click="goToMenu('/custom')">Custom</a>
        </li>
        <li>
            <router-link to="/parent" class="nav-link">parent</router-link>
        </li>
        
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Reuse
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" @click="goToMenu('/table2')">Grid</a></li>
            <li><a class="dropdown-item" @click="goToMenu('/rute')">Rute</a></li>
            <li><a class="dropdown-item" @click="goToMenu('/PageView')">PageView</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Adevenced
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" @click="goToMenu('/mixin')">mixin</a></li>
            <li><a class="dropdown-item" @click="goToMenu('/rute')">Rute</a></li>
            <li><a class="dropdown-item" @click="goToMenu('/PageView')">PageView</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            plugins
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" @click="goToMenu('/mixin')">mixin</a></li>
            <li><a class="dropdown-item" @click="goToMenu('/plugin')">plugin</a></li>
            <li><a class="dropdown-item" @click="goToMenu('/PageView')">PageView</a></li>
          </ul>
        </li>

      </ul>
    </div>
  </div>
</nav>
</template>

<script>

export default {
    methods: {
        goToMenu(path){
            this.$router.push({path : path}) // this.$router.push >> vue에서 사용하는 해당 라우터로 이동해라 // 
        }
    }
}

</script>

<style scoped>

a {
   cursor: pointer; 
}

</style>