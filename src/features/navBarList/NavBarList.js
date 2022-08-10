import React from 'react'
import { useSelector } from 'react-redux'

import { selectNavBarList } from '../../features/navBarList/navBarSlice'
import NavBarItem from '../navBarItem/NavBarItem'

import '../navBarList/navBarListStyle.css'

const NavBarList = () => {
  const navBarList = useSelector(selectNavBarList)
  
  return (
    <div className='navBarList scroll'>
      {navBarList?.map(navItem => (     
        <div key={navItem.navItemKey}>
          <NavBarItem title={navItem.title} navItemKey={navItem.navItemKey}></NavBarItem>
        </div>           
      ))}
    </div>
  )
}

// navItemKey
// title
// isSelected
// linkItemList

export default NavBarList