import React from 'react'

import '../navBarSearch/navBarSearchStyle.css'

import { useDispatch, useSelector } from 'react-redux';
import { selectSearchText, updateText } from '../navBarSearch/navBarSearchSlice'

const NavBarSearch = () => {
  const dispatch = useDispatch()
  const text = useSelector(selectSearchText)

  const updateSearchText = ({ target }) => {
    dispatch(updateText(target.value))
  }

  return (
    <div className='navBarSearch'>
      <input onChange={updateSearchText} value={text} className='navBarSearchInput' placeholder='Search'></input>
      {/* <button className='navBarSearchBtn'>Search</button>  */}
    </div>
  )
}

export default NavBarSearch