<template>
  <form>
    <div class="mb-3">
      <label for="updatePrice" class="form-label">Update Price</label>
      <input class="form-control" id="updatePrice" v-model="stocksPrice">
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="updateBuy" v-model="buy">
        Update Buy?
    </div>
    <button type="submit" @click.prevent="updateShare" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'SharesUpdateForm',
  data () {
    return {
      stocksPrice: '',
      buy: false
    }
  },
  props: {
    shareId: {
      type: Number,
      required: true
    }
  },
  emits: ['updated'],
  methods: {
    updateShare () {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/shares/' + this.shareId
      const headers = new Headers()
      headers.append('Content-Type', 'application/json')

      const shareUpdate = JSON.stringify({
        name: this.name,
        stocksPrice: this.stocksPrice,
        buy: this.buy
      })
      console.log(shareUpdate)
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
