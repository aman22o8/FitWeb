import React from 'react'
import Landing from '../component/Landing'
import Marquepage from './Marquepage'

const Landingpage = () => {
  return (
    <div>
        <Landing/>
        <div className='h-screen width-full bg-slate-500'>We can add some other thing</div>
        <Marquepage/>
        </div>
  )
}

export default Landingpage