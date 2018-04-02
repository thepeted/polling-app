import React from 'react'
import PropTypes from 'prop-types'

const PollSummary = ({ poll }) => {
  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '2rem',
        margin: '1em',
        width: '200px',
        height: '200px',
        fontSize: '24px'
      }}
    >
      {poll.name}
    </div>
  )
}
PollSummary.propTypes = {
  poll: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
}

export default PollSummary
