<template>
  <h1>All Shares</h1>
  <div class="row row-cols-1 row-cols-md-2 g-4">
    <SharesCreateForm @created="addShare"></SharesCreateForm>
    <div class="col" v-for="share in shares" :key="share.id">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{ share.name }}</h5>
          <p class="card-text">{{ share.name }} costs {{ share.stocksPrice }} and we
            {{ share.buy ? 'recommend' : 'do not recommend' }} buying it.
            WKN: {{share.wkn}}
          </p>
          <button class="btn btn-close" type="button" @click="deleteShare(share.id)"></button>
          <SharesUpdateForm :name="share.name" :shareId="share.id"></SharesUpdateForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SharesCreateForm from '@/components/SharesCreateForm'
import SharesUpdateForm from '@/components/SharesUpdateForm'

export default {
  name: 'AllShares',
  components: {
    SharesUpdateForm,
    SharesCreateForm
  },
  data () {
    return {
      shares: []
    }
  },
  methods: {
    addShare (shareLocation) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + shareLocation
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(share => this.shares.push(share))
        .catch(error => console.log('error', error))
    },
    deleteShare (shareLocation) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/shares/' + shareLocation
      const requestOptionsDel = {
        method: 'DELETE',
        redirect: 'follow'
      }
      fetch(endpoint, requestOptionsDel)
        .then(response => {
          const index = this.shares.findIndex(share => share.id === shareLocation)
          this.shares.splice(index, 1)
        })
        .catch(error => console.log('error', error))
    },
    updateShare (shareLocation) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + shareLocation
      const requestOptions = {
        method: 'PUT',
        redirect: 'follow'
      }
      console.log(this.name)
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(share => this.shares.push(share))
        .catch(error => console.log('error', error))
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/shares/'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(share => {
        this.shares.push(share)
      })).catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
