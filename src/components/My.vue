<template>
<div id="upload">
    <section class="hero">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              我的资料
            </h1>
            <h2 class="subtitle">
              你可以更新、查看你的个人资料
            </h2>
          </div>
        </div>
      </section>
    <div class="columns">
      <div class="column">
      <div class="card">
  <div class="card-image">
    <figure class="image is-256x256">
      <img :src="input.avatar" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <!-- <div class="media-left">
        <figure class="image is-48x48">
          <img :src="input.avatar" alt="Placeholder image">
        </figure>
      </div> -->
      <div class="media-content">
        <p class="title is-4">{{input.nickname}}</p>
        <p class="subtitle is-6">钱包地址：{{address}}</p>
      </div>
    </div>

    <div class="content">
      签名：{{input.bio}}
    </div>
  </div>
</div>
    </div>
          <div class="column">
            <div class="field">
          <label class="label">头像</label>
          <div class="control">
              <croppa v-model="myCroppa"
                :width="256"
                :height="256"
                :quality="1"
                placeholder="拖动或点击选择头像"
                :placeholder-font-size="0"
                :disabled="false"
                :prevent-white-space="false"
                :show-remove-button="true">
                <img :src="input.avatar" slot="initial" alt="">
                </croppa>
          </div>
        </div>

        <div class="field">
          <label class="label">昵称</label>
          <div class="control">
            <input class="input" type="text" placeholder="Your nickname" v-model="input.nickname">
          </div>
        </div>

        <div class="field">
          <label class="label">签名</label>
          <div class="control">
            <textarea class="textarea" placeholder="Your bio" v-model="input.bio"></textarea>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button @click="getBase64URI" class="button is-black">更新资料</button>
          </div>
          <div class="control">
            <button class="button is-text">Cancel</button>
          </div>
        </div>

          </div>

  </div>
</div>
</template>

<script>
import { upload, get, asyncGetAddr } from '@/api'
// import request from 'superagent'
// import { compress } from '@/lib/lzma'
export default {
  name: 'HelloWorld',
  computed: {
    // address () {
    //   return 'n1MmUacQExJwkD1xHggwaEvTpKgUeSmV4Af'
    // }
  },
  data () {
    return {
      myCroppa: {},
      address: '',
      input: {
        nickname: '',
        bio: ''
      }
    }
  },
  async created () {
    // TODO: 获取插件当前钱包地址，现在是 hard-encode 了我的头像
    const addr = await asyncGetAddr()
    this.address = addr
    const myInfo = await get(this.address)
    this.input = JSON.parse(myInfo)
  },
  methods: {
    async getBase64URI () {
      const avatar = this.myCroppa.generateDataUrl('image/jpeg')
      const {nickname, bio} = this.input
      // const blob = await this.myCroppa.promisedBlob('image/jpeg', 0.5)
      // var file = new File([blob], 'dravatar')
      // console.log(file)
      const payload = JSON.stringify({ avatar, nickname, bio })
      await upload(payload)
    }
  }
}
</script>

<style scoped>
/* #upload {
    text-align: center
} */
.card {
  max-width: 65%;
}
</style>
