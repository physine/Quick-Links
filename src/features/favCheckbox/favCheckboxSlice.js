import { createSlice } from '@reduxjs/toolkit'

// =============== Slice Object ===============
export const favCheckboxSlice = createSlice({
    name:'favCheckbox',
    initialState:false,
    reducers:{
        toggleDisplayFav:(state, action) => {            
            return state ? false : true
        }
    }
})

// =============== Selectors ===============
export const selectIsAllFavs = state => state.favCheckbox

// =============== Exports ===============
export const {
    toggleDisplayFav,    
} = favCheckboxSlice.actions

export default favCheckboxSlice.reducer