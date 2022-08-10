import { createSlice } from '@reduxjs/toolkit'

import {
    newKey,
    applyLinkListFilters,
    applyNavBarListFilters,
} from '../../utils'

// =============== Slice Object ===============
export const navBarSlice = createSlice({
    name:'navBarList',
    initialState:[],
    reducers:{
        forceItemListStateChange:(state, action) => {
            for(let i=0; i<state.length; ++i)
                if(state[i].isSelected)
                    state[i].toggleRender = state[i].toggleRender ? false : true
        },

        addNavItem:(state, action) => {         
            let isSelectedState = false
            if(state.length === 0)
                isSelectedState = true

            state.push({
                navItemKey:newKey(),
                title:action.payload,
                isSelected:isSelectedState,
                toggleRender:false,
                linkItemList:[],                
            })
        },        
        // navItemKey
        // title
        // isSelected
        // linkItemList

        deleteNavItem:(state, action) => {
            if(state.length === 1)
                return []

            // index of navItem to delete
            let removeIndex
            for(let i=0; i<state.length; ++i){
                if(action.payload === state[i].navItemKey){
                    removeIndex = i
                    return [
                        ...state.slice(0, removeIndex),
                        ...state.slice(removeIndex+1, state.length)
                    ]   
                }
            }                      
        },

        toggleIsSelected:(state, action) => {
            // first de-select the current selected nav item
            for(let i=0; i<state.length; ++i){
                if(state[i].isSelected)
                    state[i].isSelected = false
            }
            // second, find the nav item which needs to be selected
            for(let i=0; i<state.length; ++i)
                if(state[i].navItemKey === action.payload)
                    state[i].isSelected = true

            return state
        },

        addLinkItem:(state, action) => {            
            for(let i=0; i<state.length; ++i){
                if(state[i].isSelected){                    
                    state[i].linkItemList.push({
                        linkItemKey:newKey(),
                        url:action.payload,
                        isFav:false,
                        isInFocus: false,
                        isInFocusNote:false,
                        note:''
                    })                    
                }                
            }            
                // navItemKey
                // title (nav bar display text)  
                // sub list of urls
                    // linkItemKey
                    // url
                    // isFav

        },
        updateLinkItemUrl:(state, action) => {
            for(let i=0; i<state.length; ++i){
                if(state[i].isSelected){
                    for(let j=0; j<state[i].linkItemList.length; ++j){
                        if(state[i].linkItemList[j].isInFocus){
                            state[i].linkItemList[j].url = action.payload
                        }
                    }
                }
            }
            return state
        },
        updateLinkItemNote:(state, action) => {
            for(let i=0; i<state.length; ++i){
                if(state[i].isSelected){
                    for(let j=0; j<state[i].linkItemList.length; ++j){
                        if(state[i].linkItemList[j].isInFocusNote){
                            state[i].linkItemList[j].note = action.payload
                        }
                    }
                }
            }
            return state
        },
        deleteLinkItem:(state, action) => {
            let navItemIndex
            let linkItemIndex
            for(let i=0; i<state.length; ++i){
                if(state[i].isSelected){
                    navItemIndex = i
                    for(let j=0; j<state[i].linkItemList.length; ++j){
                        if(state[i].linkItemList[j].linkItemKey === action.payload){
                            linkItemIndex = j
                            break
                        }
                    }
                }
            }
            
            let navItem = state[navItemIndex]            
            let linkItemList = state[navItemIndex].linkItemList   

            return [
                ...state.slice(0, navItemIndex),
                {
                    navItemKey: navItem.navItemKey,
                    title: navItem.title,
                    isSelected: navItem.isSelected,
                    toggleRender:navItem.toggleRender,
                    linkItemList: [
                        ...linkItemList.slice(0, linkItemIndex),                        
                        ...linkItemList.slice(linkItemIndex+1, linkItemList.length)
                    ]
                },                
                ...state.slice(navItemIndex+1, state.length)
            ]
        },

        // toggleDisplayFav:(state, action) => {
        //     state.
        // },

        toggleFav:(state, action) => {
            let navItemIndex
            let linkItemIndex
            for(let i=0; i<state.length; ++i){
                if(state[i].isSelected){
                    navItemIndex = i
                    for(let j=0; j<state[i].linkItemList.length; ++j){
                        if(state[i].linkItemList[j].linkItemKey === action.payload){
                            linkItemIndex = j
                            break
                        }
                    }
                }
            }
            
            let navItem = state[navItemIndex]            
            let linkItemList = state[navItemIndex].linkItemList   
            let linkItem = linkItemList[linkItemIndex]

            return [
                ...state.slice(0, navItemIndex),
                {             
                    navItemKey: navItem.navItemKey,
                    title: navItem.title,
                    isSelected: navItem.isSelected,
                    toggleRender:navItem.toggleRender,
                    linkItemList: [
                        ...linkItemList.slice(0, linkItemIndex),
                        {
                            linkItemKey: linkItem.linkItemKey,
                            url: linkItem.url,
                            isFav: linkItem.isFav ? false : true,
                            isInFocus: linkItem.isInFocus,
                            isInFocusNote: linkItem.isInFocusNote,
                            note:linkItem.note
                        },
                        ...linkItemList.slice(linkItemIndex+1, linkItemList.length)
                    ]
                },                
                ...state.slice(navItemIndex+1, state.length)
            ]
        },

        toggleFocusUrl:(state, action) => {
            let navItemIndex
            let linkItemIndex
            for(let i=0; i<state.length; ++i){
                if(state[i].isSelected){
                    navItemIndex = i
                    for(let j=0; j<state[i].linkItemList.length; ++j){
                        if(state[i].linkItemList[j].linkItemKey === action.payload){
                            linkItemIndex = j
                            break
                        }
                    }
                }
            }
            
            let navItem = state[navItemIndex]            
            let linkItemList = state[navItemIndex].linkItemList   
            let linkItem = linkItemList[linkItemIndex]

            return [
                ...state.slice(0, navItemIndex),
                {
                    navItemKey: navItem.navItemKey,
                    title: navItem.title,
                    isSelected: navItem.isSelected,
                    toggleRender: navItem.toggleRender,
                    linkItemList: [
                        ...linkItemList.slice(0, linkItemIndex),
                        {
                            linkItemKey: linkItem.linkItemKey,
                            url: linkItem.url,
                            isFav: linkItem.isFav,
                            isInFocus: linkItem.isInFocus ? false : true,
                            isInFocusNote: linkItem.isInFocusNote,
                            note: linkItem.note
                        },
                        ...linkItemList.slice(linkItemIndex+1, linkItemList.length)
                    ]
                },                
                ...state.slice(navItemIndex+1, state.length)
            ]
        },

        toggleFocusNote:(state, action) => {
            let navItemIndex
            let linkItemIndex
            for(let i=0; i<state.length; ++i){
                if(state[i].isSelected){
                    navItemIndex = i
                    for(let j=0; j<state[i].linkItemList.length; ++j){
                        if(state[i].linkItemList[j].linkItemKey === action.payload){
                            linkItemIndex = j
                            break
                        }
                    }
                }
            }
            
            let navItem = state[navItemIndex]            
            let linkItemList = state[navItemIndex].linkItemList   
            let linkItem = linkItemList[linkItemIndex]

            return [
                ...state.slice(0, navItemIndex),
                {
                    navItemKey: navItem.navItemKey,
                    title: navItem.title,
                    isSelected: navItem.isSelected,
                    toggleRender:navItem.toggleRender,
                    linkItemList: [
                        ...linkItemList.slice(0, linkItemIndex),
                        {
                            linkItemKey: linkItem.linkItemKey,
                            url: linkItem.url,
                            isFav: linkItem.isFav,
                            isInFocus: linkItem.isInFocus,                            
                            isInFocusNote: linkItem.isInFocusNote ? false : true,
                            note:linkItem.note
                        },
                        ...linkItemList.slice(linkItemIndex+1, linkItemList.length)
                    ]
                },                
                ...state.slice(navItemIndex+1, state.length)
            ]
        }
    }
})

// =============== Selectors ===============
export const selectNavBarList = state => {
    return applyNavBarListFilters(state.navBarList, state.navBarSearch)
}

export const selectIsSelectedLinkItemList = state => {
    for(let i=0; i<state.navBarList.length; ++i)
        if(state.navBarList[i].isSelected){
            let list = state.navBarList[i].linkItemList
            return applyLinkListFilters(list, state.linkItemSearch, state.favCheckbox) // item list fav and/or search      
        }
}

export const selectFocusedUrlText = state => {
    for(let i=0; i<state.length; ++i){
        if(state[i].isSelected){
            for(let j=0; j<state[i].linkItemList.length; ++j){
                if(state[i].linkItemList[j].isInFocus){
                    console.log('link: '+state[i].linkItemList[j].url)
                    return state[i].linkItemList[j].url
                }
            }
        }
    }
}

export const selectFocusedNote = state => {
    for(let i=0; i<state.length; ++i){
        if(state[i].isSelected){
            for(let j=0; j<state[i].linkItemList.length; ++j){
                if(state[i].linkItemList[j].isInFocusNote){
                    console.log('link: '+state[i].linkItemList[j].note)
                    return state[i].linkItemList[j].note
                }
            }
        }
    }
}


// =============== Exports ===============
export const {
    addNavItem,
    deleteNavItem,
    addLinkItem,
    updateLinkItemUrl,
    deleteLinkItem,
    toggleFav,
    toggleIsSelected,
    toggleFocusUrl,
    toggleFocusNote,
    updateLinkItemNote,
    forceItemListStateChange
} = navBarSlice.actions

export default navBarSlice.reducer