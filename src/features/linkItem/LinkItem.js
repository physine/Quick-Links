import React from 'react'
import { useDispatch } from 'react-redux'

import {
  updateLinkItemUrl,  
  toggleFocusUrl,
  toggleFocusNote,
  deleteLinkItem,
  toggleFav,
  updateLinkItemNote  
} from '../navBarList/navBarSlice'

import '../../features/linkItem/linkItemStyle.css'
import linkImg from '../../images/link-icon.png'
import goldStarImg from '../../images/gold-star-icon.png'
import hollowStarImg from '../../images/hollow-star.png'
import binImg from '../../images/bin-icon.png'



//vertical-align: middle;   
    
   // width: 90%;
    // height: 90%;

const LinkItem = (props) => { 
  const dispatch = useDispatch()

  const onChangeUrl = ({ target }) => {
    dispatch(updateLinkItemUrl(target.value))
  }

  const onClickGoto = () => {
    window.open(props.url)
  }

  const onClickToggleFav = () => {
    dispatch(toggleFav(props.linkItemKey))
  }

  const onClickBin = () => {
    dispatch(deleteLinkItem(props.linkItemKey))
  }

  const onUrlFocus = () => {
    dispatch(toggleFocusUrl(props.linkItemKey))
  }

  const onBlur = () => {
    dispatch(toggleFocusUrl(props.linkItemKey))
  }

  const onUrlFocusNote = () => {
    dispatch(toggleFocusNote(props.linkItemKey))
  }

  const onBlurNote = () => {
    dispatch(toggleFocusNote(props.linkItemKey))
  }

  const onChnageNote = ({ target }) => {
    dispatch(updateLinkItemNote(target.value))
  }

  return (
    <div className='linkItem'>
        <input onFocus={onUrlFocus} value={props.url} onBlur={onBlur} onChange={onChangeUrl} type='text' className='linkItemLabel' placeholder='url'></input>        
        <input onFocus={onUrlFocusNote} value={props.note} onBlur={onBlurNote} onChange={onChnageNote} type='text' className='linkItemName' placeholder='note'></input>        
        
        <button onClick={onClickGoto} className='linkItemGotoLinkBtn'>
          <img className='img' src={linkImg} alt='' />  
        </button>
        
        <button onClick={onClickToggleFav} className='linkItemFavBtn'>
          <img className='img' src={props.isFav ? goldStarImg : hollowStarImg} alt='' />  
        </button>
        
        <button onClick={onClickBin} className='linkItemBinBtn'>
          <img className='img' src={binImg} alt='' />  
        </button>        
    </div>
  )
}

export default LinkItem