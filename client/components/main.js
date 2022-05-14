import React from 'react'
import {Link} from 'react-router-dom'
import Head from './head'

const Main = () => {
  return (
    <div>
      <Head title="Main" />
      <div id="title">Main</div>
      <Link to='/dashboard/profile/e2daf5cc-e8e9-4dc0-a36e-cfb647313fd5'>Go To Profile</Link>
      <Link to='/dashboard'>Go To Root</Link>
    </div>
  )
}

Main.propTypes = {}

export default Main
