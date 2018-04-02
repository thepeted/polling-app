import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

import App from './components/App'

const client = new ApolloClient({
  uri: process.env.SERVER_URI || 'http://localhost:4000/'
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <div>
      <h2>Polling App 📊</h2>
      <App />
    </div>
  </ApolloProvider>,
  document.getElementById('root')
)
registerServiceWorker()
