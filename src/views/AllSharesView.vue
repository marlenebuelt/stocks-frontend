<template>
  <h1>All Shares</h1>
  <div class="row row-cols-1 row-cols-md-2 g-4">person
    <SharesCreateForm @created="addShare"></SharesCreateForm>
    <div class="col" v-for="share in shares" :key="share.id">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{ share.name }}</h5>
          <p class="card-text">{{ share.name }} costs {{ share.stocksPrice }} and we
            {{ share.buy ? 'recommend' : 'do not recommend' }} buying it.
            Date: {{ }}
          </p>
          <SharesDeleteForm @click="deleteShare(share.id)"></SharesDeleteForm>
          <SharesChangeForm @click="updateShare"></SharesChangeForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SharesCreateForm from '@/components/SharesCreateForm'
import SharesDeleteForm from '@/components/SharesDeleteForm'
import SharesChangeForm from '@/components/SharesChangeForm'

export default {
  name: 'AllShares',
  components: {
    SharesCreateForm,
    SharesDeleteForm,
    SharesChangeForm
  },
  data () {
    return {
      shares: [],
      dates: []
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
    deleteShare (loc) {
      // const loc = this.shares.id
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/shares/' + loc
      const requestOptions1 = {
        method: 'DELETE',
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions1)
        .then(response => response.json())
        .then(share => this.shares.push(share))
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
    },
    getDate (shareLocation) {
      console.log('shareid' + this.dates[1])
      console.log('shareid2' + this.dates[1].id)
      for (const date of this.dates) {
        if (shareLocation === date.share_id) {
          return date.date
        }
      }
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

    const endpointDate = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/dates/'
    const requestOptionsDate = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch(endpointDate, requestOptionsDate)
      .then(response => response.json())
      .then(result => result.forEach(date => {
        this.dates.push(date)
      })).catch(error => console.log('error', error))

    /* const requestOptionDelete = {
      method: 'DELETE',
      redirect: 'follow'
    }
    const endpointDel = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/shares/4'
    fetch(endpointDel, requestOptionDelete)
      .then(response => response.json())
      .then(result => result.forEach(share => {
        this.shares.push(share)
        console.log(share.id)
        console.log(endpointDel)
      })).catch(error => console.log('error', error)) */

    const requestOptionsUpdate = {
      method: 'PUT',
      redirect: 'follow'
    }
    console.log(this.name)
    fetch(endpoint, requestOptionsUpdate)
      .then(response => response.json())
      .then(share => this.shares.push(share))
      .catch(error => console.log('error', error))
  }
}
</script>
