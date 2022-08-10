import { createSlice } from '@reduxjs/toolkit'

// =============== Slice Object ===============
export const navBarAddSlice = createSlice({
    name:'navBarAdd',
    initialState:'',
    reducers:{
        updateText:(state, action) => {            
            return action.payload
        },
        clearText:() => {
            return ''
        }
    }
})

// =============== Selectors ===============
export const selectText = state => state.navBarAdd

// =============== Exports ===============
export const {
    updateText,
    clearText    
} = navBarAddSlice.actions

export default navBarAddSlice.reducer