<template>
  <div id="app">
    <Navbar />

    <div class="container">
      <router-view/>
    </div>
    <footer class="footer">
  <div class="container">
    <div class="content has-text-centered">
       <h2>NasDravatar</h2>
      <p>
        本服务由 <a href="https://incentive.nebulas.io/signup.html?invite=po4VY">
        Nebulas 星云链</a> 驱动
        <br>
        本网站需要 Chrome 搭配
        <a href="https://github.com/ChengOrangeJu/WebExtensionWallet">
        WebExtensionWallet</a> 插件才能正常使用
        </p>
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

</style>
