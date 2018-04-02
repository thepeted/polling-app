import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import PollSummary from './PollSummary'

const GET_POLLS = gql`
  {
    polls {
      name
      id
    }
  }
`

const PollList = () => (
  <Query query={GET_POLLS}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...'
      if (error) return `Error ${error.message}`

      return (
        <div style={{ display: 'flex' }}>
          {data.polls.map(poll => <PollSummary key={poll.id} poll={poll} />)}
        </div>
      )
    }}
  </Query>
)

export default PollList
