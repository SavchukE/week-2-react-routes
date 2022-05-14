import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Head from './head'

const Profile = () => {
  const { user } = useParams()  
  return (
    <div>
      <Head title="Profile" />
      <div id="title">Profile </div>
      <Link to="/dashboard">Go To Root</Link>
      <Link to="/dashboard/main">Go To main</Link>
      <div id="username">{user}</div>
    </div>
  )
}

Profile.propTypes = {}

export default Profile
