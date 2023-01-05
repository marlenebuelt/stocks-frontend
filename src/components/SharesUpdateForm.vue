<template>
  <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <div class="accordion-header" id="update">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Update Price
        </button>
      </div>
      <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <div class="mb-3">
            <label for="updatePrice" class="form-label">Update Price</label>
            <input class="form-control" id="updatePrice" v-model="stocksPrice">
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="updateBuy" v-model="buy">
            Update Buy?
          </div>
          <button type="submit" @click="updateShare" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </div>
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
    },
    name: {
      type: String,
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
