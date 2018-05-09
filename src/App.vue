<template>
  <div id="app">
    <Navbar />
    <section class="hero">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              NebAvatar PoC
            </h1>
            <h2 class="subtitle">
              星云链钱包通用头像
            </h2>
          </div>
        </div>
      </section>
    <div class="container">
      <router-view/>
    </div>
    <footer class="footer">
  <div class="container">
    <div class="content has-text-centered">
       <h2>NebAvatar</h2>
      <p>
        本服务由 <a href="https://incentive.nebulas.io/signup.html?invite=po4VY">Nebulas 星云链</a> 驱动 </p>
    </div>
  </div>
</footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  components: {
    Navbar
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
.title {
  font-size: 4rem;
}
.subtitle{
  font-size: 2rem;
}
</style>
