import React from 'react'
import { withAuthenticator, AmplifySignIn } from '@aws-amplify/ui-react'
import './Auth'

const App = () => {
  <div>
    <AmplifySignIn />
  </div>
}

export default withAuthenticator(App)
