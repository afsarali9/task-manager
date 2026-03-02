import { createSlice } from '@reduxjs/toolkit'

const savedTasks = JSON.parse(localStorage.getItem("tasks"))
const initialState = savedTasks || []

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action) => [...state, { id: Date.now(), task: action.payload, complete: false }],

    isComplete: (state, action) => state.map(item => item.id === action.payload ? { ...item, complete: !item.complete } : item),

    editTask: (state, action) => {
      const { id, task } = action.payload
      return state.map(todo =>
        todo.id === id
          ? { ...todo, task }
          : todo
      )
    },

    removeTask: (state, action) => {
      const task = state.find(item => item.id === action.payload)
      if (task?.complete) {
        return state
      }
      return state.filter(item => item.id !== action.payload)
    }
  }
})

export const { addTask, isComplete, removeTask, editTask } = todoSlice.actions
export default todoSlice.reducer 