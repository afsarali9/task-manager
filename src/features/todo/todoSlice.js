import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    addTask: (state, action) => [...state, { id: Date.now(), task: action.payload, complete: false }],

    isComplete: (state, action) => state.map(item => item.id === action.payload ? { ...item, complete: !item.complete } : item),

    removeTask: (state, action) => {
      const task = state.find(item => item.id === action.payload)
      if (task?.complete) {
        return
      }
      return state.filter(item => item.id !== action.payload)
    }
  }
})

export const { addTask, isComplete, removeTask } = todoSlice.actions
export default todoSlice.reducer 