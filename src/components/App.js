import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PollList from './PollList'
import Header from './Header'
import Login from './Login'

const App = props => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={PollList} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/new" component={() => <div>New</div>} />
        <Route path="/:id" component={() => <div>Poll Page</div>} />
      </Switch>
    </div>
  )
}

export default App
