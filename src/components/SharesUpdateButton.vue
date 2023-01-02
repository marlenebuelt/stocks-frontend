<template>
  <div>
    <button type="button" class="btn btn-light">Update Values</button>
  </div>
</template>

<script>
export default {
  name: 'SharesUpdateButton',
  data () {
    return {
      // wkn: '',
      // name: '',
      stocksPrice: '',
      buy: false
    }
  },
  emits: ['updated'],
  methods: {
    updateShare () {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/shares'
      const headers = new Headers()
      headers.append('Content-Type', 'application/json')

      const shareUpdate = JSON.stringify({
        stocksPrice: this.stocksPrice,
        buy: this.buy
      })
      const requestOptions = {
        method: 'PUT',
        headers: headers,
        body: shareUpdate,
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
    }
  }
}
</script>

<style>

</style>
