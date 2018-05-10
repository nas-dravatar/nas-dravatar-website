<template>
  <nav class="navbar is-transparent">
  <div class="navbar-brand">
    <router-link class="navbar-item" to="/">
      <img src="https://i.loli.net/2018/05/10/5af31ce5f31d3.png" alt="NAS Dravatar">
    </router-link>
    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start">
      <div class="navbar-item" v-for="menu in menuItems" :key="menu.name">
          <router-link class="navbar-item" :to="menu.to" v-if="!menu.isOutside"> {{menu.name}} </router-link>
          <a class="navbar-item" :href="menu.to" v-if="menu.isOutside"> {{menu.name}} </a>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <!-- <a class="navbar-item" href="/documentation/overview/start/">
          My Dravatar
        </a> -->
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      menuItems: [{
        name: '首页',
        to: '/'
      },
      {
        name: '上传头像',
        to: '/my'
      },
      {
        name: '文档',
        to: 'https://github.com/nas-dravatar/wiki',
        isOutside: true
      }
      ]
    }
  }
}
</script>

<style scoped>
.navbar-item img {
    max-height: 3.5rem;
}
</style>
