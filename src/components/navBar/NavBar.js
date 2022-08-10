import React from 'react'

import NavBarAdd from '../../features/navBarAdd/NavBarAdd'
import NavBarList from '../../features/navBarList/NavBarList'
import NavBarSearch from '../../features/navBarSearch/NavBarSearch'


import '../navBar/navBarStyle.css'

const NavBar = () => {
  return (
    <div className='navBar'>
      <NavBarSearch></NavBarSearch>
      <NavBarList></NavBarList>
      <NavBarAdd></NavBarAdd>
    </div>
  )
}

export default NavBar