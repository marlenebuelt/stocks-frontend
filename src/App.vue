<template>
  <navbar></navbar>
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'app',
  data: function () {
    return { authenticated: false }
  },
  components: { Navbar },

  async created () {
    await this.isAuthenticated()
    this.$auth.authStateManager.subscribe(this.isAuthenticated)
  },
  watch: {
    // checks for auth status everytime the route changes
    $route: 'isAuthenticated'
  },
  methods: {
    async isAuthenticated () {
      this.authenticated = await this.$auth.isAuthenticated()
    },
    async logout () {
      await this.$auth.signOut()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2f2b2b;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  minWidth: 100vw;
  background: lightgray;
}
body {
  font-family: 'Poppins', sans-serif;
}
nav {
}

nav a {
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: black;
}
</style>
