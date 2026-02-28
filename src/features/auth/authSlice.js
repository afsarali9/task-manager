import { createSlice } from "@reduxjs/toolkit"

const savedUser = JSON.parse(localStorage.getItem("user"))
const initialState = {
  user: savedUser || null
}
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = null
    }
  }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer