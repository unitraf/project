import React from 'react'
import { Outlet } from 'react-router-dom'

const Comptabilte = () => {
  return (
    <div>Comptabilte
{Outlet}
      <div><Outlet/></div>
    </div>
  )
}

export default Comptabilte