import React from 'react'
import {Link} from 'react-router-dom'
import Head from './head'

const Dashboard = () => {
  return (
    <div>
      <Head title="Dashboard" />
      <div id="title">Dashboard</div>
      <Link to="/dashboard/profile/e2daf5cc-e8e9-4dc0-a36e-cfb647313fd5">Go To Profile</Link>
      <Link to="/dashboard/main">Go To Main</Link>
    </div>
  )
} 

Dashboard.propTypes = {}

export default Dashboard
