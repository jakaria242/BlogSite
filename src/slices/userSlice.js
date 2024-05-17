import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value:  localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")): null ,
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    loginuser: (state, action) => {
      state.value = action.payload
    },
  },
})


export const { loginuser } = userSlice.actions

export default userSlice.reducer