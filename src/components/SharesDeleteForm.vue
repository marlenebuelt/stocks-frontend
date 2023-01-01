<template>
  <div>
  <button class="btn btn-close" type="button" @click="deleteShare"></button>
  </div>
</template>

<script>
export default {
  name: 'SharesDeleteForm',
  data () {
    return {
      wkn: '',
      name: '',
      stocksPrice: '',
      buy: false
    }
  },
  emits: ['deleted'],
  methods: {
    deleteShare () {
      console.log(this.wkn)
      console.log(this.name)
      console.log(this.stocksPrice)
      console.log(this.buy)

      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/shares'

      // const headers = new Headers()
      // headers.append('Content-Type', 'application/json')

      // headers.append('Access-Control-Allow-Origin', '*')

      const share = JSON.stringify({
        wkn: this.wkn,
        name: this.name,
        stocksPrice: this.stocksPrice,
        buy: this.buy
      })

      const requestOptions = {
        method: 'DELETE',
        // headers: headers,
        body: share,
        redirect: 'follow'
      }
      console.log(this.name)
      console.log('rq-op' + requestOptions)
      fetch(endpoint, requestOptions)
        .then(response => response.text())
        .catch(error => console.log('error', error))
    }
  }
}
</script>
