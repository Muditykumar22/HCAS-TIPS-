import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [
    { id: 1, name: 'Rahul', course: 'BCA', age: 20 },
    { id: 2, name: 'Priya', course: 'MCA', age: 22 },
    { id: 3, name: 'Amit', course: 'B.Tech', age: 21 },
  ],
}

const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.list.push(action.payload)
    },
    removeStudent: (state, action) => {
      state.list = state.list.filter((s) => s.id !== action.payload)
    },
  },
})

export const { addStudent, removeStudent } = studentSlice.actions
export default studentSlice.reducer
