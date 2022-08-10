import { createSlice } from '@reduxjs/toolkit'

// =============== Slice Object ===============
export const navBarSearchSlice = createSlice({
    name:'navBarSearch',
    initialState:'',
    reducers:{
        updateText:(state, action) => {            
            return action.payload
        },
        clearText:(state, action) => {
            return ''
        }
    }    
})


// =============== Selectors ===============
export const selectSearchText = state => state.navBarSearch

// =============== Exports ===============
export const {
    updateText,
    clearText
} = navBarSearchSlice.actions

export default navBarSearchSlice.reducer