<template>
  <h1>All Shares</h1>
  <div class="row row-cols-1 row-cols-md-2 g-4">
    <SharesCreateForm @created="addShare"></SharesCreateForm>
    <div class="col" v-for="share in shares" :key="share.id">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{ share.name }}</h5>
          <p class="card-text">{{ share.name }} costs {{ share.stocksPrice }} and we
            {{ share.buy ? 'recommend' : 'do not recommend' }} buying it. </p>
          <button class="btn btn-close" @click.prevent="deleteShare(shares.id)"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SharesCreateForm from '@/components/SharesCreateForm'

export default {
  name: 'AllShares',
  components: { SharesCreateForm },
  data () {
    return {
      shares: []
    }
  },
  methods: {
    async addShare (shareLocation) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + shareLocation
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(share => this.shares.push(share))
        .catch(error => console.log('error', error))
    }

    /* async deleteShare (shareLocation) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + shareLocation
      const requestOptionDelete = {
        method: 'DELETE',
        redirect: 'follow'
      }
      fetch(endpoint, requestOptionDelete)
        .then(response => response.json())
        .then(share => this.shares.push(share))
        .catch(error => console.log('error', error))
    } */
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/shares/'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    /* const requestOptionDelete = {
      method: 'DELETE',
      redirect: 'follow'
    } */
    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(share => {
        this.shares.push(share)
      })).catch(error => console.log('error', error))
  }
  /* fetch(endpoint, requestOptionDelete)
    .then(response => response.json())
    .then(result => result.forEach(share => {
      this.shares.push(share)
    })) */
}
</script>
