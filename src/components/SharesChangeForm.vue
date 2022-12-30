<template>
  <div>
    <button type="button" class="btn btn-light">Update Values</button>
  </div>
</template>

<script>
export default {
  name: 'SharesChangeForm',
  data () {
    return {
      wkn: '',
      name: '',
      stocksPrice: '',
      buy: false
    }
  },
  emits: ['updated'],
  methods: {
    updateShare () {
      console.log(this.wkn)
      console.log(this.name)
      console.log(this.stocksPrice)
      console.log(this.buy)

      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/shares'

      const headers = new Headers()
      headers.append('Content-Type', 'application/json')

      const share = JSON.stringify({
        wkn: this.wkn,
        name: this.name,
        stocksPrice: this.stocksPrice,
        buy: this.buy
      })

      const requestOptions = {
        method: 'PUT',
        headers: headers,
        body: share,
        redirect: 'follow'
      }
      console.log(this.name)
      fetch(endpoint, requestOptions)
        .then(response => response.text())
        .catch(error => console.log('error', error))
    }
  }
}
</script>
