const max = 100000000 // 100,000,000
const min = 1
export const newKey = () =>  Math.floor ( Math.random() * (max - min) + min )

export const getSelectedNavLinkItemList = state => {
    for(let i=0; i<state.navBarList.length; ++i)
        if(state.navBarList[i].isSelected)
            return state.navBarList[i].linkItemList
}

export const getSelectedNavLinkItemListIndex = state => {
    for(let i=0; i<state.navBarList.length; ++i)
        if(state.navBarList[i].isSelected)
            return i
}

export const getInFocusLinkItemIndex = state => {
    for(let i=0; i<state.length; ++i){
        if(state[i].isSelected){
            for(let j=0; j<state[i].linkItemList.length; ++j){
                if(state[i].linkItemList[j].isInFocus){
                    return j
                }
            }
        }
    }
}

export const getInFocusLinkItemUrlText = state => {
    for(let i=0; i<state.length; ++i){
        if(state[i].isSelected){
            for(let j=0; j<state[i].linkItemList.length; ++j){
                if(state[i].linkItemList[j].isInFocus){
                    return state[i].linkItemList[j].url
                }
            }
        }
    }
}

export const getNavItemIndexByKey = (state, key) => {
    for(let i=0; i<state.length; ++i)
        if(state[i].navItemKey === key)
            return i
}

// =========================== Filters =========================== //
//state.navBarList

export const applyLinkListFilters = (linkItemList, linkItemSearch, favCheckbox) => {
    if(favCheckbox)
        linkItemList = linkItemList.filter(linkItem => linkItem.isFav)
        
    if(linkItemSearch && linkItemSearch !== ''){
        linkItemList = linkItemList.filter(linkItem => 
            linkItem.url.toLowerCase().includes(linkItemSearch.toLowerCase()) ||
            linkItem.note.toLowerCase().includes(linkItemSearch.toLowerCase()))
    }
    return linkItemList
}

export const applyNavBarListFilters = (navBarList, navBarSearch) => {
    if(navBarSearch && navBarSearch !== ''){
        navBarList = navBarList.filter(navItem => 
            navItem.title.toLowerCase().includes(navBarSearch.toLowerCase()))
    }
    return navBarList    
}