<template>
  <nav class="navbar is-transparent">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://i.loli.net/2018/05/09/5af2c04dd1530.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
    </a>
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
        <a class="navbar-item" href="/documentation/overview/start/">
          My Dravatar
        </a>
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
      menuItems: [
        {
          name: '首页',
          to: '/'
        },
        {
          name: '文档',
          to: 'https://github.com/neb-dravatar',
          isOutside: true
        }
      ]
    }
  }
}
</script>
