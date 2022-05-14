import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './header'
import Dashboard from './dashboard'
import Main from './main'
import Profile from './profile'

const Home = () => {
  return (
    <Router>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
            <Switch>
              <Route exact path="/dashboard" component={() => <Dashboard />} />
              <Route exact path="/dashboard/main" component={() => <Main />} />
              <Route exact path="/dashboard/profile/:user" component={() => <Profile />} />
            </Switch>
        </div>
      </div>
    </Router>
  )
}

Home.propTypes = {}

export default React.memo(Home)
