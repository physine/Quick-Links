//         updateSearchText:(action) => {
//             console.log('action.payload: '+action.payload)
//             return action.payload
//         },
//         clearText:() => {
//             return ''
//         }
//     } 
// })

// export const selectSearchText = state => state.linkItemSearch

// export const {
//     updateSearchText,
//     clearSearchText
// } = linkItemSearchSlice.actions

// export default linkItemSearchSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

// =============== Slice Object ===============
export const linkItemSearchSlice = createSlice({
    name:'linkItemSearch',
    initialState:'',
    reducers:{
        updateSearchText:(state, action) => {            
            return action.payload
        },
        clearSearchText:() => {
            return ''
        }
    }    
})


// =============== Selectors ===============
export const selectSearchText = state => state.linkItemSearch

// =============== Exports ===============
export const {
    updateSearchText,
    clearSearchText
} = linkItemSearchSlice.actions

export default linkItemSearchSlice.reducer