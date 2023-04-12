import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

const Parametre = () => {
  const location = useLocation().pathname
  return (
    <div>
      {location==="/parametre"&&(<div>Parametre</div>) }
      

      <Outlet />
    </div>
  )
}

export default Parametre