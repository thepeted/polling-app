import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

import App from './components/App'

const client = new ApolloClient({
  uri: process.env.SERVER_URI || 'http://localhost:4000/'
})

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <div>
        <App />
      </div>
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker()
