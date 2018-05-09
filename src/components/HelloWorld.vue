<template>
  <div class="hello">
      <croppa v-model="myCroppa"
        :width="256"
        :height="256"
        :quality="1"
        placeholder="拖动或点击选择照片"
        :placeholder-font-size="0"
        :disabled="false"
        :prevent-white-space="false"
        :show-remove-button="true"></croppa>
        <p>{{base64}}</p>
        <img :src="base64" />
        <button @click="getBase64URI" class="button is-black"> Generate URI </button>
  </div>
</template>

<script>
import { upload } from '@/api'
import request from 'superagent'
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
  methods: {
    async getBase64URI () {
      // const data = this.myCroppa.generateDataUrl('image/jpeg', 0.5)
      const blob = await this.myCroppa.promisedBlob('image/jpeg', 0.5)
      var file = new File([blob], 'dravatar')
      const formData = new FormData()
      formData.append('smfile', file)

      const {body} = await request.post('https://sm.ms/api/upload').send(formData)
      const {code, data} = body
      console.log(data)
      if (code === 'success') {
        const {url} = data
        upload(url).then(console.warn)
      } else {

      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  text-align: center;
}

</style>
