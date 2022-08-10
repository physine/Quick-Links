import React from 'react'
import { useSelector } from 'react-redux';

import { selectIsSelectedLinkItemList } from '../navBarList/navBarSlice'

import LinkItem from '../linkItem/LinkItem'

import '../../features/linkItemList/linkItemListStyle.css'

const LinkItemList = () => {
  const linkItemList = useSelector(selectIsSelectedLinkItemList)
   
  return (    
    <div className='linkItemList scroll'>
      {linkItemList?.map(linkItem => (     
        <div key={linkItem.linkItemKey}>
          <LinkItem linkItemKey={linkItem.linkItemKey} note={linkItem.note} url={linkItem.url} isFav={linkItem.isFav} readOnly></LinkItem>
        </div>           
      ))}
    </div>
  )
}

export default LinkItemList