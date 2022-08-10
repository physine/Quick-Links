import React from 'react'

import '../../features/linkItemSearch/LinkItemSearchStyle.css'

import { useDispatch, useSelector } from 'react-redux';
import FavCheckbox from '../favCheckbox/FavCheckbox'
import { selectSearchText, updateSearchText } from '../linkItemSearch/linkItemSearchSlice'
import { forceItemListStateChange } from '../navBarList/navBarSlice'

const LinkItemSearch = () => {
  const dispatch = useDispatch()  
  const text = useSelector(selectSearchText)

  const onChangeText = ({ target }) => {
    dispatch(updateSearchText(target.value))
    // force re-render on navLinkList by changing its state and making the list items pass through the filter
    dispatch(forceItemListStateChange()) 
  }

  return (
    <div className='linkItemSearch'>
      <input onChange={onChangeText} className='linkItemSearchInput' value={text} placeholder='Search' type='text'></input>
      
      <FavCheckbox></FavCheckbox>
    </div>
  )
}

export default LinkItemSearch