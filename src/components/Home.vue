<template>
  <div class="hello">
        <section class="hero is-medium">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              NasDravatar PoC <strong class="tag is-danger">Beta</strong>
            </h1>
            <h2 class="subtitle">
              星云链钱包通用头像
            </h2>
            <router-link :to="{name: 'My'}" class="button is-large is-black is-rounded"> 管理我的星云链钱包头像 </router-link>
          </div>
        </div>
      </section>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  computed: { },
  components: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .hello {
  text-align: center;
} */
.title {
  font-size: 4rem;
}
.subtitle{
  font-size: 2rem;
}
</style>
