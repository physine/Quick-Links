import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { selectText, updateText, clearText } from '../navBarAdd/navBarAddSlice'
import { addNavItem } from '../navBarList/navBarSlice'

import '../navBarAdd/navBarAddStyle.css'

const NavBarAdd = () => {
  const text = useSelector(selectText)
  const dispatch = useDispatch()
  
  const onClickAdd = () => {    
    if(text){
      dispatch(addNavItem(text)) 
      dispatch(clearText())
    }    
  }
  
  const onChangeText = ({ target }) => {
    dispatch(updateText(target.value))
  }

  const onKeyDown = ({ key }) => {    
    if(key === 'Enter')
      onClickAdd()
  }
 
  return (
    <div className='navBarAdd'>
      <input onKeyDown={onKeyDown} onChange={onChangeText} value={text} className='navBarAddInput' placeholder='Add new list'></input>
      <button onClick={onClickAdd}  className='navBarAddBtn'>Add</button> 
    </div>    
  )
}

export default NavBarAdd