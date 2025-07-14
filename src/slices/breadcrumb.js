import { createSlice } from '@reduxjs/toolkit'

export const breadcrumb = createSlice({
  name: 'bread',
  initialState: {
    prevvalue: null,
    curntvalue: null
  },
  reducers: {
    breadbutton: (state,action) => {
        if (state.curntvalue !== action.payload) {
            state.prevvalue = state.curntvalue
            state.curntvalue = action.payload
        }
        
    },
    
  }
})

export const { breadbutton } = breadcrumb.actions

export default breadcrumb.reducer