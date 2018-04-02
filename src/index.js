import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'

import './index.css'
import { AUTH_TOKEN } from './constants'
import App from './components/App'

const httpLink = createHttpLink({
  uri: '/graphql'
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem(AUTH_TOKEN)
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
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
