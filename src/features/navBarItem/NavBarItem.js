import React from 'react'
import { useDispatch } from 'react-redux'

import { deleteNavItem, toggleIsSelected } from '../../features/navBarList/navBarSlice'

import '../navBarItem/navBarItemStyle.css'
import binImg from '../../images/bin-icon.png'

const NavBarItem = (props) => {
  const dispatch = useDispatch()

  const onClickDelete = () => {
    dispatch(deleteNavItem(props.navItemKey)) // deleteNavItem needs to be passes the key of the 
    
  }

  const onClickLabel = () => {
    dispatch(toggleIsSelected(props.navItemKey))
  }

  return (
    <div className='navBarItem'>
        <button onClick={onClickDelete} className='navBarItemBinBtn'>
          <img className='binImg' src={binImg} alt='' />
        </button>        
        <label className='navBarItemLabel' onClick={onClickLabel}>{props.title}</label>
    </div>
  )
}

// navItemKey
// title
// isSelected
// linkItemList

export default NavBarItem