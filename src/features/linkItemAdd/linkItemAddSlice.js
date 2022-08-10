import { createSlice } from '@reduxjs/toolkit'

// =============== Slice Object ===============
export const linkItemAddSlice = createSlice({
    name:'linkItemAdd',
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
export const selectText = state => state.linkItemAdd

// =============== Exports ===============
export const {
    updateText,
    clearText
} = linkItemAddSlice.actions

export default linkItemAddSlice.reducer