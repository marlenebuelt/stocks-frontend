<template>
  <div class="login">
    <div id="okta-signin-container"></div>
  </div>
</template>

<script>
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css'
import { oktaSignIn } from '../okta'
export default {
  // eslint-disable-next-line
  name: 'Login',
  mounted: function () {
    this.$nextTick(function () {
      oktaSignIn.showSignInAndRedirect(
        { el: '#okta-signin-container' }
      )
    })
  },
  unmounted () {
    oktaSignIn.remove()
  }
}
</script>

<style scoped>
</style>
