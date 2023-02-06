import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "0",
    name: "Bett Cooper",
  },
  {
    id: "1",
    name: "Ryan Pratama",
  },
  {
    id: "2",
    name: "Phil Jones",
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
