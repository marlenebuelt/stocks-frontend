<template>
  <div id="profile">
    <h1>Hi, {{ details.given_name }} 🙂 </h1>
    <p>
      Welcome to your profile.
    </p>
    <button type="button" class="btn btn-primary" onclick="location.href='/AllShares';">Click here to see your Shares! </button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: 'Profile',
  data () {
    return {
      claims: [],
      details: {}
    }
  },
  async created () {
    this.details = await this.$auth.getUser()
    console.log((this.details))
  }
}
</script>
