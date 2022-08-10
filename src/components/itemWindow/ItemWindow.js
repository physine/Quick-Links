import React from 'react'

import LinkItemList from '../../features/linkItemList/LinkItemList'
import LinkItemAdd from '../../features/linkItemAdd/LinkItemAdd'
import LinkItemSearch from '../../features/linkItemSearch/LinkItemSearch'

import '../itemWindow/itemWindowStyle.css'

const ItemWindow = () => {
  return (
    <div className='itemWindow'>
      <LinkItemSearch></LinkItemSearch>
      <LinkItemList></LinkItemList>      
      <LinkItemAdd></LinkItemAdd>
    </div>
  )
}

export default ItemWindow