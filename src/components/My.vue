<template>
<div id="upload">
    <section class="hero">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              我的钱包
            </h1>
            <h2 class="subtitle">
              你可以更新、观赏你的钱包头像
            </h2>
          </div>
        </div>
      </section>
    <div class="columns">
  <div class="column">
      <croppa v-model="myCroppa"
        :width="256"
        :height="256"
        :quality="1"
        placeholder="拖动或点击选择照片"
        :placeholder-font-size="0"
        :disabled="false"
        :prevent-white-space="false"
        :show-remove-button="true"></croppa>
        <button @click="getBase64URI" class="button is-black"> 上传我的头像 </button>
  </div>
    <div class="column">
        <img :src="base64" width="128"/>
    </div>
  </div>
</div>
</template>

<script>
import { upload, get } from '@/api'
// import request from 'superagent'
// import { compress } from '@/lib/lzma'
export default {
  name: 'HelloWorld',
  computed: { },
  data () {
    return {
      myCroppa: {},
      base64: ''
    }
  },
  async created () {
    this.base64 = await get('n1MmUacQExJwkD1xHggwaEvTpKgUeSmV4Af')
  },
  methods: {
    async getBase64URI () {
      const data = this.myCroppa.generateDataUrl('image/jpeg', 0.5)
      const blob = await this.myCroppa.promisedBlob('image/jpeg', 0.5)
      var file = new File([blob], 'dravatar')
      console.log(file)
      await upload(data)
    }
  }
}
</script>

<style scoped>
/* #upload {
    text-align: center
} */
</style>
