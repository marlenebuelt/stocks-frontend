<template>
  <button class="btn btn-close" @click.prevent="deleteShare(shares.id)"></button>
</template>
<script>

export default {
  methods: {
    async deleteShare () {
      name: 'deleteShares',
      data () {
        return {
          shares: []
        }
      },
      methods: {
        async deleteShare(shareLocation)
        {
          const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + shareLocation
          const requestOptionDelete = {
            method: 'DELETE',
            redirect: 'follow'
          }
          fetch(endpoint, requestOptionDelete)
            .then(responseDelete => responseDelete.json())
            .then(share => this.shares.push(share))
            .catch(error => console.log('error', error))
        }
      },
      mounted()
      {
        const requestOptionDelete = {
          method: 'DELETE',
          redirect: 'follow'
        }

        fetch(endpoint, requestOptionDelete)
          .then(responseDelete => responseDelete.json())
          .then(resultDelete => resultDelete.forEach(share => {
            this.shares.push(share)
          }))
      }
    }
  }
}
</script>
