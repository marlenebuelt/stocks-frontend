<template>
  <div class="accordion accordion-flush" id="accordionFlushExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingOne">
        <button class="accordion-button collapsed" type="button" id="button-close" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
          Add a new Share to Your List!
        </button>
      </h2>
      <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
           data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
          <form class="row g-3 needs-validation" id="shares-create-form" novalidate>
            <div class="col-md-4">
              <label for="validationDefault01" class="form-label">WKN</label>
              <input type="text" class="form-control" id="validationWKN" v-model="wkn" required>
              <div class="invalid-tooltip">
                Please provide a WKN-number.
              </div>
            </div>
            <div class="col-md-4">
              <label for="validationDefault02" class="form-label">Name</label>
              <input type="text" class="form-control" id="validationName" v-model="name" required>
              <div class="invalid-tooltip">
                Please provide a name.
              </div>
            </div>
            <div class="col-md-4">
              <label for="validationDefaultUsername" class="form-label">Price</label>
              <div class="input-group">
                <span class="input-group-text" id="inputGroupPrepend2">€</span>
                <input type="text" class="form-control" id="validationPrice" v-model="stocksPrice" required>
                <div class="invalid-tooltip">
                  Please provide a price.
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="buy" v-model="buy">
                <label class="form-check-label" for="invalidCheck2">
                  Buy?
                </label>
              </div>
            </div>
            <div v-if="this.serverValidationMessages">
              <ul>
                <li v-for="(message, index) in serverValidationMessages" :key="index" style="color: red">
                  {{ message }}
                </li>
              </ul>
            </div>
            <div class="col-12">
              <button class="btn btn-primary" type="submit" @click.prevent="createShare"> Add Share</button>
              <button class="btn btn-danger" type="reset">Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SharesCreateForm',
  data () {
    return {
      wkn: '',
      name: '',
      stocksPrice: '',
      buy: false,
      serverValidationMessages: []
    }
  },
  emits: ['created'],
  methods: {
    async createShare () {
      if (this.validate()) {
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
        console.log(endpoint)
        console.log(share)
        console.log(headers)
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: share,
          redirect: 'follow'
        }
        const response = await fetch(endpoint, requestOptions)
        await this.handleResponse(response)
      }
    },
    async handleResponse (response) {
      if (response.ok) {
        console.log(response)
        // this.$emit('created', response.headers.get('Location'))
        document.getElementById('button-close').click()
      } else if (response.status === 400) {
        response = await response.json()
        response.errors.forEach(error => {
          this.serverValidationMessages.push(error.defaultMessage)
        })
      } else {
        this.serverValidationMessages.push('Unknown error occurred')
      }
    },
    validate () {
      const form = document.getElementById('shares-create-form')
      form.classList.add('was-validated')
      return form.checkValidity()
    }
  }
}
</script>
