import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { toggleDisplayFav, selectIsAllFavs } from '../favCheckbox/favCheckboxSlice'

import './favCheckboxStyle.css'

import goldStarImg from '../../images/gold-star-icon.png'
import hollowStarImg from '../../images/hollow-star.png'

const FavCheckbox = () => {
    const dispatch = useDispatch()
    const isAllFavs = useSelector(selectIsAllFavs)

    const toggleDisplayFavHandler = () => {
        dispatch(toggleDisplayFav())
    }

    return (
        <div className='linkItemSearchLable'>
            <label>favorites only:</label>
            <input onChange={toggleDisplayFavHandler} className='linkItemSearchFavToggle' type='checkbox'></input>

            {/* <button onClick={toggleDisplayFavHandler} className='linkItemFavBtn'>
                <img className='img' src={isAllFavs ? goldStarImg : hollowStarImg} alt='' />  
            </button> */}
        </div>
    )
}

export default FavCheckbox