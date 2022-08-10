import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { selectText, updateText, clearText } from '../linkItemAdd/linkItemAddSlice'
import { addLinkItem } from '../navBarList/navBarSlice'

import '../../features/linkItemAdd/linkItemAddStyle.css'

const LinkItemAdd = () => {
  const dispatch = useDispatch()
  const text = useSelector(selectText)  

  const onChangeText = ({ target }) => {
    dispatch(updateText(target.value))
    //console.log('onChangeText: '+text)
  }

  const onClickAdd = () => {
    if(text){
      dispatch(addLinkItem(text))
      dispatch(clearText())
    }    
  }
  
  const onKeyDown = ({ key }) => {    
    if(key === 'Enter')
      onClickAdd()
  }

  return (
    <div className='linkItemAdd'>
      <input onKeyDown={onKeyDown} onChange={onChangeText} value={text} className='linkItemAddInput' placeholder='Add new url'></input>
      <button onClick={onClickAdd} className='linkItemAddBtn'>Add</button> 
    </div>
  )
}

export default LinkItemAdd