import OktaSignIn from '@okta/okta-signin-widget'
import { OktaAuth } from '@okta/okta-auth-js'

const oktaSignIn = new OktaSignIn({
  baseUrl: 'https://dev-75979087.okta.com',
  clientId: '0oa7a1m2ifpFbze165d7',
  redirectUri: 'http://localhost:3000/login/callback',
  authParams: {
    pkce: true,
    issuer: 'https://dev-75979087.okta.com/oauth2/default',
    display: 'page',
    scopes: ['openid', 'profile', 'email']
  },
  features: { registration: true }
})

const oktaAuth = new OktaAuth({
  issuer: 'https://dev-75979087.okta.com/oauth2/default',
  clientId: '0oa7a1m2ifpFbze165d7',
  redirectUri: 'http://localhost:3000/login/callback',
  scopes: ['openid', 'profile', 'email']
})

export { oktaAuth, oktaSignIn }
